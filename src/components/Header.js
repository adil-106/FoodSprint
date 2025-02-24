import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const user = useContext(UserContext);

    const [userStatus,setUserStatus] = useState("Login");

    const internetStatus = useInternetStatus();

    return (<div className="flex justify-between m-2 bg-slate-100 shadow shadow-slate-100">
        <div className="logo-container">
            <img className="w-24" src={LOGO_URL}/>
        </div>
        <div className="flex items-center mr-5">
            <ul className="flex px-2">
                <li className="px-2">Status:{internetStatus ? "Online 🟢" : "Offline 🔴"}</li>
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/about">About</Link></li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                <li className="px-2">Cart</li>
                <li className="px-2">
                <button onClick={() => {
                    userStatus === "Login" ? setUserStatus("Logout") : setUserStatus("Login")
                }}>{userStatus}</button>
                </li>
                <li>{user.loggedInUser}</li>

            </ul>
        </div>
    </div>);
}

export default Header;