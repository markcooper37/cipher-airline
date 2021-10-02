import {Card, DestinationCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import ViewBookingDetailsContainer from '../containers/viewBookingDetailsContainer.js';
import Japan from '../resources/JapanViewDestination.jpg';
import React, {useState} from "react";
import ViewBookingsFormContainerCheck from '../containers/viewBookingsFormContainerv2.js';

function ViewBookingDetails() {

  return (
    <>
      <Card imageSrc={Italy} />
      {/* some kind of heading */}
      <div className ="viewDestinationsHeader">
        <h1>View/Manage Bookings</h1>
      </div>
      <div className="viewDestinationsBody">
        <div className="viewDestinationsBodyLeft">
          {/* <DestinationCard name={<ViewBookingDetailsContainer />}/> */}
          {/* {/* <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={0} viewAll = {false}/>}/> */}
          
          <ViewBookingsFormContainerCheck /> 
        </div>
        {/* <div className="viewDestinationsBodyRight">
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={1} viewAll = {true}/>}/>
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={1} viewAll = {false}/>}/>
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={1} viewAll = {false}/>}/>
        </div> */}
      
     
        
        
        {/* <DestinationCard name={<DestinationContainer/>} /> */}
      </div>
      

      
    </>

  );
}

export default ViewBookingDetails;