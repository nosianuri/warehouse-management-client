import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { addToData, getStoredCart } from '../../utilities/fakedb';
import Items from '../Home/Items/Items';
import './Inventory.css';

const Inventory = () => {    
    
    const [allItems, setAllItems] = useItems();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedItem = allItems.find(item => item._id === id);
            if (addedItem) {
                const quantity = storedCart[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);
            }
        }
        setCart(savedCart);
    }, [allItems]);

    

    const handleLessToQuantity = (selectedItem) => {
        console.log(selectedItem);
        let newCart = [];
        const exists = cart.find(item => item._id === selectedItem._id);
        if (!exists) {
            selectedItem.quantity = 1;
            newCart = [...cart, selectedItem];

        }
        else {
            const rest = cart.filter(item => item._id !== selectedItem._id);
            exists.quantity = exists.quantity - 1;
            newCart = [...rest, exists];

        }
        setCart(newCart);

        addToData(selectedItem._id);

    }
    return (
        <div className='itemDetails-title'>
        <h2>Welcome to inventory</h2>
            <div className='container mb-5'>
                <div className='row'>

                    <div className='itemDetails-container'>
                        {
                            allItems.map(items => <Items
                                key={items._id}
                                items={items}
                                handleLessToQuantity={handleLessToQuantity}
                            ></Items>)
                        }
                    </div>
                </div>
            </div>
            
            <div>
                <Link to="/manageitem">
                    <button  onClick={()=>navigate('/manageitem')}  className='btn btn-info'>Manage Item</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;