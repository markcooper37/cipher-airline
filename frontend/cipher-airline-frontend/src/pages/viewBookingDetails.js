import {Card} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';
import React from "react";
import ViewBookingsFormContainerCheck from '../containers/viewBookingsFormContainerv2.js';
import RemoveBookingContainer from '../containers/removeBookingContainer.js';
import './viewBookingDetails.css';
import EditFlightBookingContainer from '../containers/editBookingFlightContainer.js';

function ViewBookingDetails() {

  return (
    <>
      <Card imageSrc={Hongkong} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"}/>
      <div class = "body">
        <div>
        <div class = "booking-form">
          <ViewBookingsFormContainerCheck /> 
        </div>
        </div>
        <div>
        <div class = "remove-booking">
          <RemoveBookingContainer />
        </div>
        <div class = "remove-returnTicket">
          <EditFlightBookingContainer />
        </div>
        </div>
      </div>
    </>
  );
}

export default ViewBookingDetails;