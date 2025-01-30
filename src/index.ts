import { DemoDataService } from "./services/DemoData.service";

const demoDataService = new DemoDataService();

demoDataService.getDemoData().then((data) => {
  console.log(data);
});
