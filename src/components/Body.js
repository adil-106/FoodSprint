import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5142176&lng=73.7774778&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(<div className="body-container">
    
        <div className="filter-button">

            <button onClick={() => {
                let filteredList = listOfRestaurants.filter(res => res.rating > 4.5);
                setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants</button>  

        </div>


        <div className="restaurants-container">
            {listOfRestaurants.map(restaurant => (
                <ResCard key={restaurant.info.id} restaurant={restaurant.info}/>
            ))}
        </div>


    </div>)
}


export default Body;