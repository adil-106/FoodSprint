import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {

    const [status,setStatus] = useState("Login");

    return (<div className="header-container">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-links-container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button onClick={() => {
                    status === "Login" ? setStatus("Logout") : setStatus("Login")
                }}>{status}</button>
            </ul>
        </div>
    </div>);
}

export default Header;