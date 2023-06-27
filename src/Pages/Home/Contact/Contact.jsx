import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import animation from "../../../../public/85299-contact-envelope.json";
import Lottie from "lottie-react"
import { HiEnvelope } from 'react-icons/hi2';

const Contact = () => {
    return (
        <section className='my-14'>
<SectionTitle
title="Stay Connected"
description="Let's stay connected! Contact us to stay up-to-date with the latest offers, product updates, and exclusive deals. We value your engagement and look forward to connecting with you."
></SectionTitle>

<div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
<div>
<Lottie animationData={animation} loop={true} className='w-96'/>
</div>
<div>
<form className='flex flex-col w-full space-y-2'>
    
    <label htmlFor="name" className='font-semibold'>Name</label>
    <input type="text" className='inputField w-full lg:w-96' placeholder='Your name'/>
    
    <br />
   
    <label htmlFor="email" className='font-semibold'>Email</label>
    <input type="email" className='inputField w-full lg:w-96' placeholder='Your email'/>
   
  <br />
    <label htmlFor="Massage" className='font-semibold'>Massage</label>
    <textarea name="massage" className='inputField w-full lg:w-96' placeholder='Your Massage' cols="40" rows="5"></textarea>
    

    <div className='text-center'>
<button className='myBtn  mt-6'><HiEnvelope className='h-5 w-5'/> Send</button>
</div>
</form>

</div>
</div>
        </section>
    );
};

export default Contact;