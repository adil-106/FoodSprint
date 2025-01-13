import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
    return (<div className="header-container">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv86s5jLvuvNk7tN5cWRz-cq90TxdOeIpnEw&s"/>
        </div>
        <div className="nav-links-container">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>);
}

const restaurants = [
    {
        id: 1,
        name: "Iqbal's",
        cuisine: "Damanese",
        rating: "5 stars",
        deliveryTime: "50 mins"
    },
    {
        id: 2,
        name: "Bella Italia",
        cuisine: "Italian",
        rating: "4.5 stars",
        deliveryTime: "35 mins"
    },
    {
        id: 3,
        name: "Dragon Wok",
        cuisine: "Chinese",
        rating: "4 stars",
        deliveryTime: "40 mins"
    },
    {
        id: 4,
        name: "Tandoori Flames",
        cuisine: "Indian",
        rating: "4.7 stars",
        deliveryTime: "45 mins"
    },
    {
        id: 5,
        name: "El Toro Loco",
        cuisine: "Mexican",
        rating: "4.3 stars",
        deliveryTime: "30 mins"
    },
    {
        id: 6,
        name: "Burger Haven",
        cuisine: "American",
        rating: "4.6 stars",
        deliveryTime: "25 mins"
    },
    {
        id: 7,
        name: "Sushi World",
        cuisine: "Japanese",
        rating: "4.8 stars",
        deliveryTime: "50 mins"
    },
    {
        id: 8,
        name: "Le Petit Délice",
        cuisine: "French",
        rating: "4.9 stars",
        deliveryTime: "55 mins"
    },
    {
        id: 9,
        name: "Pho Paradise",
        cuisine: "Vietnamese",
        rating: "4.4 stars",
        deliveryTime: "40 mins"
    },
    {
        id: 10,
        name: "Mediterraneo",
        cuisine: "Mediterranean",
        rating: "4.7 stars",
        deliveryTime: "35 mins"
    }
];



const ResCard = (props) => {
    const {restaurant} = props;
    const {name, cuisine, rating, deliveryTime} = restaurant;
    return (<div className="res-card">
        <img src=""/>
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{deliveryTime}</h4>
        <h4 >{rating}</h4>
    </div>);
}

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



const AppLayout = () => {
    return (<div className="app-container">
        <Header/>
        <Body/>
    </div>)
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)