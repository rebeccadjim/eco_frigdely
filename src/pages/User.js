import React, { useState } from "react";
import { link } from "react-router-dom";
import '../styles/User.css';
import { userFile } from '../data/userFile';
import { useParams } from "react-router-dom";
import friends from './icons/friends.svg';
import planet from './icons/planet.svg';
import balance from './icons/wallet_bottom.svg';
import fridge from './icons/ressources.svg';
import cart from './icons/orders.svg';


function User() {
    const { name } = useParams();
    const userInfo = userFile.find((userInfo) => userInfo.name === name);
    const bottomItems = [
        {
            text: "Current balance",
            icon: balance,
            value: userInfo.current_balance,
            unit: "€",
            linking: "wallet",
        },
        {
            text: "Energy saved",
            icon: planet,
            value: userInfo.energy_saved,
            unit: "kWh",
            linking: "",
        },
        {
            text: "Aliments in fridge",
            icon: fridge,
            value: userInfo.aliments_in_fridge,
            unit: "",
            linking: "fridge",
        },
        {
            text: "Orders",
            icon: cart,
            value: userInfo.number_of_orders,
            unit: "",
            linking: "cart",
        },
        {
            text: "Friends",
            icon: friends,
            value: userInfo.friends,
            unit: "",
            linking: "messages",
        }
    ]

    return (
        <div className="user-page-container">
            <div className="user-page-content">
                <div className="user-page-deco">
                    <p className="user-profile">User profile</p>
                    <div className="trait"><hr /></div>
                </div>
                <div className="user-info-container">
                    <div className="profile">
                        <img className="profile-pic" src={userInfo.picture} alt=""></img>
                        <p className="name-under-pic"> {userInfo.firstname}</p>
                        <p className="name-under-pic"> {userInfo.lastname}</p>
                        <p className="name-under-pic"> {userInfo.age + " ans"}</p>
                    </div>
                    <div className="personal-infos">
                        <div className="personal-infos-word">Personal information</div>
                        <div className="left-info">
                            <p className="infos-left-title">Department</p>
                            <p className="infos-left">{userInfo.department}</p>
                            <p className="infos-left-title">Year</p>
                            <p className="infos-left">{userInfo.year}</p>
                            <p className="infos-left-title">Building</p>
                            <p className="infos-left">{userInfo.building}</p>
                        </div>

                        <div className="right-info">
                            <p className="infos-right-title">E-mail</p>
                            <p className="infos-right">{userInfo.email}</p>
                            <p className="infos-right-title">Phone number</p>
                            <p className="infos-right">{userInfo.phoneNumber}</p>
                            <p className="infos-right-title">Address</p>
                            <p className="infos-right">{userInfo.address}</p>
                        </div>
                    </div>
                    <div className="notifications-container">
                    <p className="notifications-word">Notifications</p>
                </div>
                </div>
                <div className="user-data-container">
                    {bottomItems.map(({ text, icon, value, unit, linking }) => (
                        <a href={"/" + linking} className="infos-bottom" >
                            <img className="bottom-images" src={icon} alt="" srcSet="" />
                            <p className="values">{value + unit}</p>
                            <p>{text}</p>
                        </a>))}
                </div>
            </div>
        </div>
    );
}
export default User;