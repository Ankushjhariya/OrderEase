import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from '../hooks/useCart';
import { ORDER_API_END_POINT } from '../utils/constant';
import axios from 'axios';
import toast from 'react-hot-toast';

const Cart = () => {
    const navigate = useNavigate();
    const {user} = useSelector(store=> store.user);
    useCart(user._id);
    const {cart} = useSelector(store=> store.cart);
    const totalPrice = cart.items.reduce(
        (total, item) => total + item.quantity * item.dish.price,
        0
    );

    const [tableNumber, setTableNumber] = useState("");
    const [specialInstructions, setSpecialInstructions] = useState("");


    const handlePlaceOrder = async () =>{
        const orderData = {
            tableNumber,
            totalPrice,
            specialInstructions,
            items: cart.items.map(item => ({
                dish: item.dish._id,
                quantity: item.quantity
            })),
            id: user._id,
        };
        try {
            console.log("data is", orderData);
            const response = await axios.post(
                `${ORDER_API_END_POINT}/create`, orderData
            );
            console.log(response);
            if (response.data.success) {
                alert("Order Created Successfully");
                navigate("/home");
                // Reset cart or navigate to another page
            } else {
                alert("Table number is required");
            }
            setTableNumber("");
            setSpecialInstructions("");
        } catch (error) {
            toast.success(error.response.data.message);
        }
    }

    
  return (
    <div className='bg-orange-400 w-screen h-screen'>
        <div className='flex justify-start'>
        <Link className='mt-2 ml-2' to="/home">
        <IoMdArrowRoundBack className='size-[30px]'/>
        </Link>
        <input value={tableNumber} onChange={(e)=>setTableNumber(e.target.value)} className='mx-4 my-1 rounded-2xl px-10 py-1 border-2 font-semibold border-green-400' type='text' placeholder='Enter Table Number'/>
        </div>
        <div className=' bg-green-200 border-4 border-orange-400 my-10  rounded-full p-4'>
            <p className='font-bold flex justify-center items-center'>Minimum preparation time for every order is 10-15 Minute </p>
            <p className='font-bold flex justify-center items-center'>We will try to deliver your order ASAP</p>
        </div>
        { cart?.items?.length > 0 ? (
            <div className='bg-white border-2 m-1 p-2 rounded-xl  border-gray-400'>
                {cart?.items?.map((item) => (
                <div className='flex justify-between m-1'  key={item.dish._id}>
                    <p className='text-lg font-semibold'>{item.dish.name}</p>
                    <p className='text-lg font-semibold'>{item.quantity}</p>
                    </div>
                     ))}
            </div>
             ):
         <p className='text-2xl font-semibold flex justify-center'>Your Cart is Empty</p>
        }

        <div className='mx-4 flex justify-between'>
        <button onClick={handlePlaceOrder} className=' text-white bg-green-600 text-lg font-semibold border-4 border-green-400 rounded-full p-2'>Place Order</button>
        <p className='text-xl font-semibold'>Total- ₹ {totalPrice}</p>
        </div>
        <div className='ml-4 mt-2'>
            <textarea value={specialInstructions} onChange={(e)=>setSpecialInstructions(e.target.value)}  className='rounded-xl p-3' type='text' placeholder='Any Special Instruction'/>
        </div>
    </div>
  )
}

export default Cart