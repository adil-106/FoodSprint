import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryItem from "./CategoryItem";

const RestaurantMenu = () => {
    
    let {resId} = useParams();

    // custom hook to fetch restaurant menu from swiggy api, takes restaurant id returns res info.
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return (<Shimmer/>)
    }

    const {name, costForTwoMessage, cuisines} = resInfo[2]?.card?.card?.info;
    const itemCards = resInfo[resInfo.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories = itemCards.filter(category => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return(<div className="w-9/12 mx-auto my-6 text-center">
        <div className="my-4">
            <h1 className="font-bold">{name}</h1>
            <h2 className="font-bold">{cuisines.join(" ,")}</h2>
            <h3>{costForTwoMessage}</h3>
        </div>
        <div className="w-8/12 mx-auto items-center">
            {categories.map(category => <CategoryItem category={category}/>)}
        </div>
        
    </div>)
}


export default RestaurantMenu;