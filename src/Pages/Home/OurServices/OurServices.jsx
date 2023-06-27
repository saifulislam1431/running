import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import service1 from "../../../assets/icons/atm-card.png";
import service2 from "../../../assets/icons/evidence.png";
import service3 from "../../../assets/icons/quality.png";
import service4 from "../../../assets/icons/live-chat.png";
import service5 from "../../../assets/icons/webpage.png";

const OurServices = () => {
    return (
        <section className='flex items-center justify-center my-14'>
<div>
    <SectionTitle
    title="Stand Out from the Crowd with our best services"
    description="Our dedicated support team is here to assist you every step of the way. From answering your inquiries to providing product recommendations, we strive to offer personalized and exceptional customer support to enhance your shopping journey."
    >
    </SectionTitle>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 px-5'>
<div className='p-5 border border-primary rounded-md text-center'>
<img src={service1} alt="Service 1" className='mx-auto mb-3 w-11'/>
    <h1 className='secTitle text-primary text-lg'>Fast and Secure Checkout</h1>
</div>

<div className='p-5 border border-primary rounded-md text-center'>
<img src={service2} alt="Service 1" className='mx-auto mb-3 w-11'/>
    <h1 className='secTitle text-primary text-lg'>Wide Range of Selection</h1>
</div>

<div className='p-5 border border-primary rounded-md text-center'>
<img src={service3} alt="Service 1" className='mx-auto mb-3 w-11'/>
    <h1 className='secTitle text-primary text-lg'>Responsive and User-Friendly Design</h1>
</div>

<div className='p-5 border border-primary rounded-md text-center'>
<img src={service4} alt="Service 1" className='mx-auto mb-3 w-11'/>
    <h1 className='secTitle text-primary text-lg'>Exceptional Customer Service</h1>
</div>
<div className='p-5 border border-primary rounded-md text-center'>
<img src={service5} alt="Service 1" className='mx-auto mb-3 w-11'/>
    <h1 className='secTitle text-primary text-lg'>Personalized Recommendations</h1>
</div>
    </div>
</div>
        </section>
    );
};

export default OurServices;