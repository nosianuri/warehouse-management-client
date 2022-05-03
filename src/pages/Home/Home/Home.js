import React from 'react';
import ItemDetails from '../../ItemDetails/ItemDetails';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ItemDetails></ItemDetails>
            <Testimonial></Testimonial>
            <Features></Features>
        </>
    );
};

export default Home;