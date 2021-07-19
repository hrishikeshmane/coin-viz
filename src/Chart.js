import React, { useState, useEffect, useRef } from 'react';
import Candle from "./Candle";
import "./Chart.css"
import Header from './Header';
import { scaleLinear } from "d3-scale";
import { Stage, Layer} from 'react-konva';

function Chart({ candles, caliber, domain }) {
    const [size, setSize] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const measure = () => {
            if(ref.current.clientHeight){
                setSize(ref.current.clientHeight)
            }
        }
        measure();  

    }, [size])
       
    
    const scaleY = scaleLinear().domain(domain).range([size * 0.8, 0]);
    const scaleBody = scaleLinear().domain([0, domain[1] - domain[0]]).range([0, size * 0.8]);
    
    return (
        <div ref={ ref } className="chart">
            <Header />
            <Stage width={size * 1.2} height={size * 0.8}>
                <Layer>
                    {candles.map((candle, index) => (
                        <Candle onClick={() => console.log(candle.low)}
                            key={index}
                            {...{ candle, index, caliber, scaleY, scaleBody }}
                        />
                    ))}
                    
                </Layer>
            </Stage>
        </div>
    )
}

export default Chart
