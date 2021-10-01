import {Card, DestinationCard, FlightInfoCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import ViewBookingDetailsContainer from '../containers/viewBookingDetailsContainer.js';
import Japan from '../resources/JapanViewDestination.jpg';
import React from "react";

function ViewBookingDetails(props) {
  // localStorage.setItem("customerId", customerId)
  // localStorage.getItem("customerId")


  return (
    <>
      <Card imageSrc={Italy} />
      {/* some kind of heading */}
      <div className ="viewDestinationsHeader">
        <h1>Countries/terrorities</h1>
      </div>
      <div className="viewDestinationsBody">
        <div className="viewDestinationsBodyLeft">
          {/* <DestinationCard name={<ViewBookingDetailsContainer />}/> */}
          {/* {/* <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={0} viewAll = {false}/>}/> */}
          {/* <FlightInfoCard> 
            <ViewBookingDetailsContainer selector={0} customerId={props.customerId} /> 
          <FlightInfoCard />  */}
          <FlightInfoCard flightInfo={<ViewBookingDetailsContainer selector={0} customerId={3} />} /> 
        </div>
        
      
     
        
        
        {/* <DestinationCard name={<DestinationContainer/>} /> */}
      </div>
      

      
    </>

  );
}

export default ViewBookingDetails;