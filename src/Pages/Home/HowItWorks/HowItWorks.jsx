import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const HowItWorks = () => {
    return (
        <section className='my-14 flex items-center justify-center overflow-hidden'>
  <div className='text-center'>
    <SectionTitle
    title="Step-by-Step Guide"
    description="Discover how easy it is to find your perfect pair of shoes with our step-by-step guide. From browsing our collection to making a purchase, we'll walk you through the process to ensure a seamless and enjoyable shopping experience."
    ></SectionTitle>


<ul className="steps steps-vertical lg:steps-horizontal" data-aos="zoom-out-up"
        data-aos-duration="1000">
  <li data-content="+" className="step step-primary font-semibold">Select</li>
  <li data-content="$" className="step step-success font-semibold">Purchase</li>
  <li data-content="✓" className="step step-success font-semibold">Confirm Order</li>
  <li data-content="★" className="step step-success font-semibold">Receive</li>
</ul>
    </div>          
        </section>
    );
};

export default HowItWorks;