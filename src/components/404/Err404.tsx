import React from 'react';
import { Button } from 'react-bootstrap';
import './err404.css';

export default function Err404() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="Errtitle">404: Page Not Found</h1>
      </div>
      <div className="row">
        <p className="Errtext">
          Sorry, but the page you're looking for doesn't exist!
        </p>
      </div>
      <div className="row">
        <div className="homeBtn">
          <Button variant="danger" href="/" size="lg">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
