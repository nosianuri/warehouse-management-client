import React, { useEffect, useState } from 'react';
import Items from '../Home/Items/Items';
import './ItemDetails.css';

const ItemDetails = () => {
    const [itemDetails, setItemDetails] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItemDetails(data));
    }, []);
    return (
        <div className='container mb-5'>
            <div className='row'>
                <h1 className='itemDetails-title mt-5 mb-5'>OUR TOP PICKS</h1>
                <div className='itemDetails-container'>
                    {
                        itemDetails.map(items => <Items
                            key={items.id}
                            items={items}
                        ></Items>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;