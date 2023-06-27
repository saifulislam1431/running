import React from 'react';
import Hero from '../Hero/Hero';
import OurShop from '../OurShop/OurShop';
import TopBrand from '../TopBrand/TopBrand';

// https://i.ibb.co/7zScxLT/banner2.png 
// https://i.ibb.co/PWmFRf3/banner4.png
// https://i.ibb.co/qyv1vks/banner5-1.jpg
const Home = () => {
    return (
        <section className='my-10'>
<Hero />
<OurShop />
<TopBrand />
        </section>
    );
};

export default Home;