import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMagnifyingGlass, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import logo from "../../../assets/logo/running.png";
const Navbar = () => {
    const [subNav , setSubNav] = useState(false)
    const navItems = <>
    <li><NavLink to="/" className={({isActive}) => (isActive ? "active" : "default")}>Home</NavLink></li>

    <li><NavLink to="/shop" className={({isActive}) => (isActive ? "active" : "default")}>Shop</NavLink></li>

    <li><NavLink to="/dashboard" className={({isActive}) => (isActive ? "active" : "default")}>Dashboard</NavLink></li>

    <li><NavLink to="/cart" className={({isActive}) => (isActive ? "active" : "default")}>Cart</NavLink></li>

    <li><NavLink to="/about" className={({isActive}) => (isActive ? "active" : "default")}>About</NavLink></li>

    <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "default")}>Contact</NavLink></li>

        <div className="dropdown dropdown-end ml-3" onClick={()=>setSubNav(!subNav)}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
{
    subNav ? <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    <li><NavLink to="/profile" className={({isActive}) => (isActive ? "active" : "default")}>Profile</NavLink></li>
      
      <button className='myBtn my-3'>Logout <HiOutlineArrowRightOnRectangle className='h-5 w-5'/></button>
    </ul> : ""
}
    </div>
   
    </>
    return (
        <div className="navbar shadow-md sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="#808000" viewBox="0 0 24 24" stroke="#808000"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
{navItems}
      </ul>
    </div>
   <div className='inline-flex items-center gap-5'>
   <Link to="/">
        <img src={logo} alt="Logo" className='w-14'/>
        <p className='relative brand -top-1'>Running...</p>
    </Link>
    <div className='relative'>
    <input type="text" placeholder='Search your dream product' className='inputField h-min'/>
    <div className='absolute top-0 right-0 bg-primary px-4 py-2 rounded-r-md'>
    <HiMagnifyingGlass className='h-6 w-6 text-white'/>
    </div>
    </div>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
{navItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;