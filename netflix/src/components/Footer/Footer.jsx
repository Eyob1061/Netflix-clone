import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div>
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <div className="footer-icon">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
          <div className="footer-data">
              <div>
              <ul>
                  <il> Audio description</il>
                  <il> Investor relation</il>
                  <il> Legal information</il>
                </ul>
              </div>
              <div>
              <ul>
                  <li> Help center</li>
                  <li> Job</li>
                  <li>Cookie performances</li>
                </ul>
              </div>
              <div>
              <ul>
                  <li> Privacy policy</li>
                  <li> Cookies</li>
                  <li> Accessibility</li>
                </ul>
              </div>
              <div>
              <ul>
                  <li> Gift card</li>
                  <li> Terms of User</li>
                  <li>Contact Us</li>
                </ul>
              </div>

          </div>
            <div className="service-code">
                <p>Service code</p>
            </div>
           <div className="copy-write">
             &copy; 1997-204 Netflix,Inc.
           </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Footer;