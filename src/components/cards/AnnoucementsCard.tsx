import React from 'react';
import { Card } from '@blueprintjs/core';
import { Table, Button } from 'react-bootstrap';
import ANNOUCEMENTS from '../../changeableData/annoucements';
import './homeCards.css';

export default function AnnoucementsCard() {
  return (
    <Card elevation={3} className="homeCard">
      <h3>Annoucements:</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Recently Posted:</th>
          </tr>
        </thead>
        <tbody>
          {ANNOUCEMENTS.reverse().map((annoucement) => {
            return (
              <tr>
                <td className='annoucement'>{annoucement.text}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="openBowlingBtn">
        <Button variant="danger">
          View Events
        </Button>
      </div>
    </Card>
  );
}
