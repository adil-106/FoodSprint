import useListOfRestaurants from "../utils/useListOfRestaurants";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import {useState} from "react";
import useInternetStatus from "../utils/useInternetStatus";

const Body = () => {

    const [searchText,setSearchText] = useState("");

    // custom hook to fetch list of restaurants data from swiggy api
    const {listOfRestaurants,setListOfRestaurants,filteredRestaurants,setFilteredRestaurants} = useListOfRestaurants();

    const internetStatus = useInternetStatus();

    if(!internetStatus){
        return(<div>
            <h1>You are offline, please check your internet connection!!!</h1>
        </div>)
    }


    return listOfRestaurants.length === 0 ? <Shimmer/> : (<div className="bg-slate-100">
    
        <div className="flex m-4 justify-evenly">

            <div>
                <input className="border border-black m-2 p-0.5 bg-white" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="m-2 border rounded p-0.5 bg-white" onClick={() => {
                    let filteredRes = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRes);
                }}>Search</button>
            </div>

            <button className="m-2 bg-white border rounded p-0.5" onClick={() => {
                let filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
                setFilteredRestaurants(filteredList);
            }}>Top Rated Restaurants</button>  

        </div>


        <div className="flex flex-wrap gap-6 justify-center items-stretch">
            {filteredRestaurants.map(restaurant => (
               <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                    <ResCard  restaurant={restaurant.info}/>
               </Link>
            ))}
        </div>


    </div>)
}


export default Body;