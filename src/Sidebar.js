import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';


function Sidebar() {  
    return (
        <div className="sidebar">
            <h1> Coins</h1>
            <hr />
            <SidebarOption />
        </div>
    )
}

export default Sidebar
