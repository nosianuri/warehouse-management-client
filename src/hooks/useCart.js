import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (items) => {
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedItem = items.find(item => item.id === id);
            if(addedItem){
                const quantity = storedCart[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);
            }
        }
        setCart(savedCart);
    }, [items]);

    return [cart, setCart];
}
export default useCart;