import React, { lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
// import Grocery from "./Grocery";


const Grocery = lazy(() => import("./Grocery"));

const AppLayout = () => {

    const [userName,setUserName] = useState("");

    useEffect(() => {
        const data = "Adil Iqbal";
        setUserName(data);
    },[])

    return (<UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app-container">
            <Header/>
            <Outlet/>
         </div>
    </UserContext.Provider>)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)