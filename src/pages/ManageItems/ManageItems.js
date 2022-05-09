import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import './ManageItems.css';

const ManageItems = () => {
    const [allItems, setAllItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://polar-shelf-26045.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allItems.filter(item => item._id !== id);
                    setAllItems(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Your Item</h2>
            {
                allItems.map(item => <div key={item._id}>
                    <h4>{item.name} <button onClick={() => handleDelete(item._id)} className="btn-delete"><i className="fa-solid fa-trash-can delete"></i></button></h4>
                </div>)
            }
            <div>
                <Link to="/additem">
                    <button className='btn btn-info mt-5'>add new item</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageItems;