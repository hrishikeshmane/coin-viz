import React, {useState, useEffect} from 'react';
import "./Infobar.css"
import ReactSpeedometer from "react-d3-speedometer";
import { useSelector } from 'react-redux';
import { selectCoin } from './features/appSlice';

function Infobar() {
    const coin = useSelector(selectCoin);

    const [coinData, setCoinData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${coin.toLowerCase()}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setCoinData(result.data)
                    setIsLoaded(true)
                }
            )
        
    }, [coin])

    return (
        <div  className="infobar">
            <div className="info__header">
                <h3>{coinData?.name}</h3>
            </div>
            <div className="rank">
                <h2>Rank <b>#{coinData?.rank}</b></h2>  
            </div>
            <div className="price">
                <h1>${Math.round(coinData?.priceUsd *100) /100} </h1>
                <small>USD</small>
            </div>
            <div className="coin__profile">
                <small>{coinData?.symbol}</small><small>/</small><small>Crypto</small>
            </div>
            
            <br></br>

            <div className="fade__box">
                <p> Supply</p>
                <>{Math.round(coinData?.supply * 100) / 100} / {Math.round(coinData?.maxSupply * 100) / 100}</>
            </div>
            
            <div className="fade__box">
                <p> volumeUsd24Hr </p>
                {Math.round(coinData?.volumeUsd24Hr * 100) / 100} USD
            </div>

            <div className="fade__box">
                <p> changePercent24Hr </p>
                {Math.round(coinData?.changePercent24Hr * 100) / 100} %
            </div>

            <div className="fade__box">
                <p> vwap24Hr </p>
                {Math.round(coinData?.vwap24Hr * 100) / 100} USD
            </div>


            <div className="techincals">
                <ReactSpeedometer 
                    //fluidWidth={true}
                    width={window.innerWidth * 0.175}
                    height={window.innerWidth * 0.105}
                    value={433}
                    segments={5}
                    needleTransitionDuration={2000}
                    needleTransition="easeElastic"
                    needleColor="white"
                    needleHeightRatio={0.7}
                    ringWidth={10}
                    currentValueText="Technicals"
                    customSegmentLabels={[
                        {
                            text: "Strong Sell",
                            position: "OUTSIDE",
                            color: "#CACACA",
                            fontSize: "9px"
                        },
                        {
                            text: "Sell",
                            position: "OUTSIDE",
                            color: "#CACACA",
                            fontSize: "10px"
                        },
                        {
                            text: "Neutral",
                            position: "OUTSIDE",
                            color: "#CACACA",
                            fontSize: "10px"
                        },
                        {
                            text: "Buy",
                            position: "OUTSIDE",
                            color: "#CACACA",
                            fontSize: "10px"
                        },
                        {
                            text: "Strong Buy",
                            position: "OUTSIDE",
                            color: "#CACACA",
                            fontSize: "9px"
                        },
                    ]}
                    segmentColors={[
                        "#ed4235",
                        "#862226",
                        "#151525",
                        "#143a87",
                        "#2962ff",
                    ]}
                    />
                </div>
        </div>
    )
}

export default Infobar;