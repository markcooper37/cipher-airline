import './viewDestinations.css';

import {Card, DestinationCard} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';
import DestinationContainer from '../containers/destinationContainer.js';
import React from "react";


function viewDestinations() {
  return (
    <>
      <Card imageSrc={Hongkong} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"} />
      <div className="viewDestinationsBody">
          <DestinationContainer selector={0} viewAll={true}/>
      </div>
    </>
  );
}

export default viewDestinations;
