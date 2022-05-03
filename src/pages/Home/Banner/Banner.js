import React from 'react';
import iphone from '../../../images/iphone.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row container-fluid colored " id="title" >

            <div className="col-lg-6 mt-5">
                <h1 className="big-heading">THE AWESOME NEW APPLE iPhone 13 PRO MAX</h1>
                <p>Only $399 SIM Free, Or with 50GB for $23.99 a month</p>
                <button type="button" className="btn btn-dark btn-lg download-button mt-5"><i className="fa-brands fa-apple"></i>Check Info</button>
                <button type="button" className="btn btn-outline-light btn-lg  download-button mt-5"><i class="fa-solid fa-angles-right"></i>Features</button>
            </div>


            <div className="col-lg-6">
                <img height={400} className="title-image" src={iphone} alt="iphone-mockup" />
            </div>
        </div>
    );
};

export default Banner;