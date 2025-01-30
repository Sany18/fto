import { BarChart } from "./components/Chart/BarChart/BarChart";
import { DemoDataService } from "./services/DemoData.service";

import './style.scss';

const demoDataService = new DemoDataService();

const chart = new BarChart();
chart.addDOMElement();

demoDataService.getDemoData().then((data) => {
  console.log(data[0].Bars[100]);

  chart.putData(data);
});
