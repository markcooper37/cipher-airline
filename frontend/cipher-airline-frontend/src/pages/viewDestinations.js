import './viewDestinations.css';

import {Card, DestinationCard} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';
import JapanViewDestination from '../resources/JapanViewDestination.jpg';
import DestinationContainer from '../containers/destinationContainer.js';
import React from "react";
import { ContactUsCard } from '../components/card.js';
import { DestinationCard1 } from '../components/card.js';
import Japan1 from '../resources/japan1.jpeg';
import Mumbai from '../resources/mumbai.jpeg';
import China from '../resources/china.jpeg';
import Thai from '../resources/thai.jpeg';
import Nepal from '../resources/nepal.jpeg';


function viewDestinations() {
  return (
    <>
      <div class="viewDestinationHeading">
        <Card imageSrc={Hongkong} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"} />
      </div>
      <div className="viewDestinationsBody">
          {/* <div className="Destination-body-left"> */}

             <DestinationCard1 imageSrc={Japan1} 
                name='Japan' 
                text='Tokyo'/>
              <DestinationCard1 imageSrc={Mumbai} 
                name='India' 
                text='Mumbai'/>
              <DestinationCard1 imageSrc={China} 
                name='China' 
                text='Beijing'/>
              <DestinationCard1 imageSrc={Thai} 
                name='Thailand' 
                text='Bangkok'/>
              <DestinationCard1 imageSrc={Nepal} 
                name='Nepal' 
                text='Kathmandu'/>

            {/* <DestinationCard imageSrc={JapanViewDestination} name='Japan' text= 'hhhhhhhhhhhh'/>
            <DestinationCard imageSrc={JapanViewDestination}/>
            <DestinationCard imageSrc={JapanViewDestination}/>
            <DestinationCard imageSrc={JapanViewDestination}/>
            <DestinationCard imageSrc={JapanViewDestination}/> */}


          </div>
          {/* <div className="Destination-body-right"> */}
            <DestinationContainer selector={0} viewAll={true}/>
          {/* </div> */}
      {/* // </div> */}
    // </>
  );
}

export default viewDestinations;
