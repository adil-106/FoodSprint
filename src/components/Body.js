import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

    return(<div className="body-container">
    
        <div className="filter-button">

            <button onClick={() => {
                let filteredList = listOfRestaurants.filter(res => res.rating > 4.5);
                setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants</button>  
                
        </div>


        <div className="restaurants-container">
            {listOfRestaurants.map(restaurant => (
                <ResCard key={restaurant.id} restaurant={restaurant}/>
            ))}
        </div>


    </div>)
}


export default Body;