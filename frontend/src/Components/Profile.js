import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useGetProfile from '../hooks/useGetProfile';
import { USER_API_END_POINT } from '../utils/constant';
import axios from 'axios';
import { getUser } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { getRefresh } from '../redux/orderSlice';

const Profile = () => {
    const {user} = useSelector(store=> store.user);
    const {id} = useParams();
    useGetProfile(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

const logoutHandler = async ()=> {
    try {
        const res = await axios.get(`${USER_API_END_POINT}/logout`);
        dispatch(getUser(null));
        toast.success(res.data.message);
        dispatch(getRefresh());
        navigate("/login");
    } catch (error) {
        console.log(error);
    }
}




  return (
    <div className='bg-orange-400'>
            <Link to="/home">
            <IoMdArrowRoundBack className='size-[35px]'/>
            </Link>
            
        <div className='bg-orange-400 items-center justify-center h-screen'>
            
            <div className=''>
                <img className='m-8 border-8 border-green-400 rounded-full' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAYFBMVEX///8AAAD8/Pxzc3MEBAT5+fkICAj09PRCQkKZmZnX19fKysrx8fHp6enm5uatra0pKSllZWWhoaGRkZHBwcFQUFA5OTkVFRVgYGCIiIgPDw98fHze3t4yMjIcHBy4uLjDYPV9AAAEzklEQVR4nO2bi5aiMAyGaaVcylUuioD6/m+5TQt4GRnRsYY9J9/MoguM/JO2aZJ2HIcgCIIgCIIgCIIgCIIgCAIPzuEgzOt4RvDxyjrwH0rh/rd1/IayoeOnVbmtd7t6W1apUifWY0LOoZGT6hC0bKANDlUCjb2OlubqS8TR5gTa3Olw2kSx0Bfx4Y7v+OGRMc9V4lxveGHsGKoL65DInb7Rzeu6Y0MP75oeeUxzeD4c0obN0KTDLVjGNBbi6cadk+htUnMPjkD9YKXSL/fM8x4K9Ni+NL0RSyPXzvmcq4Hy0I6uGjT52UFsZ0fPcqojumympeFCk+q5EUkizMo8A2vNSYQLmXacSAp1J6vnhspIPfRZHJR95DOFjEnMKUY9OXwuMXSw2tl4ks1ziVtMn+Pw+GlXVJ0xdrBEwlP73XOJux5FnpHIHXlcIFGiToByiRUjxEl6oUSJGpIlwXOJQYImER4rZkPFCw2aVzRBVvlcYok5t6hnV88lVnijRUAkkeQqdGVz8aK6xPIEFOI0tokODibze4jOBEv1i+D1RqG+1PzSzluxBZcjHLzKiYB6Q9h6Om3+iTKv14ZCCP27YMBNW6dbxh63NJzcpphJKh9ywOgX9x1E4LXxClAmReZOlT80ozqVV8PEgjdezNN5FpgayZBnuea9smGGlljdomRU9TSGzbemrvCy0xtgtPL0kLPJQZrCWH5IOdpQvkeAjKgL9pd+uA+6aLyyDqBOK2TW1bt8v893dZdJ7TOxdY1wIxEqUL2MqiqSvW/WDDhquP0APvuf9TAV31dShb/jelXo/tR64LC6MR2w1fyXDPM1V6HXuCC0DkPyy1GkMjpnYXg4hGF2jmQq7m5AQuep6phE2aEJ8mmBbZ8HzSGLkqE+iydRKA8Na6h9sd1dTX6Tzt226B19i49VSNbf/rD6x6ZA7LIOqFcC/fFODJR3iatm0AWaxhTGHc/Bm6aKOVbYzSG8yY39IA7z3MtKqqtPGMvmHV5pLC6CQZCOEd0pnzYGHC+o6LuIv68OhrGE1I89TE+v0Tds5ZcXXyDS8iFh8WYXKK+BLhpkvvhqDY8LvziajGqBQt1bj4X/zUEjuChPC004GfJUfrW244ftZKAlRtRv2vCLpZ24bHXFDlp6yXDRd3qsLb8xsIX+V+TsejPJAjuaQ14Ms7pViZAxVUdtmiXqbnR67Fhxs+3IHtq3pcGyTvhDIpRQUuNTLaJim7jTju5FhcaMLutibrkgqiLqzGxrel2i2QRluxKlLCDrwRe/jPH0tbTd0EL5G3dsuJcEDq9tKSy7R5m/3gtvlebSqkDudG8MlDtjdnY7Y3qa35WzTKHLTqlNhU6xNACb1aj8VWFTYVxDyP8XK0LGUNucqqvTG/PKjUT4PlV21IHHXbK0u4SSW9nBCvNWMrtQtRy9pJXYWLrUNWEZvDev3Ah0hz0nH09k9Oed3XdinJ8y3fP0kR8WKcJLW72tT/9waKUYpT5QhWEfoost7BeEsmait5P8sZn1zzeJY8eKSzaILSPoLSwcgR/r86He9VfY0c4GKMGj06ck7qWFhX74vOhT7cxY5Njoi1zIbvMhOivZwWf/dsXC5KI99wdn1RX9RRFBEARBEARBEARBEARBEO/yD9hoLqH0n7B/AAAAAElFTkSuQmCC' alt='profile'/>
            </div>
            <div className='m-8'>
                <p className='m-2'>
                <span className='font-bold'>Name</span><span> - {user?.name}</span>
                </p>
                <p className='m-2'>
                <span className='font-bold'>Email</span><span> - {user?.email}</span>
                </p>
                <p className='m-2'>
                <span className='font-bold'>Mobile</span><span> - {user?.mobile}</span>
                </p>
            </div>
            <div className='ml-8'>
                <button className='bg-white border-4 rounded-full border-green-400 p-2 font-bold'>Edit Profile</button>
            </div>
            <div className='ml-8 my-5' >
                <button onClick={logoutHandler} className='bg-white border-4 border-green-400 font-bold p-2 rounded-full'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Profile