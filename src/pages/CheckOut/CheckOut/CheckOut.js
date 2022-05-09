import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItemDetails from '../../../hooks/useItemDetails';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const {inventoryId} = useParams();
    const [item] = useItemDetails(inventoryId);
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handleItemBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const manageinfo = {name, email, item, address, phone};
        axios.post('http://localhost:5000/manage', manageinfo)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }

    

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Checkout your items: {item.name}</h2>
            <form onSubmit={handleCreateUser}>                    
                    <div className='input-group mb-3 d-block'>
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" value={user?.displayName} name="name" id="" required readOnly disabled/>
                    </div>
                    <div className='input-group mb-3 d-block'>
                        <label htmlFor="email">Your Email</label>                        
                        <input value={user?.email} readOnly type="email" name="email" id="" required disabled/>
                    </div>
                    <div className='input-group mb-3 d-block'>
                        <label htmlFor="item">Item</label>
                        <input onBlur={handleItemBlur} type="text" value={item.name} name='item' id='' required readOnly />
                    </div>
                    <div className='input-group mb-3 d-block'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' id='' required autoComplete='off' />
                    </div>
                    <div className='input-group d-block'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhonedBlur } type="text" name='phone' id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit mb-3' type="submit" value="Order Info" />
                </form>
        </div>
    );
};

export default CheckOut;