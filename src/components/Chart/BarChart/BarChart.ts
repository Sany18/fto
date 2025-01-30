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

  constructor(data?: ChankDataDto[]) {
    super();

    this.putData(data);
  }

  putData(data: ChankDataDto[]) {
    if (!data) return;

    this.chartChanks = data;
    this.hideSpinner();
    this.draw(() => {
      console.log('Data is ready');

      this.defineValues();
      this.renderData();
    });
  }

  renderData() {
    this.defineValues();
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
      this.ctx.fillRect(i * this.barWidth, this.chartHeight - (bar.Close - this.minValue) / (this.maxValue - this.minValue) * this.chartHeight, this.barWidth, (bar.Close - bar.Open) / (this.maxValue - this.minValue) * this.chartHeight);
    });
  }
}
