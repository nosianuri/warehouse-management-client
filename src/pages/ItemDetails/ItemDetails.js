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
        <div className='container'>
            <div className='row'>
                <h1 className='itemDetails-title mt-5'>Item List: {itemDetails.length}</h1>
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