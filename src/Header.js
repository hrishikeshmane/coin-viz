import React from 'react'
import "./Header.css";

function Header() {
    return (
        <nav className="header">
            <h3>Open: <span>$5,234.00</span> </h3>
            <h3>Close: <span>$5,5400.00</span> </h3>
            <h3>High: <span>$5,0640.00</span> </h3>
            <h3>Low: <span>$5,032.00</span> </h3>
        </nav>
    )
}

export default Header
