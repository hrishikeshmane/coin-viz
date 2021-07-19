import React from 'react';
import { useEffect, useState } from 'react';
import "./SidebarOption.css"
import { setCoin } from './features/appSlice';
import { useDispatch } from 'react-redux';


function SidebarOption() {
    const dispatch = useDispatch();

    const items = ["bitcoin", "ethereum", "dogecoin", "cardano", "xrp", "bitcoin-cash", "chainlink", "litecoin"];

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    // fetch("https://api.coincap.io/v2/assets")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //         setIsLoaded(true);
    //         setItems(result.data);

    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   )
    // }, [])
    

    if (error) {
        return <h3>Error: {error.message}</h3>;
    } else {
        return (
            <>
                {items.slice(0,11).map((item,id) => (
                    // <div key={item.id} className="coin__option" onClick={() => console.log(item.name)}>
                    <div
                        key={id}
                        className="coin__option"
                        onClick={() => dispatch(
                            setCoin({
                                coin: item
                            })
                        )}>
                        <h4>{item.toUpperCase()}</h4>
                    </div>
                ))}
            </>
        )
    }
}

export default SidebarOption
