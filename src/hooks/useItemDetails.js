import { useEffect, useState } from "react";

const useItemDetails = inventoryId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://polar-shelf-26045.herokuapp.com/items/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [inventoryId]);
    return [item];

}

export default useItemDetails;