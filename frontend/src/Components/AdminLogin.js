import React, { useState } from 'react'
import { ADMIN_API_END_POINT } from '../utils/constant';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
        try{
            const res = await axios.post(`${ADMIN_API_END_POINT}/login`, { mobile, password }, {
                headers: {
                  'Content-Type': "application/json"
                },
                withCredentials: true
              }); 
              // dispatch(getUser(res?.data?.user));
             if(res.data.success){
                navigate("/admin");
                toast.success(res.data.message);
             }
            } catch (error) {
              toast.success(error.response.data.message);
              console.log(error);
            }
    }

  return (
    <div className='bg-orange-400 w-screen h-screen'>
        <div className='flex justify-center'>
            <h1 className='text-5xl'>ADMIN LOGIN PANEL</h1>
        </div>
        <div className=''>
            <div className='flex justify-center'>
            <input className='p-2 rounded-full m-5' type='text' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter Mobile Number' />
            </div>
            <div className='flex justify-center'>
            <input className='rounded-full p-2 m-5' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            </div>
        </div>
        <div className='flex justify-center'>
            <button
            onClick={submitHandler}
            className='bg-white hover:bg-gray-300 rounded-full border-4 border-green-600 py-1 px-5 font-semibold'>LOGIN</button>
        </div>
    </div>
  )
}

export default AdminLogin