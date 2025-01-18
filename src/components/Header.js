import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [status,setStatus] = useState("Login");

    return (<div className="header-container">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-links-container">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={() => {
                    status === "Login" ? setStatus("Logout") : setStatus("Login")
                }}>{status}</button>
            </ul>
        </div>
    </div>);
}

export default Header;