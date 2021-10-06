import {useState} from "react";
import  "./editFlightBooking.css";

const EditFlightBooking = (props) => {

    // const [flightId, setFlightId] = useState("");
    const [flightId, setFlightId] = useState(0);
    const [removeReturnTicket, setRemoveReturnTicket] = useState(true);


    const onFlightIdChange = (evt => {
        setFlightId(evt.target.value);
    })

    const onRemoveReturnTicketChange = (evt => {
        setRemoveReturnTicket(evt.target.value);
    })


    const onFlightSubmission = ((evt) => {
        evt.preventDefault();
        const bookingInfo = {
            flightId: flightId,
            removeReturnTicket: removeReturnTicket
        }
        props.handleFlightSubmission(bookingInfo);
        setFlightId(0);
        setRemoveReturnTicket(true);
    })

    return (
        <>
        
            <div class="form">
                <h1>Update Booking</h1>
                <form onSubmit={onFlightSubmission}>
                    <div class="first-input">
                        <label for="flightId">Flight Id:</label>
                        <input type="number" id="flightId" name="flightId" value={flightId} onChange={onFlightIdChange}/>
                    </div>
                    <div class="second-input">
                        <label for="removeReturnTicket">Remove Return Ticket:</label>
                        <input type="checkbox" id="removeReturnTicket" name="removeReturnTicket" value={removeReturnTicket} onChange={onRemoveReturnTicketChange}/>
                    </div>
                    <div class="button">
                        <input type="submit" value="Edit flight"/>
                    </div>
                </form>
            </div>
        </>
    )

}

export default EditFlightBooking;