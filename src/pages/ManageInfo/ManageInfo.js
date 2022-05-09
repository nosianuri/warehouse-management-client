import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './ManageInfo.css';

const ManageInfo = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const manageinfo = {name, email, address, phone};
        console.log(manageinfo);
    }

    return (
        <div className='form-container mt-5'>
            <div>
            <h2 className='form-title mt-3'>Manage Your Information</h2>
                <form onSubmit={handleCreateUser}>                    
                    <div className='input-group mb-3 d-block'>
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                    </div>
                    <div className='input-group mb-3 d-block'>
                        <label htmlFor="email">Your Email</label>                        
                        <input value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>
                    <div className='input-group mb-3 d-block'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' id='' required />
                    </div>
                    <div className='input-group d-block'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhonedBlur } type="text" name='phone' id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit mb-3' type="submit" value="Manage Info" />
                </form>
                
            </div>
        </div>
    );
};

export default ManageInfo;