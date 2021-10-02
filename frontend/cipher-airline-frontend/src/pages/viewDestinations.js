import './viewDestinations.css';

import {Card, DestinationCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import DestinationContainer from '../containers/destinationContainer.js';
import React from "react";


function viewDestinations() {
  return (
    <>
      <Card imageSrc={Italy} />
      <div className ="viewDestinationsHeader">
        <h1>Countries/terrorities</h1>
      </div>
      <div className="viewDestinationsBody">
          <DestinationContainer selector={0} viewAll={true}/>
      </div>
      

      
    </>

  );
}

export default viewDestinations;
