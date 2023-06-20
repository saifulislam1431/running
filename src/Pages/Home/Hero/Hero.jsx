import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/shoe/banner/banner1.png"
import banner3 from "../../../assets/shoe/banner/banner3.png"
import { HiArrowSmallRight } from 'react-icons/hi2';

const Hero = () => {
    return (
        <Carousel className='text-center my-10' autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className='h-96 relative'>
            <img src={banner3} alt='Banner1' className='h-full'/>
            <div className='absolute top-0 h-full w-full bg-black bg-opacity-20 items-center'>
<h1 className='mt-6 lg:mt-14 brand text-xl lg:text-3xl text-primary'>Celebrate Every Step: Unleash Your Style with our Iconic Shoe Collection!</h1>
<button className='myBtn mt-10'>Shop Now <HiArrowSmallRight className='h-7 w-6'/></button>
            </div>
        </div>
        <div className='h-96 relative'>
            <img src={banner1} alt='Banner1' className='h-full'/>
            <div className='absolute top-0 h-full w-full bg-black bg-opacity-50'>
<div className='text-left'>
<h1 className='mt-6 lg:mt-14 brand text-xl lg:text-3xl text-base-100'>Discover Your Sole Mate: Find the Perfect Pair for Every Occasion and Make a Fashion Statement!</h1>
<button className='mySecBtn mt-10'>Explore Now <HiArrowSmallRight className='h-7 w-6'/></button>
</div>
            </div>
        </div>
    </Carousel>
    );
};

export default Hero;