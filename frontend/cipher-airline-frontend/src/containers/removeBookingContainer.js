import React from "react";
import RemoveBooking from '../components/removeBooking';

class RemoveBookingContainer extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            valueCustomerId: 0,
            valueCustomerFlightNumber: ("")
        }

        this.removeBooking = this.removeBooking.bind(this);
    }


    removeBooking(booking){
        fetch("http://localhost:8080/flights/byCustomerFlightNumber?customerId=" + booking.customerId + "&customerFlightNumber=" + booking.customerFlightNumber,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
    }

    render(){

        return (
            <>
                <RemoveBooking handleFlightSubmission={this.removeBooking}/>
            </>
        )
    }

}

export default RemoveBookingContainer;