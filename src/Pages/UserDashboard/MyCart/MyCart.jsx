import React from 'react';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
    const [carts] = useCart();

    const totalPrice = carts.reduce((sum , item) => item.Price + sum ,0)

    const totalShipping = carts.reduce((sum , item)=>item.Shipping === "Free" ? 0 + sum : item.Shipping + sum ,0)

    return (
        <div className="overflow-x-auto w-full lg:w-5/6">
  <table className="table">
    <thead>
      <tr className='text-base text-primary'>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Shipping</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            carts.map(cart=><tr key={cart._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart.ImageURL} alt="Shoe" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.Name}</div>
                    </div>
                  </div>
                </td>
                <td className='font-bold'>
                  {cart.Brand}
                </td>
                <td className='font-semibold'>${cart.Price}</td>
                <td className='font-semibold'> {cart.Shipping}</td>
                <th>
                 <button className='myBtn'>Pay</button>
                </th>
              </tr>)
        }
      
    </tbody>    
  </table>

  <div className='my-10 lg:my-20 mx-auto'>
  <div className="card w-96 bg-base-100 shadow-lg mx-auto border-2 border-primary">
  <div className="card-body">
    <h2 className="card-title">Price of all product: <span className='text-primary'>${totalPrice ? totalPrice : "Please Add Some Product"}</span></h2>
    <h2 className="card-title">Shipping of all product: <span className='text-primary'>${totalShipping ? totalShipping : "Please Add Some Product"}</span></h2>
    <div className="divider"></div> 
    <h2 className="font-bold text-xl text-primary mb-3">Shipping of all product: <span className='text-primary'>${totalShipping + totalPrice ? totalShipping + totalPrice : "Please Add Some Product"}</span></h2>
    <div className="card-actions justify-end">
      <button className="mySecBtn">Pay For All</button>
    </div>
  </div>
</div>
  </div>
</div>
    );
};

export default MyCart;