import { useState, useEffect } from "react";

const useListOfRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // Fetching Swiggy's API Data
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5142176&lng=73.7774778&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }


    return {listOfRestaurants,setListOfRestaurants,filteredRestaurants,setFilteredRestaurants}
}

export default useListOfRestaurants;