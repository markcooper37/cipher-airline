import {useState} from "react";

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
        <form onSubmit={onFlightSubmission}>
            <label for="flightId">Flight Id:</label>
            <input type="number" id="flightId" name="flightId" value={flightId} onChange={onFlightIdChange}/>
            
            <label for="removeReturnTicket">Remove Return Ticket:</label>
            <input type="checkbox" id="removeReturnTicket" name="removeReturnTicket" value={removeReturnTicket} onChange={onRemoveReturnTicketChange}/>
            
            <input type="submit" value="Edit flight"/>
        </form>
    )

}

export default EditFlightBooking;