import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useItems from '../../hooks/useItems';
import { removeFromDb } from '../../utilities/fakedb';

import Review from '../Review/Review';
import './MyItem.css';

const MyItem = () => {
    const [items, setItems] = useItems();
    const [cart, setCart] = useCart(items);
    const navigate = useNavigate();

    const handleRemoveItem = item =>{
        const rest = cart.filter(selectItem => selectItem._id !== item._id);
        setCart(rest);
        removeFromDb(item._id);
    }
    return (
        <div className='myitem-container w-50 mx-auto'>
            <div className='review-item-container mb-5'>
                {
                    cart.map(item => <Review
                    key={item._id}
                    item ={item}
                    handleRemoveItem = {handleRemoveItem}
                    ></Review>)
                }
            </div>
            
            <div>
                <Link to="/manageitem">
                    <button onClick={()=>navigate('/manageitem')}  className='btn btn-set'>Manage Item</button>
                </Link>
            </div>
        </div>
    );
};

export default MyItem;