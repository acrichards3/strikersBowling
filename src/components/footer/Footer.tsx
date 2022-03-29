import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footerRow">
          {/* COLUMN 1*/}
          <div className="col footerItems">
            <ul className="list-unstyled">
              <h4>Contact</h4>
              <li><a href="tel:586-785-5797">(586) 785-5797</a></li>
              <li><a href="mailto:info@strikers-entertainment.com">info@strikers-entertainment.com</a></li>
            </ul>
          </div>
          {/* COLUMN 2*/}
          <div className="col footerItems">
            <ul className="list-unstyled">
              <h4>Legal</h4>
              <li>Privacy-Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          {/* COLUMN 3*/}
          <div className="col footerItems">
            <ul className="list-unstyled">
              <h4>Stay Connected</h4>
              <li>Join Our Mailing List!</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
