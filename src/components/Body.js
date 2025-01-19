import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants,setFilteredRestaurants] = useState([]);


    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    // Fetching Swiggy's API Data
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5142176&lng=73.7774778&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return listOfRestaurants.length === 0 ? <Shimmer/> : (<div className="body-container">
    
        <div className="filter-button">

            <div className="search-container">
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button onClick={() => {
                    let filteredRes = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRes);
                }}>Search</button>
            </div>

            <button onClick={() => {
                let filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
                setFilteredRestaurants(filteredList);
            }}>Top Rated Restaurants</button>  

        </div>


        <div className="restaurants-container">
            {filteredRestaurants.map(restaurant => (
                <ResCard key={restaurant.info.id} restaurant={restaurant.info}/>
            ))}
        </div>


    </div>)
}


export default Body;