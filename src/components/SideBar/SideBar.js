import React, { useState } from "react";
import "./SideBar.css";
import SideBarLogo from './icons/Logo.svg';
import userImage from "./icons/user.svg";
import ordersImage from "./icons/orders.svg";
import messageImage from "./icons/message.svg";
import ressourcesImage from "./icons/ressources.svg";
import walletImage from "./icons/wallet.svg";
import aboutUsImage from "./icons/aboutUs.svg";
import userPhoto from "./icons/user.svg";
import logoutImage from "./icons/logout.svg";
import { Class } from "coffeescript/lib/coffeescript/nodes";

const SideBar = () => {
    const [isExpended, setExpendState] = useState(false)
    const menuItems = [
        {
            text: "User",
            icon: userImage,
        },
        {
            text: "Orders",
            icon: ordersImage,
        },
        {
            text: "Messages",
            icon: messageImage,
        },
        {
            text: "Your fridge",
            icon: ressourcesImage,
        },
        {
            text: "Your balance",
            icon: walletImage,
        },
        {
            text: "About us",
            icon: aboutUsImage,
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
                <div className="nav-menus">
                    {menuItems.map(({ text, icon }) => (
                        <a href="#" className={isExpended ? "menu-item" : "menu-item menu-item-NX"} >
                            <img src={icon} alt="" srcSet="" />
                            {isExpended && <p>{text}</p>}
                            {!isExpended && <div className="tooltip">{text}</div>}
                        </a>
                    ))}
                </div>
            </div>
            <div className="nav-footer">
                {isExpended && <div className="nav-details">
                    <img src={userPhoto} alt="" srcSet="" />
                    <div className="nav-footer-user-infos">
                        <p className="nav-footer-user-name">Rebecca Djimtoingar</p>
                        <p className="nav-footer-user-building">Batiment E</p>
                    </div>
                </div>}
                <img className="logout-icon" src={logoutImage} alt="" srcSet=""/>
                {!isExpended && <div className="logout-word">logout</div>}
            </div>
        </div>
    );
}

export default SideBar;