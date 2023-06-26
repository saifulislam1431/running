import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const SectionTitle = ({title , description}) => {
    return (
        <div className='my-10 flex items-center justify-center text-center'>
           <div>
           {/* <h1 className='secTitle text-2xl font-extrabold text-primary'>

 

           </h1> */}
                     <TypeAnimation 
  sequence={[
    title
    ,
    800,
    '',
  ]}
  speed={40}
  style={{ fontSize: '1.5rem' , color: "#808000" , fontWeight: 800 , fontFamily: ['Raleway', 'sans-serif'] }}
  repeat={Infinity}
/>
           <p className='font-semibold mt-3'>{description}</p>
            </div> 
        </div>
    );
};

export default SectionTitle;