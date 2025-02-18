const MenuItems = (props) => {

    console.log(props?.item?.card?.info)
    const {name,price,description,defaultPrice,imageId} = props?.item?.card?.info;

    return(<div className="bg-slate-100 my-2 text-left p-2 flex justify-between items-center">
        <div className="my-2 w-9/12">
            <span>{name}</span>
            <span> - ₹ {price/100 || defaultPrice/100}</span>
            <p className="italic text-sm">{description}</p>
        </div>
        <div className="my-2 w-3/12 relative">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +imageId}/>
            <button className="absolute cursor-pointer bottom-1 right-1 rounded text-black p-1 bg-slate-50">Add +</button>
        </div>
       
        
    </div>)
}

export default MenuItems;