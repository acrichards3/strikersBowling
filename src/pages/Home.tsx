import React from 'react';
import HomeCarousel from '../components/carousels/HomeCarousel';
import HoursCard from '../components/cards/HoursCard';
import MapCard from '../components/cards/MapCard';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <HomeCarousel />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-4">
          <HoursCard />
        </div>
        <div className="col-lg-4">
          <MapCard />
        </div>
      </div>
    </div>
  );
}
