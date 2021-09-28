import Destination from "./destination"

const DestinationList = (props) => {

    //const destinationComponents = props.oneDestination((destination, index) => {

    // const destinationComponents = props.destinations.map((destination, index) => {
    //     return <Destination destination={destination} key={index}/>
    // });

    const destinationComponents = props.destinations.map((destination, number, index) => {
        return <Destination destination={destination} number={number} key={index}/>
    });


    return (
        <>
            {destinationComponents[props.number]}

            {/* {<Destination destination={destination} key={index}/>} */}
            
        </>
    );
}

export default DestinationList