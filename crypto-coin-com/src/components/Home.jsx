import React from "react";
import CoinDetail from "./CoinDetail";
import "../styles/Home.css";
import { Routes, Route } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="container">
      <div className="sub-nav">
        <h2 class="cyptocurrency-heading">
          Cryptocurrency Prices by Market Cap
        </h2>

        <ul>
          <li>
            <select>
              <option value="0">Currency:</option>
              <option value="inr">INR</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="aed">AED</option>
              <option value="btc">BTC</option>
            </select>
          </li>
          <li>
            <input placeholder="🔍 Search Coin"></input>
          </li>
        </ul>
      </div>

      <div>
        <div className="heading">
          <h3>#</h3>
          <h3 className="coin-name">Coin</h3>
          <h3>Price</h3>
          <h3 className="hide-mobile">24h %</h3>
          <h3 className="hide-mobile">Volume</h3>
          <h3 className="hide-mobile">Market Cap</h3>
        </div>
        {props.coins.map((coin) => {
          return <CoinDetail coin={coin} key={coin.id}></CoinDetail>;
        })}
      </div>
    </div>
  );
};

export default Home;
