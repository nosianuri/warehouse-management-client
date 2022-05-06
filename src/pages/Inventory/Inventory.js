import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import './Inventory.css';

const Inventory = () => {
    return (
        <div className='itemDetails-title mt-5'>
            <ItemDetails></ItemDetails>
            <button className='mt-5 rounded btn-style'>add new item</button>
        </div>
    );
};

export default Inventory;