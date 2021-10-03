import {Card, DestinationCard} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';
import React from "react";
import ViewBookingsFormContainerCheck from '../containers/viewBookingsFormContainerv2.js';

function ViewBookingDetails() {

  return (
    <>
      <Card imageSrc={Hongkong} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"}/>
      <ViewBookingsFormContainerCheck /> 
    </>
  );
}

export default ViewBookingDetails;