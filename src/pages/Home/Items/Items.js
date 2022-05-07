import React from 'react';
import './Items.css';

const Items = ({ items, handleAddToCart }) => {
    const { name, image, price, description, quantity, supplier } = items;
    return (
        <div className='items-row'>
            
                <img className='items-img' src={image} alt="" />

                <h4>{name}</h4>
                <h5>price: ${price}</h5>
                <h6>Quantity: {quantity}</h6>
                <p>Description: <small>{description}</small></p>
                <p>Supplier Name: <small>{supplier}</small></p>

                <button onClick={() => handleAddToCart(items)} className='btn-update'><span className='btn-set'>stock update</span>
                </button>
            

        </div>
    );
};

export default Items;