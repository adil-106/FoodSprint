const ResCard = (props) => {
    const {restaurant} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = restaurant;
    return (<div className="w-[250px] border border-black mx-4 mb-10 mt-2 p-2 flex flex-col justify-between min-h-60 h-full flex-grow">
        <img className="h-[150px] object-cover w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
        <h3 className="font-bold ">{name}</h3>
        <h4>{cuisines.slice(0,3).join(",   ")}</h4>
        <h4 className="italic">{sla.deliveryTime} minutes</h4>
        <h4 className="italic">{avgRating} stars</h4>
    </div>);
}


// Higher-Order Component - i/p = ResCard and o/p = Enhanced ResCard with Promoted Label
// export const withPromotedLabel = (ResCard) => {
//     return (props) => {
//         return (<div>
//             <label>Promoted</label>
//             <ResCard {...props}/>
//         </div>)
//     }
// }


export default ResCard;