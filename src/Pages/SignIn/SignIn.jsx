import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from "../../assets/logo/running.png"
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../../public/106680-login-and-sign-up.json";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook.png";
import { HiEye, HiEyeSlash } from 'react-icons/hi2';

const SignIn = () => {
const [show , setShow] = useState(false);
const [type , setType] = useState("password")

const handleShow = ()=>{
setType("text")
}
const handleHide = ()=>{
    setType("password")
    }



    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className='flex items-center justify-center min-h-[calc(80vh-100px)]'>
<div>
<div className='my-5 flex items-center justify-center'>
<Link to="/">
        <img src={logo} alt="Logo" className='w-14'/>
        <p className='relative brand -top-1'>Running...</p>
    </Link>
</div>
<div className='flex flex-col lg:flex-row items-center justify-center gap-10 px-8 lg:px-10'>
<div>
<Lottie animationData={animation} loop={true} className='lg:w-96'/>
</div>

<div className='w-full'>
<h1 className='my-10 text-center brand text-xl text-primary'>Sign In to Your Account</h1>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3'>
<label htmlFor="email" className='font-semibold'>Email</label>
      <input type='email' {...register("email", {required:true })}  className='inputField w-80 lg:w-96' placeholder='your email'/>
      {errors.email?.type === 'required' && <p role="alert" className='text-red-600 font-medium'>Email is required</p>}

<label htmlFor="Password" className='font-semibold'>Password</label>

      <div className='relative'>
      <input type={type} {...register("password", {required:"Password Address is required" })}  className='inputField w-80 lg:w-96' placeholder='your password'/>

<div className='absolute top-3 right-6 lg:right-3' onClick={()=>setShow(!show)}>
{
    show ? <HiEye className='h-5 w-5 text-primary' onClick={handleHide}/> : <HiEyeSlash className='h-5 w-5 text-primary' onClick={handleShow}/>
}
</div>

      </div>
      {errors.password && <p role="alert" className='text-red-600 font-medium'>{errors.password?.message}</p>}

      <input type="submit" value="Sign In" className='myBtn w-80 lg:w-96'/>

    </form>

<p className='mt-2 font-semibold'>Forget Password? <span className='font-bold text-primary cursor-pointer underline'>Reset</span></p>

    <div className='my-5'>
<p className='font-semibold'>New to <span className='brand'>Running</span>? <Link to="/signUp" className='text-primary font-bold'>Sign Up</Link></p>

<div className="divider font-semibold">OR WITH</div>

<div className='text-center space-x-4 mt-5'>
<button>
    <img src={google} alt="Google" />
</button>
<button>
    <img src={facebook} alt="Google" />
</button>
</div>
    </div>
</div>
</div>
</div>
        </section>
    );
};

export default SignIn;