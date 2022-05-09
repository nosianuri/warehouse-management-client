import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

const Items = ({ items, handleLessToQuantity, handleAddToQuantity }) => {
    const { _id, name, image, price, description, quantity, supplier } = items;    
    const navigate = useNavigate();

    const navigateToInventory = id =>{
        navigate(`/inventory/${id}`);
    }

    

    return (
        <div className='items-row'>
            
                <img className='items-img' src={image} alt="" />

                <h4>{name}</h4>
                <h5>price: ${price}</h5>
                <h6>Quantity: {quantity}</h6>
                <p>Description: <small>{description}</small></p>
                <p>Supplier Name: <small>{supplier}</small></p>

                <div className=''>
                <button onClick={() => handleLessToQuantity(items)} className='btn-update'><span className='btn-set'>Delivered</span>
                </button>
                
                <input type="text" onChange={handleAddToQuantity} />
                
                <button onClick={()=>navigateToInventory(_id)} className="btn-update set"> <span className='btn-set '>stock</span></button>
            </div>
        </div>
    );
};

export default Items;