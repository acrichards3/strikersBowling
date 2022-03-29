import React from 'react';
import { Button } from 'react-bootstrap';
import './food.css';

export default function Food() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 menus">
          <img
            src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/250220407_10158421784963085_2207287927946354720_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=c4c01c&_nc_ohc=3b3jvCk_cfgAX_fRvSd&tn=PIBaFpUJkNVq16MC&_nc_ht=scontent-ort2-1.xx&oh=00_AT_GZ_fGi2q6W-b75AyHy5ciJLAroN_S7Tg6Zdz9HZxWyQ&oe=6247D896"
            alt="menu1"
            height={800}
          />
        </div>
        <div className="col-lg-6 menus">
          <img
            src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/248919881_10158421785358085_2937176137053331984_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=c4c01c&_nc_ohc=g2tjopdqpr8AX-26E-f&_nc_ht=scontent-ort2-1.xx&oh=00_AT8w5eENFFg14ExCYrseNdkMNEVw3R4xXI8lhZwrP2JHUw&oe=6248EF7E"
            alt="menu1"
            height={800}
          />
        </div>
        <div className="row">
          <div className="col-lg printBtn">
            <Button variant="danger">
              Click Here for a Printable Version of Our Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
