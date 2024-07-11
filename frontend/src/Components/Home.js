import React from 'react'
import { FaHistory } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import FoodItem from './FoodItem';
import { MdAdminPanelSettings } from "react-icons/md";

const Home = () => {

  return (
    <div className='bg-[#FC8019]'>
        <div className='flex justify-between items-center border-b-8'>
            <div className='size-[200px] m-5 pt-5'>
                <Link to="/home">
                <img src='https://miro.medium.com/v2/resize:fit:1400/1*Qw11nbTP2pBb08x-H2WDSA.png' alt='logo'/>
                </Link>
            </div>
            <div className='flex'>
            <div className='m-5'>
                <Link to="/reorder">
            <FaHistory className='size-[35px]'/>
            </Link>
            </div>
            <div className='m-5'>
                <Link to="/cart">
            <MdShoppingCartCheckout className='size-[35px]'/>
            </Link>
            </div>
            <div className='m-5'>
                <Link to="/profile">
               <CgProfile className='size-[35px]'/>
               </Link>
            </div>
            <div className='m-5'>
                <Link to="/admin/login">
               <MdAdminPanelSettings className='size-[35px]'/>
               </Link>
            </div>
            </div>
        </div>
       <FoodItem/>
    </div>
  )
}

export default Home