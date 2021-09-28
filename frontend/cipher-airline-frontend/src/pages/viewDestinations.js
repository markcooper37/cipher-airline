//import './homepage.css';

import {Card} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import DestinationContainer from '../containers/destinationContainer.js';

function viewDestinations() {
  return (
    <>
      
      <Card imageSrc={Italy} />
     

      <DestinationContainer />
    </>
  );
}

export default viewDestinations;