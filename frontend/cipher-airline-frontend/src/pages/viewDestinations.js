import './viewDestinations.css';

import {Card, DestinationCard} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';
import JapanViewDestination from '../resources/JapanViewDestination.jpg';
import DestinationContainer from '../containers/destinationContainer.js';
import React from "react";


function viewDestinations() {
  return (
    <>
      <div class="viewDestinationHeading">
        <Card imageSrc={Hongkong} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"} />
      </div>
      <div className="viewDestinationsBody">
          <div className="Destination-body-left">
            <DestinationCard imageSrc={JapanViewDestination}/>
            <DestinationCard imageSrc={JapanViewDestination}/>
          </div>
          <div className="Destination-body-right">
            <DestinationContainer selector={0} viewAll={true}/>
          </div>
      </div>
    </>
  );
}

export default viewDestinations;
