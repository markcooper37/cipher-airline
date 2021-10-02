import React from "react";
import { DestinationCard } from "./card";
import Japan from '../resources/JapanViewDestination.jpg';
import DestinationList from "./destinationList";

function ReturnAllDestinations(props) {

    const destinations = props.destinations;
    const listDestinations = destinations.map((destination) =>
    <DestinationCard imageSrc={Japan} name={<DestinationList destinations={props.destinations} number={destinations.indexOf(destination)} viewAll={props.viewAll}/>}/>
    );
    return(
        <div>
            {listDestinations}
        </div>
    )

}

export default ReturnAllDestinations