import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useEveryOrder } from '../hooks/useEveryOrder';

const OrderItem = () => {
    useEveryOrder();
    const {orders} = useSelector(store=> store.order);
  return (
    <div>
        {orders.map((order)=>(
            <div key={order._id} className='border-4 p-2 rounded-xl border-gray-400 m-2'>
            <h2 className='font-semibold text-lg'>Order ID: {order._id}</h2>
            <p className='font-semibold text-lg'>Table Number: {order.tableNumber}</p>
            <div className='border-4 rounded-xl p-1 my-2 border-green-400'>
            {order.items.map((item) => (
                <div key={item._id} className='flex justify-between'>
                <p>{item.dish.name}</p>
                <p>{item.quantity}</p>
                </div>
            ))}
            </div>
            <p className='mt-4 font-semibold text-lg'>Total Price: ₹{order.totalPrice}</p>
            <p>Special Instructions: <span className='font-semibold text-lg'>{order.specialInstructions}</span></p>
        </div>
        ))}
    </div>
  )
}

export default OrderItem;