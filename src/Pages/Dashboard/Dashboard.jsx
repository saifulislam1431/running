import React from 'react';
import { HiArrowRightOnRectangle, HiBars3BottomLeft } from 'react-icons/hi2';
import { IoIosCog } from "react-icons/io";
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/logo/running.png"

const Dashboard = () => {
  const isAdmin = true;

    return (
        <section>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="myBtn drawer-button lg:hidden absolute top-2 left-2">
        <HiBars3BottomLeft className='h-6 w-6'/>
    </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 




    <ul className="menu py-10 mr-0 pr-0 w-72 h-full bg-base-200 text-base-content">
  
      <Link to="/" className='mx-auto my-5'>
            <img src={logo} alt="Logo" className='w-14' />
            <p className='relative brand -top-1'>Running...</p>
          </Link>


      {/* Sidebar content here */}
      {
        isAdmin ? <>
        <li><NavLink to="/dashboard/manageUser" className={({isActive})=>(isActive ? "side-active" : "side-default")}>Manage Users</NavLink></li>

<li><NavLink to="/dashboard/manageOrder" className={({isActive})=>(isActive ? "side-active" : "side-default")}>Manage Orders</NavLink></li>

<li><NavLink to="/dashboard/manageProduct" className={({isActive})=>(isActive ? "side-active" : "side-default")}>Manage Products</NavLink></li>

<li><NavLink to="/dashboard/addProduct" className={({isActive})=>(isActive ? "side-active" : "side-default")}>Add Product</NavLink></li>
        </> : 
        <>
        <li><NavLink to="/dashboard/userCart" className={({isActive})=>(isActive ? "side-active" : "side-default")}>My Cart</NavLink></li>

<li><NavLink to="/dashboard/orderStatus" className={({isActive})=>(isActive ? "side-active" : "side-default")}>Order Status</NavLink></li>

<li><NavLink to="/dashboard/payment" className={({isActive})=>(isActive ? "side-active" : "side-default")}>Payment</NavLink></li>

<li><NavLink to="/dashboard/paymentHistory" className={({isActive})=>(isActive ? "side-active" : "side-default")}>Payment History</NavLink></li>
        </>
      }
      

<div className='divider px-2 my-3'></div>

<li><NavLink to="/" className={({isActive})=>(isActive ? "active" : "default")}>Home</NavLink></li>

<li><NavLink to="/shop" className={({isActive})=>(isActive ? "active" : "default")}>Shop</NavLink></li>

<div className='my-10 px-3 flex items-center justify-between'>
<button><HiArrowRightOnRectangle className='text-primary h-7 w-8'/></button>
<button><IoIosCog className='text-primary h-7 w-8'/></button>
</div>

    </ul>
  
  </div>
</div>
        </section>
    );
};

export default Dashboard;