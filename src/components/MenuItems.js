const MenuItems = (props) => {

    const {name,price,description,defaultPrice} = props?.item?.card?.info;

    return(<div className="bg-slate-100 my-2 text-left p-2">
        <div className="flex justify-between my-2">
            <p>{name}</p>
            <p>₹ {price/100 || defaultPrice/100}</p>
        </div>
       
        <p className="italic text-sm">{description}</p>
    </div>)
}

export default MenuItems;