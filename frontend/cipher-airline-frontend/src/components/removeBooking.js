import {useState} from "react";
import './removeBooking.css';

const RemoveBooking = (props) => {

    // const [flightId, setFlightId] = useState("");
    const [customerId, setCustomerId] = useState(0);
    const [customerFlightNumber, setCustomerFlightNumber] = useState("");


    // const onFlightIdChange = (evt => {
    //     setFlightId(evt.target.value);
    // })

    const onCustomerIdChange = (evt => {
        setCustomerId(evt.target.value);
    })

    const onCustomerFlightNumberChange = (evt => {
        setCustomerFlightNumber(evt.target.value);
    })



    const onFlightSubmission = ((evt) => {
        evt.preventDefault();
        const newFlight = {
            customerId: customerId,
            customerFlightNumber: customerFlightNumber
        }
        props.handleFlightSubmission(newFlight);
        setCustomerId(0);
        setCustomerFlightNumber("");
    })

    return (
        <div class="cancel-booking">
            <h1>Cancel Booking</h1>
            <form onSubmit={onFlightSubmission}>
                <div class= "first-input">
                    <label for="customerId">Customer Id:</label>
                    <input type="number" id="customerId" name="customerId" value={customerId} onChange={onCustomerIdChange}/>
                </div>
                <br></br>
                <div class= "second-input">
                <label for="customerFlightNumber">Customer Flight Number:</label>
                <input type="text" id="customerFlightNumber" name="customerFlightNumber" value={customerFlightNumber} onChange={onCustomerFlightNumberChange}/>
                </div>
                <div class="button">
                    <input type="submit" value="Cancel flight"/>
                </div>
            </form>
        </div>
    )

}

export default RemoveBooking;