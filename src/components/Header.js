import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {

    const [userStatus,setUserStatus] = useState("Login");

    const internetStatus = useInternetStatus();

    return (<div className="header-container">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-links-container">
            <ul>
                <li>Status:{internetStatus ? "Online 🟢" : "Offline 🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button onClick={() => {
                    userStatus === "Login" ? setUserStatus("Logout") : setUserStatus("Login")
                }}>{userStatus}</button>
            </ul>
        </div>
    </div>);
}

export default Header;