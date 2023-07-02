import React, { useEffect, useState } from 'react';
import banner2 from "../../assets/shoe/feature/person1.png"
import { TypeAnimation } from 'react-type-animation';
import useShoes from '../../Hooks/useShoes';
import SingleProduct from '../Home/OurShop/SingleProduct/SingleProduct';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi2';
const Shop = () => {
    const [shoes] = useShoes();
const [show , setShow] = useState(false)
    const [productCategory , setProductCategory] = useState("All");
    const [products , setProduct] = useState([])

    useEffect(()=>{
        if(productCategory === "All"){
            setProduct(shoes)
        }else{
            const selectedCategory = shoes.filter(allShoe=>allShoe.Category === productCategory)
            setProduct(selectedCategory)
        }
    },[shoes , productCategory])

    return (
       <section className='my-14'>
<div className="hero bg-fixed lg:w-full h-[480px] lg:h-[400px] mx-auto rounded-lg" style={{backgroundImage: `url(${banner2})`}}>
  <div className="hero-overlay bg-opacity-80 rounded-lg"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
    <TypeAnimation
    sequence={[
      'A Shoe Haven for Every Footwear Enthusiast',
      500,
      '',
    ]}
    speed={40}
    style={{ fontSize: '2rem' , marginBottom: "1.5rem",fontWeight: "bolder"}}
    repeat={Infinity}
  />
      {/* <h1 className="mb-5 text-5xl font-bold">A Shoe Haven for Every Footwear Enthusiast</h1> */}
      <p className="mb-5 font-medium mt-4">Indulge your shoe obsession on our All Shoes page. With an array of styles, colors, and brands, we offer a tempting variety that caters to diverse preferences. Step into a world of fashion and find the perfect pair that expresses your unique style.</p>

    </div>
  </div>
</div>

<div className='my-10'
>
<div className='flex gap-6 items-center justify-center text-center'>
<button className={`tabs brand tab tab-bordered ${productCategory === "All" ? "activeTab" : ""}`} onClick={()=>setProductCategory("All")}>All</button>    
<button className={`tabs brand tab tab-bordered ${productCategory === "Men" ? "activeTab" : ""}`} onClick={()=>setProductCategory("Men")}>Men</button>    
<button className={`tabs brand tab tab-bordered ${productCategory === "Women" ? "activeTab" : ""}`} onClick={()=>setProductCategory("Women")}>Women</button>    
<button className={`tabs brand tab tab-bordered ${productCategory === "Kids" ? "activeTab" : ""}`} onClick={()=>setProductCategory("Kids")}>Kids</button> 
</div> 
</div>

<div className='my-10 flex items-center justify-center'>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
{
    products.slice(0 , show ? products.length : 10).map(product=> <SingleProduct
    key={product._id}
    shoe={product}
    ></SingleProduct>)
}
    </div>

</div>

<div className='my-10 w-fit mx-auto' onClick={()=>setShow(!show)}>
{
    !show && products.length > 10 ? 
    <button className='myBtn'><HiArrowDown className='h-5 w-5'/>Show All</button> :
    products.length > 10 ? <button className='btn-primary inline-flex px-3 py-1 rounded-md font-semibold gap-1 items-center border border-primary'><HiArrowUp className='h-5 w-5'/>Show Less</button> : ""
   
}
</div>
       </section>
    );
};

export default Shop;