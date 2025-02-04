import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    let {resId} = useParams();

    // custom hook to fetch restaurant menu from swiggy api, takes restaurant id returns res info.
    const resInfo = useRestaurantMenu(resId);

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