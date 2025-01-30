import { ChankDataDto } from "../dto/ChankData.dto";

export class DemoDataService {
  private http: any;
  private cache: Record<string, any> = {};

  constructor() {
    this.setupHttp();
  }

  setupHttp() {
    this.http = {
      get: async (url: string) => {
        if (this.cache[url]) {
          return this.cache[url];
        }

        const response = await fetch(url);
        const data = await response.json();
        this.cache[url] = data;
        return data;
      },
    };
  }

  get(url: string) {
    return this.http.get(url);
  }

  async getDemoData(): Promise<ChankDataDto[]> {
    const url = 'https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=EURUSD&Timeframe=1&Start=57674&End=59113&UseMessagePack=false';

    return this.get(url)
      .then((data: any) => {
        return data.map((cd: any) => new ChankDataDto(cd));
      });
  }
}
