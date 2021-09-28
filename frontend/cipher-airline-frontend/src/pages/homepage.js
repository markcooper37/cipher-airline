import './homepage.css';
import Navbar from '../components/navbar.js';
import {Card, FindFlightsCard} from '../components/card.js';
//import FindFlightsCard from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';

function Homepage() {
  return (
    <>
    <div> HELLO </div>
    <Navbar/>
    <Card imageSrc={Italy} />
    <FindFlightsCard title="Find Flights" text="Destination" buttonText="Search" />
    
    </>
  );
}

export default Homepage;
