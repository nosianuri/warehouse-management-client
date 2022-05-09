import React, { useState } from 'react';
import image from '../../../images/image.png';
import nosia from '../../../images/nosia.png';
import bizinsider from '../../../images/bizinsider.png';
import mashable from '../../../images/mashable.png';
import techcrunch from '../../../images/TechCrunch.png';
import tnw from '../../../images/tnw.png';
import './Testimonial.css';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="colored mt-5" id="testimonials">
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='mt-5'>
      <h2 className="testimonial-text">The Phone Warehouse Limited was a mobile phone retailer based in Dhaka,  Bangladesh.</h2>
        <img
          className="testimonial-image" src={image} alt="logo-profile"
        />
        <em>IP Phone, BD</em>
        
      </Carousel.Item>
      <Carousel.Item className='mt-5'>
      <h2 className="testimonial-text"> In August 2022 the company became a subsidiary of Currys plc, which was formed by the founder Nosia</h2>
        <img
         className="testimonial-image" src={nosia} alt="lady-profile"
        />
        <em>Nosia, Dhaka</em>
        
      </Carousel.Item>
      
    </Carousel>
  

            <div class="colored" id="press">
                <img class="press-logo" src={techcrunch} alt="tc-logo" />
                <img class="press-logo" src={tnw} alt="tnw-logo" />
                <img class="press-logo" src={bizinsider} alt="biz-insider-logo" />
                <img class="press-logo" src={mashable} alt="mashable-logo" />
            </div>
        </div>
    );
};

export default Testimonial;