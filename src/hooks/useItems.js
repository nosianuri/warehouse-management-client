import { useEffect, useState } from "react";

const useItems = () =>{
    const [allItems, setAllItems] = useState([]);
    useEffect( () =>{
        fetch('items.json')
        .then(res=> res.json())
        .then(data => setAllItems(data));
    }, []);

    return [allItems, setAllItems];
}

export default useItems;