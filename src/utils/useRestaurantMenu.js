import  {useState, useEffect} from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu()
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5142176&lng=73.7774778&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json?.data?.cards)
        setResInfo(json?.data?.cards);
    }


    return resInfo;

}

export default useRestaurantMenu;