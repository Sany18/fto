import { Chart } from "../Chart";
import { ChankDataDto } from "../../../dto/ChankData.dto";
import { ColorsService } from "../../../services/Colors.service";

export class BarChart extends Chart {
  chartChanks: ChankDataDto[];

  constructor(data?: ChankDataDto[]) {
    super();

    this.putData(data);
  }

  putData(data: ChankDataDto[]) {
    if (!data) return;

    this.chartChanks = data;
    this.hideSpinner();
    this.draw(() => {
      this.renderData();
    });
  }

  renderData() {
    const chartWidth = this.canvas.width;
    const chartHeight = this.canvas.height;
    const totalLength = this.chartChanks.map((chankData) => chankData.Bars.length).reduce((acc, width) => acc + width, 0);

    const getChankWidth = (i: number) => {
      if (i < 0) {
        return 0;
      }

      return chartWidth / totalLength * this.chartChanks[i].Bars.length;
    }

    this.chartChanks.forEach((chankData, i) => {
      this.draw(() => {
        this.ctx.fillStyle = ColorsService.getThemeColor(`chank-bg-color-${i + 1 % 2}`)
        this.ctx.fillRect(i * getChankWidth(i - 1), 0, getChankWidth(i), chartHeight);
      });
    });
  }
}
