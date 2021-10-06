import React from "react";
import EditFlightBooking from '../components/editFlightBooking';

class EditFlightBookingContainer extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            valueFlightId: 0,
            valueRemoveReturnTicket: false
        }

        this.editFlightBooking = this.editFlightBooking.bind(this);
    }


    editFlightBooking(editBooking){
        // alert(editBooking.removeReturnTicket);
        fetch("http://localhost:8080/flights/?flightId="+ editBooking.flightId +"&removeReturnTicket=" + editBooking.removeReturnTicket,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editBooking)
        })
    }

    render(){

        return (
            <>
                <EditFlightBooking handleFlightSubmission={this.editFlightBooking}/>
            </>
        )
    }

}

export default EditFlightBookingContainer;