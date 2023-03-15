import { Paper } from "@mui/material";

export default function SymbolsDetails() {
  const symbolDetails = [
    {
      currency: "USD",
      symbol: "DIS",
      exchangeName: "NYQ",
      instrumentType: "EQUITY",
      firstTradeDate: -252322200,
      regularMarketTime: 1677695505,
      gmtoffset: -18000,
      timezone: "EST",
      exchangeTimezoneName: "America/New_York",
      regularMarketPrice: 98.342,
      chartPreviousClose: 99.61,
      previousClose: 99.61,
      scale: 3,
      priceHint: 2,
    },
    {},
  ];

  return <Paper>This is the SymbolsDetails box </Paper>;
}
