import React from 'react';
import useCart from '../../hooks/useCart';
import useItems from '../../hooks/useItems';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import './MyItem.css';

const MyItem = () => {
    const [items, setItems] = useItems();
    const [cart, setCart] = useCart(items);

    const handleRemoveItem = item =>{
        const rest = cart.filter(selectItem => selectItem.id !== item.id);
        setCart(rest);
        removeFromDb(item.id);
    }
    return (
        <div className='myitem-container'>
            <div className='review-item-container'>
                {
                    cart.map(item => <Review
                    key={item.id}
                    item ={item}
                    handleRemoveItem = {handleRemoveItem}
                    ></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default MyItem;