import React from 'react';
import './Testimonial.css';
import image from '../../../images/image.png';
import nosia from '../../../images/nosia.png';
import bizinsider from '../../../images/bizinsider.png';
import mashable from '../../../images/mashable.png';
import techcrunch from '../../../images/TechCrunch.png';
import tnw from '../../../images/tnw.png';

const Testimonial = () => {
    return (
        <div>
            <div className="colored" id="testimonials">
                <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active container-fluid">
                            <h2 className="testimonial-text">The Phone Warehouse Limited was a mobile phone retailer based in Dhaka,  Bangladesh.</h2>
                            <img className="testimonial-image" src={image} alt="logo-profile" />
                            <em>IP Phone, BD</em>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="testimonial-text"> In August 2022 the company became a subsidiary of Currys plc, which was formed by the founder Nosia</h2>
                            <img className="testimonial-image" src={nosia} alt="lady-profile" />
                            <em>Nosia, Dhaka</em>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
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