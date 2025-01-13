import ResCard from "./ResCard";
import restaurants from "../utils/mockData";

const Body = () => {
    return(<div className="body-container">
        <div className="search-container">
            Search
        </div>
        <div className="restaurants-container">
            {restaurants.map(restaurant => (
                <ResCard key={restaurant.id} restaurant={restaurant}/>
            ))}
        </div>
    </div>)
}


export default Body;