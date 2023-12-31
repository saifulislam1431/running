import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMagnifyingGlass, HiOutlineArrowLeftOnRectangle, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import logo from "../../../assets/logo/running.png";
import { UserAuth } from '../../../Auth/Auth';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';
const Navbar = () => {
  const { user, logOut } = useContext(UserAuth);
  const [carts] = useCart();
  const [subNav, setSubNav] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const isAdmin = true;

  const handleOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Sign Out Successful ',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })

      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: error.massage,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
  }

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("night")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])


  const navItems = <>
    <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink></li>

    <li><NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "default")}>Shop</NavLink></li>

    {
      user ? <li><NavLink to={`${isAdmin ? "/dashboard/manageUser" : "/dashboard/userCart"}`} className={({ isActive }) => (isActive ? "active" : "default")}>Dashboard</NavLink></li> : ""
    }

    {/* {
      user ? <li><NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "default")}>Cart</NavLink></li> : ""
    } */}

    <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "default")}>About</NavLink></li>

    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "default")}>Contact</NavLink></li>

    {
      user ? <div className="dropdown dropdown-end ml-3" onClick={() => setSubNav(!subNav)}>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL} alt='Profile' />
          </div>
          <div className='absolute left-0 top-0 bg-error text-base-100 px-1 font-bold rounded-full'>
              {
                carts.length
              }
            </div>
        </label>
        {
          subNav ? <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            <li><NavLink to="/dashboard/userCart" className={({ isActive }) => (isActive ? "active" : "default")}>Cart</NavLink></li>

            <li><NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "default")}>Profile</NavLink></li>

            <button className='myBtn my-3' onClick={handleOut}>Logout <HiOutlineArrowRightOnRectangle className='h-5 w-5' /></button>
          </ul> : ""
        }
      </div> : <Link to="/signIn" className='myBtn'>Sign In <HiOutlineArrowLeftOnRectangle className='h-5 w-5' /></Link>
    }



    <label className="swap swap-rotate ml-2 shadow-md lg:px-4 py-2 lg:py-0 rounded-lg">

      {/* this hidden checkbox controls the state */}
      <input type="checkbox" checked={theme === "night" ? true : false} onChange={handleTheme} />

      {/* sun icon */}
      <svg className="swap-on fill-yellow-500 w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

      {/* moon icon */}
      <svg className="swap-off fill-gray-800 w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

    </label>

  </>
  return (
    <div className="navbar shadow-md sticky top-0 z-50 bg-base-100">
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
            <img src={logo} alt="Logo" className='w-14' />
            <p className='relative brand -top-1'>Running...</p>
          </Link>
          <div className='relative'>
            <input type="text" placeholder='Search your dream product' className='inputField h-min lg:w-72' />
            <div className='absolute top-0 right-0 bg-primary px-4 py-2 rounded-r-md'>
              <HiMagnifyingGlass className='h-6 w-6 text-white' />
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