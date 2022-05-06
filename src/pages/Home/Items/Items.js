import React from 'react';
import './Items.css';

const Items = ({ items, handleAddToCart }) => {
    const { name, image, price, description, quantity, supplier } = items;
    return (
        <div className='items'>
            <img src={image} alt="" />
            <h4>{name}</h4>            
            <h5>price: ${price}</h5>
            <h6>Quantity: {quantity}</h6>
            <p title={description}>Description: {description.length > 96 ? description.slice(0, 96) + '...': description}</p>
            <p className='mb-5'><small>Supplier Name: {supplier}</small></p>
            
            <button onClick={() => handleAddToCart(items)} className='btn-update'><p className='btn-set'>stock update</p>
             </button>
            
        </div>
    );
};

export default Items;