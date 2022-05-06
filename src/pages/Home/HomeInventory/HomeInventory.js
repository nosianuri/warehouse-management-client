import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemDetails from '../../ItemDetails/ItemDetails';
import './HomeInventory.css';

const HomeInventory = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='itemDetails-title mt-5 mb-5'>OUR TOP PICKS</h1>
            <ItemDetails></ItemDetails>
            
                <button onClick={() =>navigate('/inventory')} className="mb-5 rounded btn-item">See all items</button>
            
        </div>
    );
};

export default HomeInventory;