import './viewDestinations.css';

import {Card, DestinationCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import DestinationContainer from '../containers/destinationContainer.js';
import Japan from '../resources/JapanViewDestination.jpg';
import React from "react";
import ReturnAllDestinations from '../components/returnAllDestinations';
import DestinationList from '../components/destinationList';

function viewDestinations() {
  return (
    <>
      <Card imageSrc={Italy} />
      {/* some kind of heading */}
      <div className ="viewDestinationsHeader">
        <h1>Countries/terrorities</h1>
      </div>
      <div className="viewDestinationsBody">

          <DestinationContainer selector={0} viewAll={true}/>
        
        
        
        {/*} cards for each destination containing an image and the country name */}
     
        
        
        {/* <DestinationCard name={<DestinationContainer/>} /> */}
      </div>
      

      
    </>

  );
}

export default viewDestinations;

// class viewDestinations extends React.Component {
//   renderDestination(i) {
//     return <DestinationContainer value={i} />
//   }
//   render() {
//     return (
//       <>
//         <Card imageSrc={Italy} />
//         {/* some kind of heading */}
//         {/* cards for each destination containing an image and the country name */}
       
//         {/* <Card name={} */}
  
//         {this.renderDestination(0)}
//       </>
//     );

//   }
// }

// export default viewDestinations;