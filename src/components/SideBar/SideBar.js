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
import { link } from "react-router-dom";

const SideBar = () => {
    const [isExpended, setExpendState] = useState(false)
    const menuItems = [
        {
            text: "User",
            icon: userImage,
            linking: "user",
        },
        {
            text: "Your cart",
            icon: ordersImage,
            linking: "cart",
        },
        {
            text: "Messages",
            icon: messageImage,
            linking: "messages",
        },
        {
            text: "Your fridge",
            icon: ressourcesImage,
            linking: "fridge",
        },
        {
            text: "Your balance",
            icon: walletImage,
            linking: "wallet",
        },
        {
            text: "About us",
            icon: aboutUsImage,
            linking: "aboutus",
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
                    {menuItems.map(({ text, icon, linking }) => (
                        <a href={"/"+ linking} className={isExpended ? "menu-item" : "menu-item menu-item-NX"} >
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
                    <img className="logout-icon" src={logoutImage} alt="" srcSet="" />
                </div>}
                {!isExpended &&
                    <img className="logout-icon-NX" src={logoutImage} alt="" srcSet="" />
                }
            </div>
        </div>
    );
}

export default SideBar;