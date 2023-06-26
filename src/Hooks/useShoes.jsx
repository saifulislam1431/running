import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useShoes = () => {
    const {data: shoes = [] , refetch} = useQuery({
        queryKey: ["allShoes"],
        queryFn: async ()=>{
            const res = await axios.get("http://localhost:5000/all-shoes");
            return res.data;
        }
        
    })
    return [shoes , refetch]
};

export default useShoes;