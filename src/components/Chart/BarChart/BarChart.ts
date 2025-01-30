import { Chart } from "../Chart";
import { BarDto } from "../../../dto/Bar.dto";
import { ChankDataDto } from "../../../dto/ChankData.dto";
import { ColorsService } from "../../../services/Colors.service";

export class BarChart extends Chart {
  protected chartChanks: ChankDataDto[];

  protected chartWidth: number;
  protected chartHeight: number;
  protected totalDataLength: number;
  protected allBars: BarDto[];
  protected barWidth: number;
  protected minValue: number;
  protected maxValue: number;

  protected mouseDown = false;
  protected mouseDownX = 0;
  protected scale = 1; // 1 - 100
  protected shift = 0;

  constructor(data?: ChankDataDto[]) {
    super();

    this.putData(data);
  }

  putData(data: ChankDataDto[]) {
    if (!data) return;

    this.chartChanks = data;

    this.hideSpinner();
    this.createListeners();
    this.defineValues();

    this.draw(() => {
      this.renderData();
    });
  }

  renderData() {
    this.renderChanks();
    this.renderBars();
  }

  defineValues() {
    this.chartWidth = this.canvas.width;
    this.chartHeight = this.canvas.height;
    this.totalDataLength = this.chartChanks.map((chankData) => chankData.Bars.length).reduce((acc, width) => acc + width, 0);
    this.barWidth = this.chartWidth / this.totalDataLength;
    this.allBars = this.chartChanks.reduce((acc, chankData) => [...acc, ...chankData.Bars], []);

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

  renderChanks() {
    const getChankWidth = (i: number) => {
      if (i < 0) return 0;
      return this.chartWidth / this.totalDataLength * this.chartChanks[i].Bars.length;
    }

    this.chartChanks.forEach((_, i) => {
      this.ctx.fillStyle = ColorsService.getThemeColor(`chank-bg-color-${i + 1 % 2}`)
      this.ctx.fillRect(i * getChankWidth(i - 1), 0, getChankWidth(i), this.chartHeight);
    });
  }

  renderBars() {
    this.allBars.forEach((bar, i) => {
      const priceChange = bar.Close - bar.Open;
      const volatility = bar.High - bar.Low;

      this.ctx.fillStyle = ColorsService.getThemeColor(priceChange > 0 ? 'bar-up-color' : 'bar-down-color');
      this.ctx.fillRect(
        i * this.barWidth,
        this.chartHeight - (bar.Close - this.minValue) / (this.maxValue - this.minValue) * this.chartHeight,
        this.barWidth,
        (bar.Close - bar.Open) / (this.maxValue - this.minValue) * this.chartHeight
      );
    });
  }

  zoom(direction: number) {
    const nextValue = this.scale * (direction === 1 ? 1.1 : 0.9);

    this.scale = Math.min(Math.max(nextValue, 1), 100);

    this.chartWidth = this.canvas.width * this.scale;
    this.barWidth = this.chartWidth / this.totalDataLength;
  }

  shiftChart(shift: number) {
    const nextValue = this.shift + shift;

    console.log(shift);


    this.shift = Math.max(Math.min(nextValue, 0), this.wrapper.clientWidth - this.chartWidth);
  }

  setCursorType(type: string) {
    this.canvas.style.cursor = type;
  }

  destroyChart(): this {
    super.destroyChart();
    this.destroyListeners();

    return this;
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

    this.shiftChart(e.clientX - this.mouseDownX);
    this.mouseDownX = e.clientX;

    this.render();
  }

  onZoom(e: WheelEvent) {
    e.preventDefault();

    const delta = e.deltaY;
    const direction = delta > 0 ? -1 : 1;

    this.zoom(direction);
    this.render();
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
