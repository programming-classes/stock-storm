import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

@Controller('symbol')
export class SymbolController {
  @Get()
  getSymbol(@Query('name') name: string): any {
    return axios
      .get(
        `https://query1.finance.yahoo.com/v8/finance/chart/${name}?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance`,
      )
      .then((response) => {
        const result = response.data.chart.result[0];
        return {
          ...result.meta,
          timestamp: result.timestamp,
          indicator: result.indicators.quote[0],
        };
      });
  }
}
