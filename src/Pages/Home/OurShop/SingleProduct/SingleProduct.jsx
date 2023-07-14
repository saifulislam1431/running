import React, { useContext } from 'react';
import { motion } from "framer-motion"
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { UserAuth } from '../../../../Auth/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../../Hooks/useCart';


const SingleProduct = ({ shoe }) => {
    const { user } = useContext(UserAuth);
    const [ , refetch] = useCart();

    const navigate = useNavigate()

    const { _id, Category, Name, Price, AvailableQuantity, Brand, Shipping, Variant, ImageURL } = shoe;

    const handleAddCart = (shoe) => {

        const { _id, Category, Name, Price, AvailableQuantity, Brand, Shipping, Variant, ImageURL } = shoe;

        if (!user) {
            Swal.fire({
                title: 'Please!',
                text: 'Please Login First To Add This Product In Your Cart',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return navigate("/signIn");
        }else{
            const newData = {
                _id, Name, Price, Shipping, Brand, ImageURL, AvailableQuantity,
                Email: user?.email, BuyerName: user?.displayName
            }
    
    
            fetch("http://localhost:5000/user-cart", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newData)
            })
    
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Item added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                    
                })
        }

    }
    return (
        <div className='my-5 shadow-md rounded-lg overflow-hidden'>
            <motion.div className='relative'
                whileHover={{ scale: 1.1 }}
                data-aos="fade-left"
                data-aos-duration="1500"
            >
                <img src={ImageURL} alt="Shoe" className='w-80 h-72 rounded-lg' />

                <div className='absolute top-0 h-full w-full bg-black rounded-lg bg-opacity-0 hover:bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100'>
                    <div className='w-full px-10 space-y-2'>
                        <h1 className='font-bold text-white secTitle'>{Name}</h1>
                        <div className='flex items-center justify-between font-semibold text-secondary'>
                            <p>Price: ${Price}</p>
                            <p>Shipping: {Shipping}</p>
                        </div>

                        <p className='font-semibold text-white'>Brand: {Brand}</p>

                        <div className='text-center'>
                            <button onClick={() => handleAddCart(shoe)} className='inline-flex items-center gap-1 myBtn mt-3'>Add To Cart <HiOutlineShoppingCart className='h-6 w-6' /></button>
                        </div>

                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default SingleProduct;