import axios from 'axios';
import React, { useState } from 'react'
import { DISH_API_END_POINT } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getRefresh } from '../redux/orderSlice';
import toast from 'react-hot-toast';
import OrderItem from './OrderItem';

const Admin = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const dispatch = useDispatch();

    const submitHandler = async ()=> {
        try {
            const res = await axios.post(`${DISH_API_END_POINT}/create`,{name,price,category,description,image},{
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            dispatch(getRefresh());
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
        setName("");
        setPrice("");
        setCategory("");
        setDescription("");
        setImage("");
    }

  return (
    <div className='bg-orange-400'>
        <div>
            <h1 className='text-5xl flex justify-evenly'>ADMIN PANEL</h1>
        </div>
        <div className='bg-white m-2 rounded-xl p-2'>
            <p className='text-xl font-semibold'>Create a Dish</p>
            <div className='flex m-2'>
                <p className='mr-1 mt-1'>Name :-</p>
                <input className='border-2 border-black rounded-xl p-1' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the Name'/>
            </div>
            <div className='flex m-2'>
                <p className='mr-1 mt-1'>Price :-</p>
                <input className='border-2 border-black rounded-xl p-1' type='number' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter the Price'/>
            </div>
            <div className='flex m-2'>
                <p className='mr-1 mt-1'>Cateogary :-</p>
                <input className='border-2 border-black rounded-xl p-1' type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter the cateogary'/>
            </div>
            <div className='flex m-2'>
                <p className='mr-1 mt-1'>Description :-</p>
                <textarea className='border-2 border-black rounded-xl p-1' type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter the Description'/>
            </div>
            <div className='flex m-2'>
                <p className='mr-1 mt-1'>Image :-</p>
                <input className='border-2 border-black rounded-xl p-1' type='text' value={image} onChange={(e) => setImage(e.target.value)} placeholder='image'/>
            </div>
            <div className='m-2'>
                <button
                onClick={submitHandler}
                className='border-4 border-green-600 rounded-full py-1 px-2 font-semibold'>CREATE</button>
            </div>
        </div>
        <div className='bg-white m-2 rounded-xl p-2'>
            <div className='border-b-2 border-gray-400'>
                <h1 className='text-2xl font font-semibold'>ORDERS</h1>
            </div>
            <OrderItem/>
        </div>
    </div>
  )
}

export default Admin