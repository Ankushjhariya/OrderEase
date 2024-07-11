import React, { useEffect } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReorderItem from './ReorderItem';

const Reorder = () => {

  return (
    <div className='bg-orange-400'>
        <div className='flex border-b-4 rounded-xl'>
            <div className='m-4'>
            <Link className='' to="/home">
            <IoMdArrowRoundBack className='size-[30px]'/>
            </Link>
            </div>
            <div className='flex items-center'>
                <h1 className='text-2xl font-extrabold font-mono'>REORDER</h1>
            </div>
        </div>
        <ReorderItem/>
    </div>
  )
}

export default Reorder