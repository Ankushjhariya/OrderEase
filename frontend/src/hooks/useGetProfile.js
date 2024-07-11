import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { USER_API_END_POINT } from '../utils/constant';
import { getUser } from '../redux/userSlice';


const useGetProfile = (id)=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMyProfile = async ()=>{
            try {
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
                    withCredentials:true
                });
                console.log(res);
                dispatch(getUser(res.data.user))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMyProfile();
    },[id]);
};
export default useGetProfile;