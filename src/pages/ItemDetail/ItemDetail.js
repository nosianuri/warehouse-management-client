import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

const ItemDetail = () => {
    
    const {inventoryId} = useParams();
    const [item] = useItemDetails(inventoryId);
    

    return (
        <div>
            <h2>Welcome to Detail:{item.name}</h2>
            <div>
                <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-info'>Procceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;