import React from 'react';
import './Testimonial.css';
import images from '../../../images/images.png';
import nosia from '../../../images/nosia.png';

const Testimonial = () => {
    return (
        <div class="colored" id="testimonials">
    <div id="testimonial-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active container-fluid">
      <h2 class="testimonial-text"></h2>
      <img class="testimonial-image" src={images} alt="logo-profile" />
      <em>IP Phone, BD</em>
    </div>
    <div class="carousel-item container-fluid">
      <h2 class="testimonial-text"></h2>
      <img class="testimonial-image" src={nosia} alt="lady-profile" />
      <em>Nosia, Dhaka</em>
    </div>

  </div>
  <a class="carousel-control-prev" href="#testimonial-carousel" role="button"data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
</a>
    <a class="carousel-control-next" href="#testimonial-carousel" role="button"data-slide="next">
    <span class="carousel-control-next-icon"></span>
</a>
</div>
</div>
    );
};

export default Testimonial;