import './homepage.css';

import {Card, FindFlightsCard, Card2} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';
import TravelMap2 from '../resources/TravelMap2.jpeg';

function Homepage() {

  return (
    <>
    <Card imageSrc={Hongkong} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"}/>
    <FindFlightsCard title="Find Flights" text="Destination" buttonText="Search" />
    <Card2 imageSrc={TravelMap2} title1={"Discover your Dream Destination"} title2={"with Cipher Airlines"}/>

    
    </>
  );
}

export default Homepage;
