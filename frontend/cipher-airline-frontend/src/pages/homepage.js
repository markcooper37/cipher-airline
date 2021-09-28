import './homepage.css';

import {Card, FindFlightsCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';

function Homepage() {
  return (
    <>
    <Card imageSrc={Italy} />
    <FindFlightsCard title="Find Flights" text="Destination" buttonText="Search" />
    </>
  );
}

export default Homepage;
