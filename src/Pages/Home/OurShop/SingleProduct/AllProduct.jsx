import React from 'react';
import useShoes from '../../../../Hooks/useShoes';
import SingleProduct from './SingleProduct';


const AllProduct = () => {
    const [shoes] = useShoes();

    return (
        <div className='my-10 flex items-center justify-center'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
{
    shoes.slice(16 , 22).map(shoe=><SingleProduct
    key={shoe._id}
    shoe={shoe}
    ></SingleProduct>)
}
            </div>
            
        </div>
    );
};

export default AllProduct;