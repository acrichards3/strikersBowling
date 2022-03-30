import React from 'react';
import { Button } from 'react-bootstrap';
import HOURS from '../../changeableData/hours';
import { Card } from '@blueprintjs/core';
import './homeCards.css';

export default function HoursCard() {
  return (
    <Card elevation={3} className='homeCard'>
      <h3>Open Hours:</h3>
      {HOURS.map((day) => {
        return (
          <h6 className="hour">
            {day.day}:{' '}
            <div className="weeklyHours">
              {day.open} - {day.close}
            </div>
          </h6>
        );
      })}
      <div className="openBowlingBtn">
        <Button variant="danger">Open Bowling Schedule</Button>
      </div>
    </Card>
  );
}
