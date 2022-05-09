import { useEffect, useState } from "react";

const useItems = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetch('https://polar-shelf-26045.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setAllItems(data));
    }, []);

    return [allItems, setAllItems];
}

export default useItems;