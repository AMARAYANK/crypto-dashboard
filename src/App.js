import React from "react";
import NewsFeed from "./components/NewsFeed";
import CurrencyConvertor from "./components/CurrencyConvertor";

export default function App() {
  return (
    <div className="app">
     <h2>Crypto Dashboard</h2>
      <div className='app-wrapper'>
        <CurrencyConvertor />
        <NewsFeed />
      </div>
    </div>
  );
}
