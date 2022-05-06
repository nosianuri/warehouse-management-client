import React from 'react';
import './Review.css';

const Review = (props) => {
    const {item, handleRemoveItem} = props;
    const {name, image, price, quantity} = item;
    return (
        <div className='review-item'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-details">
                    <p className='item-name'>{name.length > 20 ? name.slice(0, 20): name}</p>
                    <p>Price: <span className='style'>{price}</span></p>
                    <p><small>Quantity:{quantity}</small> </p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItem(item)} className='delete-button'><i className="fa-solid fa-trash-can delete-icon"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Review;