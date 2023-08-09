import React, { useState } from "react";
import { link } from "react-router-dom";
import '../styles/User.css';
import { userFile } from '../data/userFile';
import { useParams } from "react-router-dom";


function User() {
    const { name } = useParams();
    const userInfo = userFile.find((userInfo) => userInfo.name === name)
    return (
        <div className="user-page-container">
            <p className="user-profile">User profile</p>
            <div className="trait"><hr /></div>
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
            </div>
        </div>
    );
}
export default User;