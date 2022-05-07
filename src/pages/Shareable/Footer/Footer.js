import React from 'react';
import './Footer.css';
import footer from '../../../images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="white mt-5" id="footer">
        <img width={200} src={footer} alt="" />
            <div>            
                <i className="social-icon fa-brands fa-facebook"></i>
                <i className="social-icon fa-brands fa-twitter-square"></i>
                <i className="social-icon fa-brands fa-instagram-square"></i>
                <i className="social-icon fa-solid fa-envelope"></i>
                <p>© Copyright {year} Warehouse</p>
            </div>

        </footer>
    );
};

export default Footer;