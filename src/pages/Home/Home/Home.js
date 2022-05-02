import React from 'react';
import ItemDetails from '../../ItemDetails/ItemDetails';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ItemDetails></ItemDetails>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;