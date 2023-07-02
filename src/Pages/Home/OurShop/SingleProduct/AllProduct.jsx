import React from 'react';
import useShoes from '../../../../Hooks/useShoes';
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';


const AllProduct = () => {
    const [shoes] = useShoes();

    return (
        <div className='my-10 flex items-center justify-center'>

            <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
{
    shoes.slice(0,6).map(shoe=><SingleProduct
    key={shoe._id}
    shoe={shoe}
    ></SingleProduct>)
}
            </div>

            <div className='text-center mt-10'>
    <Link to="/shop" className='myBtn'>Show All Shoe</Link>
    </div> 
                </div>  
         
        </div>
    );
};

export default AllProduct;