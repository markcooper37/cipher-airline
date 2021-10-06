import React from "react";
import { DestinationCardInfo } from "./card";
import Japan from '../resources/JapanViewDestination.jpg';
import DestinationList from "./destinationList";

function ReturnAllDestinations(props) {

    const destinations = props.destinations;
    const listDestinations = destinations.map((destination) =>
    <DestinationCardInfo name={<DestinationList destinations={props.destinations} number={destinations.indexOf(destination)} viewAll={props.viewAll}/>}/>
    );
    return(
        <div>
            {listDestinations}
        </div>
    )

}

export default ReturnAllDestinations