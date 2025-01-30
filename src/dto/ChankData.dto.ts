// {"ChunkStart":1057017600,"Bars":[{"Time":0,"Open":1.15201,"High":1.15228,"Low":1.15201,"Close":1.15228,"TickVolume":514599998},{"Time":60,"Open":1.15223,"High":1.15227,"Low":1.15206,"Close":1.15212,"TickVolume":696899996},{"Time":120,"Open":1.15208,"High":1.15211,"Low":1.152,"Close":1.15203,"TickVolume":588199998},{"Time":180,"Open":1.15212,"High":1.15212,"Low":1.15186,"Close":1.15186,"TickVolume":696200003},{"Time":240,"Open":1.15186,"High":1.15207,"Low":1.15182,"Close":1.15199,"TickVolume":705300003},{"Time":300,"Open":1.15205,"High":1.1521,"Low":1.15194,"Close":1.15195,"TickVolume":666400004},{"Time":360,"Open":1.15197,"High":1.15201,"Low":1.15189,"Close":1.15192,"TickVolume":263400002},{"Time":420,"Open":1.15205,"High":1.15207,"Low":1.15192,"Close":1.152,"TickVolume":288599995},{"Time":480,"Open":1.15206,"High":1.15207,"Low":1.15193,"Close":1.15198,"TickVolume":598099994},{"Time":540,"Open":1.15206,"High":1.15216,"Low":1.152,"Close":1.15209,"TickVolume":443400002},{"Time":600,"Open":1.1522,"High":1.1522,"Low":1.15202,"Close":1.15207,"TickVolume":600699995},

import { BarDto } from "./Bar.dto";

export class ChankDataDto {
  ChunkStart: number;
  Bars: BarDto[];

  constructor(data: ChankDataDto) {
    this.ChunkStart = data?.ChunkStart;
    this.Bars = data?.Bars.map((bar) => new BarDto(bar));
  }
}

export class ChankData extends ChankDataDto {
  constructor(data: ChankDataDto) {
    super(data);
  }
}
