import React, { useEffect, useState } from 'react';
import useBrands from '../../../Hooks/useBrands';
import Brands from './Brands';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./Top.css"
import { HiOutlineShoppingCart } from 'react-icons/hi2';

const TopBrand = () => {
    const [brands , refetch] =useBrands();

    const [brandName , setBrandName] = useState("Adidas");


    const [brand , setBrand] = useState([])
    

useEffect(()=>{  
    const selectedBrand = brands.filter(singleBrand => singleBrand.Brand === brandName)
    setBrand(selectedBrand)
    refetch()
},[brandName , brands])


    return (
        <section className='my-14 flex items-center justify-center overflow-hidden'>
<div>
<div className='flex gap-6 items-center justify-center text-center'>
<button className={`tabs brand ${brandName === "Adidas" ? "activeTab" : ""}`} onClick={()=>setBrandName("Adidas")}>Adidas</button>    
<button className={`tabs brand ${brandName === "Nike" ? "activeTab" : ""}`} onClick={()=>setBrandName("Nike")}>Nike</button>    
<button className={`tabs brand ${brandName === "Puma" ? "activeTab" : ""}`} onClick={()=>setBrandName("Puma")}>Puma</button>    
</div> 


<div>
<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
    brand.map(singleBrand=><SwiperSlide key={singleBrand._id} className='w-80 h-72 relative'>
        <img src={singleBrand.ImageURL} className='w-80 h-72 rounded-lg block'/>

        <div className='absolute top-0 h-full w-full bg-black rounded-lg bg-opacity-0 hover:bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100'>
<div className='w-full px-10 space-y-2'>
    <h1 className='font-bold text-white secTitle'>{singleBrand.Name}</h1>
   <div className='flex items-center justify-between font-semibold text-secondary'>
   <p>Price: ${singleBrand.Price}</p>
   </div>

<p className='font-semibold text-white'>Brand: {singleBrand.Brand}</p>

<div className='text-center'>
<button className='inline-flex items-center gap-1 myBtn mt-3'>Add To Cart <HiOutlineShoppingCart className='h-6 w-6'/></button>
</div>

</div>
</div>


      </SwiperSlide>)
}

      </Swiper>
</div>


</div>
        </section>
    );
};

export default TopBrand;