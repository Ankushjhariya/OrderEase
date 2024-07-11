import React from 'react'
import { useGetMyOrder } from '../hooks/useGetMyOrder'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const ReorderItem = () => {
    const {user} = useSelector(store=> store.user)
    const id = user?._id
    useGetMyOrder(id);
    const {myorder} = useSelector(store=> store.order);

  return (
    <div>
        <div className=''>
        {myorder?.map((reorder)=>(
            <div key={reorder._id} className='bg-white border-4  p-2 rounded-xl border-gray-400 m-2'>
            <h2 className='font-semibold text-lg'>Order ID: {reorder._id}</h2>
            <p className='font-semibold text-lg'>Table Number: {reorder.tableNumber}</p>
            <div className='border-4 rounded-xl p-1 my-2 border-green-400'>
            {reorder.items.map((item) => (
                <div key={item._id} className='flex justify-between'>
                <p>{item.dish.name}</p>
                <p>{item.quantity}</p>
                </div>
            ))}
            </div>
            <p className='mt-4 font-semibold text-lg'>Total Price: ₹{reorder.totalPrice}</p>
            <p>Special Instructions: <span className='font-semibold text-lg'>{reorder.specialInstructions}</span></p>
        <div>
            {/* <button
            
            className='border-2 border-orange-400 p-1 rounded-full bg-green-300'>
                REORDER
            </button> */}
        </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default ReorderItem