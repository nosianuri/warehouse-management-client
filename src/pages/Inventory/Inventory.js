import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { addToData, getStoredCart } from '../../utilities/fakedb';
import Items from '../Home/Items/Items';
import './Inventory.css';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [allItems, setAllItems] = useItems();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedItem = allItems.find(item => item.id === id);
            if (addedItem) {
                const quantity = storedCart[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);
            }
        }
        setCart(savedCart);
    }, [allItems]);

    const handleAddToCart = (selectedItem) => {
        console.log(selectedItem);
        let newCart = [];
        const exists = cart.find(item => item.id === selectedItem.id);
        if (!exists) {
            selectedItem.quantity = 1;
            newCart = [...cart, selectedItem];

        }
        else {
            const rest = cart.filter(item => item.id !== selectedItem.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];

        }
        setCart(newCart);

        addToData(selectedItem.id);

    }
    return (
        <div className='itemDetails-title'>
        <h2>Welcome to detail: {inventoryId}</h2>
            <div className='container mb-5'>
                <div className='row'>

                    <div className='itemDetails-container'>
                        {
                            allItems.map(items => <Items
                                key={items.id}
                                items={items}
                                handleAddToCart={handleAddToCart}
                            ></Items>)
                        }
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate('/additem')} className='mt-5 rounded btn-style'>add new item</button>
        </div>
    );
};

export default Inventory;