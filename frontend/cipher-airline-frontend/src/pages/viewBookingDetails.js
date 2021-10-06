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
    <div class="full-container">
        <Card imageSrc={Hongkong} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"}/>
        <div class="booking-form-container">
          <h1> Your Flight Bookings</h1>
          <div class = "booking-form">
            <ViewBookingsFormContainerCheck /> 
          </div>
        </div>
        
        <div class = "body">
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