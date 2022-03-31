import React from 'react';
import { Button, Ratio } from 'react-bootstrap';
import { Card } from '@blueprintjs/core';
import './homeCards.css';

export default function MapCard() {
  return (
    <Card elevation={3} className="homeCard">
      <h3>Location:</h3>
      <Ratio className="mapRatio">
        <iframe
          className="locationMap"
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5852.650493324429!2d-82.80523!3d42.823743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8825048e0c06e807%3A0xa288bb81369f3205!2s30971%20Armada%20Ridge%20Rd%2C%20Richmond%2C%20MI%2048062!5e0!3m2!1sen!2sus!4v1648668559753!5m2!1sen!2sus"
          width="600"
          height={250}
          loading="lazy"
        ></iframe>
      </Ratio>
      <div className="mapBtn">
        <Button
          variant="danger"
          className="mapBtn"
          href="https://goo.gl/maps/qPdQyyUGKvqEfMJ68"
        >
          Get Directions
        </Button>
      </div>
    </Card>
  );
}
