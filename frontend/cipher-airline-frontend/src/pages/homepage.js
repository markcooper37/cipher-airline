import './homepage.css';

import {Card, FindFlightsCard} from '../components/card.js';
import Hongkong from '../resources/Hongkong2edited.jpeg';

function Homepage() {

  return (
    <>
    <Card imageSrc={Hongkong} title1={"Discover Your Dream Destination"} title2={"With Cipher Airlines"}/>
    <FindFlightsCard title="Find Flights" text="Destination" buttonText="Search" />

    
    </>
  );
}

export default Homepage;
