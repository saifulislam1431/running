import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useBrands = () => {
    const {data: brands = [] , refetch} = useQuery({
        queryKey:["top-brand"],
        queryFn: async()=>{
            const res = await axios.get("http://localhost:5000/top-brand")
            return res.data;
        }
    })
    return [brands , refetch]
};

export default useBrands;