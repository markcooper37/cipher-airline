import {useState} from "react";

const NewBooking = (props) => {

    // const [flightId, setFlightId] = useState("");
    const [countryId, setCountryId] = useState(0);
    const [customersId, setCustomersId] = useState(0);
    const [withReturnTicket, setWithReturnTicket] = useState(false);
    const [returnTimeDeparture, setReturnTimeDeparture] = useState("");
    const [returnTimeArrival, setReturnTimeArrival] = useState("");
    const [numberOfPassenger, setNumberOfPassenger] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [customerFlightNumber, setCustomerFlightNumber] = useState("");


    // const onFlightIdChange = (evt => {
    //     setFlightId(evt.target.value);
    // })

    const onCountryIdChange = (evt => {
        setCountryId(evt.target.value);
    })

    const onCustomersIdChange = (evt => {
        setCustomersId(evt.target.value);
    })

    const onReturnTicketChange = (evt => {
        setWithReturnTicket(evt.target.value);
    })

    const onReturnTimeDepartureChange = (evt => {
        setReturnTimeDeparture(evt.target.value);
    })

    const onReturnTimeArrivalChange = (evt => {
        setReturnTimeArrival(evt.target.value);
    })

    const onNumberOfPassengerChange = (evt => {
        setNumberOfPassenger(evt.target.value);
    })

    const onTotalPriceChange = (evt => {
        setTotalPrice(evt.target.value);
    })

    const onCustomerFlightNumberChange = (evt => {
        setCustomerFlightNumber(evt.target.value);
    })



    const onFlightSubmission = ((evt) => {
        evt.preventDefault();
        const newFlight = {
            // flightId: title,
            countryId: countryId,
            customersId: customersId,
            withReturnTicket: withReturnTicket,
            returnTimeDeparture: returnTimeDeparture,
            returnTimeArrival: returnTimeArrival,
            numberOfPassenger: numberOfPassenger,
            totalPrice: totalPrice,
            customerFlightNumber: customerFlightNumber
        }
        props.handleFlightSubmission(newFlight);
        setCountryId(0);
        setCustomersId(0);
        setWithReturnTicket(false);
        setReturnTimeDeparture("");
        setReturnTimeArrival("");
        setNumberOfPassenger(0);
        setTotalPrice(0);
        setCustomerFlightNumber("");
    })

    return (
        <form onSubmit={onFlightSubmission}>
            <label for="countryId">Country Id:</label>
            <input type="number" id="countryId" name="countryId" value={countryId} onChange={onCountryIdChange}/>
            
            <label for="customersId">Customer Id:</label>
            <input type="number" id="customersId" name="customersId" value={customersId} onChange={onCustomersIdChange}/>
            
            <label for="withReturnTicket">Return Ticket:</label>
            <input type="checkbox" id="withReturnTicket" name="withReturnTicket" min="0" value={withReturnTicket} onChange={onReturnTicketChange}/>
            
            <label for="returnTimeDeparture">Return Time Departure:</label>
            <input type="Text" id="returnTimeDeparture" name="returnTimeDeparture" min="0" value={returnTimeDeparture} onChange={onReturnTimeDepartureChange}/>
           
            <label for="returnTimeArrival">Return Time Arrival:</label>
            <input type="Text" id="returnTimeArrival" name="returnTimeArrival" min="0" value={returnTimeArrival} onChange={onReturnTimeArrivalChange}/>
           
            <label for="numberOfPassenger">Number of Passengers:</label>
            <input type="number" id="numberOfPassenger" name="numberOfPassenger" min="0" value={numberOfPassenger} onChange={onNumberOfPassengerChange}/>
            
            <label for="totalPrice">Total Price:</label>
            <input type="number" id="totalPrice" name="totalPrice" min="0" value={totalPrice} onChange={onTotalPriceChange}/>
           
            <label for="customerFlightNumber">Customer Flight Number:</label>
            <input type="Text" id="customerFlightNumber" name="customerFlightNumber" min="0" value={customerFlightNumber} onChange={onCustomerFlightNumberChange}/>
            <input type="submit" value="Add new flight"/>
        </form>
    )

}

export default NewBooking;