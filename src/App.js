import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectCoin } from './features/appSlice';
import Chart from "./Chart"
import Sidebar from "./Sidebar"
import Infobar from './Infobar';
import { useEffect, useState } from 'react';


function App() {
  const coin = useSelector(selectCoin);

  //const coin = "bitcoin";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  
  const candles = data?.slice(0, 50);
  const size = window.innerWidth * 0.5;
  const caliber = size / candles.length;

  const values = candles.map(candle => [candle.low, candle.high]).flat();
  const domain = [Math.min(...values), Math.max(...values)];
  
  
  useEffect(() => {
    // console.log(`https://api.coincap.io/v2/candles?exchange=poloniex&interval=d1&baseId=${coin}&&quoteId=tether`)
    fetch(`https://api.coincap.io/v2/candles?exchange=okex&interval=d1&baseId=${coin.toLowerCase()}&&quoteId=tether`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[coin])
  
  return (
    <div className="app">
      {
        isLoaded ? <Chart {...{ candles, caliber, domain }} /> : <div className="chart"><h1>Loading...</h1></div>
      }
      <Infobar />
      <Sidebar />  
    </div>
  );
}

export default App;
