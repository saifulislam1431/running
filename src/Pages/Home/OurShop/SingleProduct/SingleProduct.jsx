import React from 'react';
import { motion } from "framer-motion"
import { HiOutlineShoppingCart } from 'react-icons/hi2';
const SingleProduct = ({shoe}) => {
    const {_id,Category,Name,Price,AvailableQuantity,Brand,Shipping,Variant,ImageURL} = shoe ;
    return (
        <div className='my-5 shadow-md rounded-lg'>
            <motion.div className='relative'
    whileHover={{ scale: 1.1 }}
>
    <img src={ImageURL} alt="Shoe" className='w-80 h-72 rounded-lg'/>

    <div className='absolute top-0 h-full w-full bg-black rounded-lg bg-opacity-0 hover:bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100'>
<div className='w-full px-10 space-y-2'>
    <h1 className='font-bold text-white secTitle'>{Name}</h1>
   <div className='flex items-center justify-between font-semibold text-secondary'>
   <p>Price: ${Price}</p>
    <p>Shipping: {Shipping}</p>
   </div>

<p className='font-semibold text-white'>Brand: {Brand}</p>

<div className='text-center'>
<button className='inline-flex items-center gap-1 myBtn mt-3'>Add To Cart <HiOutlineShoppingCart className='h-6 w-6'/></button>
</div>

</div>
</div>
</motion.div>

        </div>
    );
};

export default SingleProduct;