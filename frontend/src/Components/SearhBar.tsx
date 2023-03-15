import { useEffect, useState } from "react";
import { Card, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [search, setSearch] = useState("Dis");
  const [results, setResults] = useState([]);

  const fetchStockSymbols = async (search: string) => {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // this request is made from the browser and the browser will block the request if the response doesn't have the correct CORS headers
          // add the no cors mode to the request to bypass this
          mode: "no-cors",
        },
      }
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchStockSymbols(search).then((results) => setResults(results));
  }, [search]);

  return (
    <Card>
      <InputBase
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search symbol"
      />
      <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
    </Card>
  );
}
