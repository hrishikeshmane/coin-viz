import React from 'react';
import {Rect, Line } from 'react-konva';

const MARGIN = 2;

function Candle({ candle, index, caliber, scaleY, scaleBody }) {
    const { close, open, high, low } = candle;
    const fill = close > open ? "#4AFA9A" : "#E33F64";
    const x = index * caliber;
    const max = Math.max(open, close);
    const min = Math.min(open, close);
    
    //console.log(candle)
    return (
        <>
            <Line
                points={[
                    x + caliber/2,
                    scaleY(high),
                    x + caliber/2,
                    scaleY(low)
                ]}
                stroke={fill}
                strokeWidth={1}
            />
            <Rect
                x={x + MARGIN}
                y={scaleY(max)}
                width={caliber - MARGIN * 2}
                height={scaleBody(max - min)}
                fill={fill}
            />
        </>
    )
}

export default Candle
