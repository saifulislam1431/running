import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useReviews from '../../../Hooks/useReviews';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
import { HiOutlinePencil } from 'react-icons/hi2';

const Testimonial = () => {
    const [reviews] = useReviews();

    return (
        <section className='my-16 justify-center items-center'>
<div>
<SectionTitle
title="Words of Praise and Trust"
description="Discover the trust and satisfaction our customers have in our brand. Read their genuine testimonials and find out why they choose our shoes to complement their style and enhance their comfort."
></SectionTitle>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            reviews.map(review=><SwiperSlide
            key={review._id}
            >
                <div className='flex flex-col h-full items-center justify-center lg:px-14 space-y-4 px-8 '>
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />     
    <FaQuoteLeft className='w-16 h-16 opacity-50 text-primary' />              
<p className='font-semibold'>{review.testimonial}</p>
<h1 className='font-bold brand'>{review.name}</h1>
                </div>
            </SwiperSlide>)
        }
      </Swiper>

<div className='text-center my-5'>
<button className='myBtn'>
   <HiOutlinePencil className='h-5 w-5'/> Add Your Testimonial</button>
</div>
</div>
        </section>
    );
};

export default Testimonial;