import './viewDestinations.css';

import {Card, DestinationCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import DestinationContainer from '../containers/destinationContainer.js';
import Japan from '../resources/JapanViewDestination.jpg';
import React from "react";

function viewDestinations() {
  return (
    <>
      <Card imageSrc={Italy} />
      {/* some kind of heading */}
      <div className ="viewDestinationsHeader">
        <h1>Countries/terrorities</h1>
      </div>
      <div className="viewDestinationsBody">
        <div className="viewDestinationsBodyLeft">
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={0} />}/>
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={0} />}/>
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={0} />}/>
        </div>
        <div className="viewDestinationsBodyRight">
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={1} />}/>
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={1} />}/>
          <DestinationCard imageSrc={Japan} name={<DestinationContainer selector={1} />}/>
        </div>
        {/* cards for each destination containing an image and the country name */}
     
        
        
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