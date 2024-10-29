import React from 'react';
import '../Styles/Footer.css'; // Import the CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    return (
        <footer className="footer">
            <hr className='hr'/>
            <div className="footer-signup">
                <p className="signup-text">Sign-up to receive news from Smallbone</p>
                <form>
                    <input type="text" placeholder="First Name *" required />
                    <input type="text" placeholder="Surname *" required />
                    <input type="email" placeholder="Email Address *" required />
                    <button type="submit" className="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Sign-up</span>
      </button>
                </form>
            </div>
            <hr />
            <div className="footer-trustpilot">
            <p>We are rated <span className="excellent">Excellent</span> on Trustpilot 
   
</p>

            </div>
            <div className="footer-social-media">
                <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://pinterest.com"><FontAwesomeIcon icon={faPinterest} /></a>
                <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <hr/>
            <br />
            <div className="footer-links">
                © 2024 Smallbone
                <a href="/shop">Smallbone Shop</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/design">Design & Copyright</a>
                <a href="/disability">Disability Discrimination Policy</a>
                <a href="/credits">Credits</a>
                <a href="/contact">Contact Us</a>
            </div>
        </footer>
    );
}

export default Footer;
