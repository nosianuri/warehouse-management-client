import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HomeInventory from '../HomeInventory/HomeInventory';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
            <Testimonial></Testimonial>
            <Features></Features>
        </>
    );
};

export default Home;