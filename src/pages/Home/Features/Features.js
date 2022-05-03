import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div>
            <div className="white" id="features">

                <div  className='container'>
                    <div className="row">
                        <div className="feature-box col-lg-4">
                            <i className="fa-solid fa-heart fa-4x icon"></i>
                            <h3 className="feature-title">Easy to use.</h3>
                            <p>We'll help you switch to a better deal.</p>
                        </div>
                        <div className="feature-box col-lg-4">
                            <i className="fa-solid fa-bullseye fa-4x icon"></i>
                            <h3 className="feature-title">Elite Clientele</h3>
                            <p>We upgrade everyone, even if you haven't bought from us before.</p>

                        </div>
                        <div className="feature-box col-lg-4">
                            <i className="fa-solid fa-circle-chevron-down fa-4x icon"></i>
                            <h3 className="feature-title">Guaranteed to work.</h3>
                            <p>We compare the UK's widest range of networks to find you the best deal.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colored" id="cta">
                <div className="container-fluid">
                    <h3 className="big-heading">Why buy from Phone Warehouse? <i className="fa-solid fa-circle-info"></i></h3>
                </div>
            </div>
        </div>
    );
};

export default Features;