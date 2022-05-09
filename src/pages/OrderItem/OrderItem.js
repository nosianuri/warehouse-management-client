import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const OrderItem = () => {
    const [user] = useAuthState(auth);
    const [orderItem, setOrderItem] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const confirmOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/manage?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);

                setOrderItem(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        confirmOrders();
    }, [user]);
    return (
        <div>
            <h2>your order item:{orderItem.length}</h2>
        </div>
    );
};

export default OrderItem;