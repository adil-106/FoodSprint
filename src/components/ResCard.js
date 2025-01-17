const ResCard = (props) => {
    const {restaurant} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = restaurant;
    return (<div className="res-card">
        <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",   ")}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4 >{avgRating} stars</h4>
    </div>);
}


export default ResCard;