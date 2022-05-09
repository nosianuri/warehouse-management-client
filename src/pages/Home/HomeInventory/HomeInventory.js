import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import { addToData, getStoredCart } from '../../../utilities/fakedb';
import Items from '../Items/Items';
import './HomeInventory.css';

const HomeInventory = () => {
    const [allItems, setAllItems] = useItems();        
    const [cart, setCart] = useState([]);
    
    const navigate = useNavigate();
    
    

    useEffect( () =>{
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


    // const handleAddToQuantity = (selectedItem) => {
    //     console.log(selectedItem);
    //     let newCart = [];
    //     const exists = cart.find(item => item._id === selectedItem._id);
    //     if (!exists) {
    //         selectedItem.quantity = ' ';
    //         newCart = [...cart, selectedItem];

    //     }
    //     else {
    //         const rest = cart.filter(item => item._id !== selectedItem._id);
    //         exists.quantity = exists.quantity + quantity + ' ';
    //         newCart = [...rest, exists];

    //     }
    //     setCart(newCart);

    //     addToData(selectedItem._id);

    // }

   


    const handleLessToQuantity = (selectedItem) => {
        console.log(selectedItem);
        let newCart = [];
        const exists = cart.find(item => item._id === selectedItem._id);
        if (!exists){
            selectedItem.quantity = 0;
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
        <div>
            <h1 className='itemDetails-title mt-5'>OUR TOP PICKS</h1>
            <div className='container mb-3'>
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

            <button onClick={() => navigate('/inventory')} className="mb-5 rounded btn-item">See all items</button>

        </div>
    );
};

export default HomeInventory;