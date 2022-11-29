import React from "react";
import "./styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Exchanges from "./components/Exchanges";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={coins.length ? <Home coins={coins} /> : <h1>{error}</h1>}
          ></Route>
          <Route path="/Exchanges" element={<Exchanges />}></Route>
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
