import React from 'react';
import './Items.css';

const Items = ({ items }) => {
    const { name, image, price, description } = items;
    return (
        <div className='items'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <h5>price: ${price}</h5>
            <p>Description: {description}</p>
        </div>
    );
};

export default Items;