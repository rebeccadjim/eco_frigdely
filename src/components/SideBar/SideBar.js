import React, { useState } from "react";
import "./SideBar.css";
import SideBarLogo from './icons/Logo.svg';
import { Class } from "coffeescript/lib/coffeescript/nodes";

const SideBar = () => {
    const [isExpended, setExpendState] = useState(false)
    const menuItems = [
        {
            text:"User",
            icon:"./icons/user.svg",
        },
        {
            text:"Orders",
            icon:"icons/orders.svg",
        },
        {
            text:"Messages",
            icon:"icons/message.svg",
        },
        {
            text:"Your fridge",
            icon:"icons/ressources.svg",
        },
        {
            text:"Your balance",
            icon:"icons/wallet.svg",
        },
        {
            text:"About us",
            icon:"icons/aboutUs.svg",
        },

    ]
    return (
        <div className={isExpended ?
            "side-nav-container" : "side-nav-container side-nav-container-NX" /*NX = Not expanded*/
        }>
            <div className='nav-upper'>
                <div className='nav-heading'>
                    {isExpended && (
                        <div className='nav-brand'>
                            <img src={SideBarLogo} alt="nav brand" />
                            <h2>Menu</h2>
                        </div>
                    )}

                    <button className={isExpended ?
                        "menu menu-in" : "menu menu-out"}

                        onClick={() => setExpendState(!isExpended)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="nav-menus">{menuItems.map(({text,icon})=>
                <a href = "#" className="menu-item" >
                    <img src={icon} alt="" srcSet=""/>
                    <p>{text}</p>
                </a>
                )} 
                </div>
            </div>
        </div>
    );
}

export default SideBar;