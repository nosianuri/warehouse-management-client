import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children);
    let total = 0;
        
    let quantity = 0;
    for(const item of cart){
        quantity = quantity + item.quantity;
        total = total + item.price * item.quantity;
                
    }
    
    const grandTotal = total ;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>                        
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;