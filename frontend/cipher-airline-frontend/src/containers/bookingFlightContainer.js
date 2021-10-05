import React from "react";
import BookingFlight from '../components/bookingFlight';

class BookingFlightContainer extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            bookings: []
        }

        this.addNewBooking = this.addNewBooking.bind(this);
    }


    addNewBooking(newBooking){
        fetch("http://localhost:8080/flights/make-booking",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        const updatedBookings = [...this.state.bookings, newBooking];
        this.setState({ bookings: updatedBookings });
    }

    render(){

        return (
            <>
                <BookingFlight handleFlightSubmission={this.addNewBooking}/>
            </>
        )
    }

}

export default BookingFlightContainer;