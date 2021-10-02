import {Card, DestinationCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import React from "react";
import ViewBookingsFormContainerCheck from '../containers/viewBookingsFormContainerv2.js';

function ViewBookingDetails() {

  return (
    <>
      <Card imageSrc={Italy} />
      <div className ="viewDestinationsHeader">
        <h1>View/Manage Bookings</h1>
      </div>
      <div className="viewDestinationsBody">
        <div className="viewDestinationsBodyLeft">
          <ViewBookingsFormContainerCheck /> 
        </div>
      </div>
    </>
  );
}

export default ViewBookingDetails;