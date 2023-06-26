import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import AllProduct from './SingleProduct/AllProduct';

const OurShop = () => {
    return (
        <section className='my-14'>
<SectionTitle
title="Walk in Confidence, Stand Out in Style"
description="Make a bold statement with our carefully curated selection of shoes that exude confidence and individuality. Discover unique designs and exceptional craftsmanship that will make you stand out from the crowd."
></SectionTitle>
<AllProduct />
        </section>
    );
};

export default OurShop;