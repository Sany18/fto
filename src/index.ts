import { Chart } from "./components/Chart/Chart";
import { DemoDataService } from "./services/DemoData.service";

import './style.scss';

const demoDataService = new DemoDataService();

demoDataService.getDemoData().then((data) => {
  console.log(data);
});

const chart = new Chart();

chart.addDOMElement()
  .testDraw();
