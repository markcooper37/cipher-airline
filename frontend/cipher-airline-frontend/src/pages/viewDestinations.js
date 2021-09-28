//import './homepage.css';

import {Card} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';

function viewDestinations() {
  return (
    <div> 
        <Card imageSrc={Italy} />
    </div>
  );
}

export default viewDestinations;