import { Chart } from "../Chart";
import { BarDto } from "../../../dto/Bar.dto";
import { ChankDataDto } from "../../../dto/ChankData.dto";
import { ColorsService } from "../../../services/Colors.service";

const fontHeight = 16 // px
const legendVerticalPadding = 8; // px
const bottomLegendHeight = fontHeight + legendVerticalPadding * 2; // px
const rightLegendWidth = 100; // px

export class BarChart extends Chart {
  protected chartChanks: ChankDataDto[];

  protected chartWidth: number;
  protected chartBarsAreaWidth: number;
  protected chartHeight: number;
  protected totalDataLength: number;
  protected allBars: BarDto[];
  protected barWidth: number;
  protected minValue: number;
  protected maxValue: number;

  protected mouseDown = false;
  protected mouseDownX = 0;
  protected scale = 1; // 1 - 100
  protected shift = 0; // px

  constructor(data?: ChankDataDto[]) {
    super();

    this.putData(data);
  }

  putData(data: ChankDataDto[]) {
    if (!data) return;

    this.chartChanks = data;

    this.hideSpinner();
    this.createListeners();
    this.calculateStaticValues();

    this.draw(() => {
      this.calculateDynamicValues();
      this.drawChart();
    });
  }

  drawChart() {
    this.drawChanks();
    this.drawBars();
    this.drawLegend();
  }

  calculateStaticValues() {
    this.allBars = [];
    this.chartChanks.forEach((chankData) => {
      const startTime = chankData.ChunkStart;

      chankData.Bars.forEach((bar) => {
        this.allBars.push({
          ...bar,
          Time: startTime + bar.Time
        });
      });
    });

    this.totalDataLength = this.allBars.length;

    for (let i = 0; i < this.allBars.length; i++) {
      if (i === 0) {
        this.minValue = this.allBars[i].Low;
        this.maxValue = this.allBars[i].High;
      } else {
        this.minValue = Math.min(this.minValue, this.allBars[i].Low);
        this.maxValue = Math.max(this.maxValue, this.allBars[i].High);
      }
    }
  }

  calculateDynamicValues() {
    this.chartWidth = this.canvas.width * this.scale;
    this.chartHeight = this.canvas.height - bottomLegendHeight;
    this.chartBarsAreaWidth = this.chartWidth - rightLegendWidth;
    this.barWidth = this.chartBarsAreaWidth / this.totalDataLength;
  }

  zoom(e: WheelEvent) {
    const delta = e.deltaY;
    const direction = delta > 0 ? -1 : 1;
    const mouseX = e.offsetX;

    const prevScale = this.scale;
    const nextValue = this.scale * (direction === 1 ? 1.1 : 0.9);
    const nextScale = Math.min(Math.max(nextValue, 1), 100);

    // Here was the AI help
    const scaleRatio = nextScale / prevScale;
    const mouseXInChartSpace = mouseX - this.shift;
    const newShift = mouseX - mouseXInChartSpace * scaleRatio;

    this.scale = nextScale;
    this.shiftChart(newShift);
  }

  shiftChart(nextValue: number) {
    this.shift = Math.max(Math.min(nextValue, 0), this.canvas.width - this.chartWidth);

    this.render();
  }

  setCursorType(type: string) {
    this.canvas.style.cursor = type;
  }

  destroyChart(): this {
    super.destroyChart();
    this.destroyListeners();

    return this;
  }

  // Drawings

  drawChanks() {
    const getChankWidth = (i: number) => {
      if (i < 0) return 0;
      return this.chartBarsAreaWidth / this.totalDataLength * this.chartChanks[i].Bars.length;
    }

    this.chartChanks.forEach((_, i) => {
      this.ctx.fillStyle = ColorsService.getThemeColor(`chank-bg-color-${i + 1 % 2}`)
      this.ctx.fillRect(
        i * getChankWidth(i - 1) + this.shift,
        0,
        getChankWidth(i),
        this.chartHeight
      );
    });
  }

