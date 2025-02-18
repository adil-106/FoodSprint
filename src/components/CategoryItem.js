import { useState } from "react";
import MenuItems from "./MenuItems";

const CategoryItem = (props) => {
    const {category} = props;
    const {title, itemCards} = category?.card?.card
    

    const [showItems,setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (<div>
        <div className="p-2 flex justify-between bg-slate-100 my-4 items-center cursor-pointer" onClick={handleClick}>
            <h3 className="font-bold">{title}</h3>
            <h3>{showItems ? "⬆️" : "⬇️" }</h3>
         </div>
         <div>
            {showItems && itemCards.map(menuItem => <MenuItems item={menuItem}/>)}
         </div>
    </div>
    )
}

export default CategoryItem;