import './viewDestinations.css';

import {Card, DestinationCard, DestinationName} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';
import JapanViewDestination from '../resources/JapanViewDestination.jpg';
import DestinationContainer from '../containers/destinationContainer.js';
import HongKongDestination from '../resources/hongkong_destination.jpg'
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
            <DestinationCard imageSrc={HongKongDestination}/>
          </div>
          <div className="Destination-body-right">
           <DestinationName name={<DestinationContainer selector={0} viewAll={true}/>}/>
          </div>
      </div>
    </>
  );
}

export default viewDestinations;
