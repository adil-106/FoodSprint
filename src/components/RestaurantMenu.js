import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu()
    },[]);

    let {resId} = useParams();

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5142176&lng=73.7774778&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json?.data?.cards)
        setResInfo(json?.data?.cards);
    }

    if (resInfo === null) {
        return (<Shimmer/>)
    }

    const {name, costForTwoMessage, cuisines} = resInfo[2]?.card?.card?.info;
    const {itemCards} = resInfo[resInfo.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(<div className="res-menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(" ,")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
        </ul>
    </div>)
}


export default RestaurantMenu;