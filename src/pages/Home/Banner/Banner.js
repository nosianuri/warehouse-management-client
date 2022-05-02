import React from 'react';
import iphone from '../../../images/iphone.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row container-fluid colored" id="title" collapseOnSelect expand="lg" >

            <div className="col-lg-6 mt-5">
                <h1 className="big-heading">Meet new and interesting phones nearby.</h1>
                <button type="button" className="btn btn-dark btn-lg download-button mt-5"><i className="fa-brands fa-apple"></i>Buy Now</button>
                <button type="button" className="btn btn-outline-light btn-lg  download-button mt-5"><i className="fa-brands fa-google-play"></i>Features</button>
            </div>


            <div className="col-lg-6">
                <img height={400} className="title-image" src={iphone} alt="iphone-mockup" />
            </div>
        </div>
    );
};

export default Banner;