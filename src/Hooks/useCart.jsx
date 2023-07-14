import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UserAuth } from '../Auth/Auth';
import axios from 'axios';

const useCart = () => {
    const {user , loading} = useContext(UserAuth);

    const {data: carts = [] , refetch} = useQuery({
        queryKey:['carts' , user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axios.get(`http://localhost:5000/user-cart?Email=${user?.email}`)
            return res.data;
        }
    })
    
    return [carts , refetch]
};

export default useCart;