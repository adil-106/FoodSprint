const ResCard = (props) => {
    const {restaurant} = props;
    const {name, cuisine, rating, deliveryTime} = restaurant;
    return (<div className="res-card">
        <img/>
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{deliveryTime}</h4>
        <h4 >{rating}</h4>
    </div>);
}


export default ResCard;