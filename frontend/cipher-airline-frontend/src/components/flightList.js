import Flight from "./flight"

const FlightList = (props) => {

    const flightComponents = props.flights.map((flight, number, index) => {
        return <Flight flight={flight} number={number}  key={index}/>
    });


    return (
        <>
            {flightComponents[props.number]}
            
        </>
    );
}

export default FlightList