  drawMesh() {
    // Draw a gray mesh to represent coordinate system for data
    const stepX = this.chartBarsAreaWidth / 20;
    const stepY = this.chartHeight / 10;

    this.ctx.strokeStyle = 'gray';
    this.ctx.lineWidth = 0.5;

    // Draw vertical lines
    for (let x = 0; x <= this.chartBarsAreaWidth; x += stepX) {
      this.ctx.beginPath();
      this.ctx.moveTo(x + this.shift, 0);
      this.ctx.lineTo(x + this.shift, this.chartHeight);
      this.ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= this.chartHeight; y += stepY) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.shift, y);
      this.ctx.lineTo(this.chartBarsAreaWidth + this.shift, y);
      this.ctx.stroke();
    }
  }

  drawBars() {
    this.allBars.forEach((bar, i) => {
      const priceChange = bar.Close - bar.Open;
      const volatility = bar.High - bar.Low; // I guess it's not the purpose of the task. Skip it for now.

      this.ctx.fillStyle = ColorsService.getThemeColor(priceChange > 0 ? 'bar-up-color' : 'bar-down-color');
      this.ctx.fillRect(
        i * this.barWidth + this.shift,
        this.chartHeight - (bar.Close - this.minValue) / (this.maxValue - this.minValue) * this.chartHeight,
        this.barWidth,
        (bar.Close - bar.Open) / (this.maxValue - this.minValue) * this.chartHeight
      );
    });
  }

  drawSeparators() {
    // Horizontal line
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.chartHeight);
    this.ctx.lineTo(this.canvas.width, this.chartHeight);
    this.ctx.stroke();

    // Draw vertical white rectangle to always cover top right place on screen
    // Width = rightLegendWidth
    // Height = this.chartHeight - bottomLegendHeight
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(
      this.canvas.width - rightLegendWidth,
      0,
      rightLegendWidth,
      this.chartHeight + 1
    );

    // Draw hirizontal white rectangle to always cover bottom right place on screen
    // Width = this.chartWidth
    // Height = bottomLegendHeight
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(
      this.shift,
      this.chartHeight,
      this.chartWidth,
      bottomLegendHeight
    );

    // Draw vertical black line at the left edge of white rectangle
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width - rightLegendWidth, 0);
    this.ctx.lineTo(this.canvas.width - rightLegendWidth, this.chartHeight);
    this.ctx.stroke();
  }

  drawBottomLabels() {
    const labelCount = 10;
    const step = Math.floor(this.totalDataLength / labelCount);

    this.ctx.fillStyle = 'black';
    this.ctx.font = `${fontHeight}px Arial`;
    this.ctx.textAlign = 'center';

    for (let i = 1; i < labelCount; i++) { // Start from 1 to avoid the first label
      const barIndex = Math.min(i * step, this.totalDataLength - 1);
      const bar = this.allBars[barIndex];
      const label = new Date(bar?.Time).toLocaleTimeString();

      const x = barIndex * this.barWidth + this.barWidth / 2 + this.shift;
      const y = this.chartHeight + fontHeight + legendVerticalPadding;

      this.ctx.fillText(label, x, y);
    }
  }

  drawRightLabels() {
    const labelCount = 10;
    const step = (this.maxValue - this.minValue) / labelCount;
    const minLabelSpacing = fontHeight + 5; // Minimum spacing between labels

    this.ctx.fillStyle = 'black';
    this.ctx.font = `${fontHeight}px Arial`;
    this.ctx.textAlign = 'right';

    let lastLabelY = -Infinity;

    for (let i = 0; i <= labelCount; i++) {
      const value = this.minValue + i * step;
      const label = value.toFixed(2);

      const x = this.canvas.width - rightLegendWidth + 5;
      const y = this.chartHeight - (value - this.minValue) / (this.maxValue - this.minValue) * this.chartHeight;

      if (y >= fontHeight && y <= this.chartHeight - fontHeight && Math.abs(y - lastLabelY) >= minLabelSpacing) {
        this.ctx.fillText(label, x, y);
        lastLabelY = y;
      }
    }
  }

  drawLegend() {
    this.drawMesh();
    this.drawSeparators();
    this.drawBottomLabels();
    this.drawRightLabels();
  }

  // Listeners

  onMouseLeave() {
    this.setCursorType('grab');
    this.mouseDown = false;
  }

  onMouseDown(e: MouseEvent) {
    this.mouseDownX = e.clientX;
    this.mouseDown = true;
    this.setCursorType('grabbing');
  }

  onMouseUp() {
    this.mouseDown = false;
    this.setCursorType('grab');
  }

  onPullHorizontal(e: MouseEvent) {
    if (!this.mouseDown) return;

    this.shiftChart(this.shift + e.clientX - this.mouseDownX);
    this.mouseDownX = e.clientX;
  }

  onZoom(e: WheelEvent) {
    e.preventDefault();

    this.zoom(e);
  }

  private createListeners() {
    this.canvas.addEventListener('wheel', e => this.onZoom(e));
    this.canvas.addEventListener('mousedown', e => this.onMouseDown(e));
    this.canvas.addEventListener('mouseup', _ => this.onMouseUp());
    this.canvas.addEventListener('mousemove', e => this.onPullHorizontal(e));
    this.canvas.addEventListener('mouseleave', _ => this.onMouseLeave());
  }

  private destroyListeners() {
    this.canvas.removeEventListener('wheel', e => this.onZoom(e));
    this.canvas.removeEventListener('mousedown', e => this.onMouseDown(e));
    this.canvas.removeEventListener('mouseup', _ => this.onMouseUp());
    this.canvas.removeEventListener('mousemove', e => this.onPullHorizontal(e));
    this.canvas.removeEventListener('mouseleave', _ => this.onMouseLeave());
  }
}
