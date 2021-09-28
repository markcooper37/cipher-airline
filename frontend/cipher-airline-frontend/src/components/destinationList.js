import Destination from "./destination"

const DestinationList = (props) => {

    const destinationComponents = props.destinations.map((destination, index) => {
        return <Destination destination={destination} key={index}/>
    });

    return (
        <>
            {destinationComponents}
            
        </>
    )
}

export default DestinationList