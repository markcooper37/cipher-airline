import '../containers/bookingFlightContainer.js';
import BookingFlightContainer from '../containers/bookingFlightContainer.js';
import './makeFlightBooking.css';

function MakeFlightBooking() {
    return (
        <>
            <div class="container">
                <div class="booking-flight-heading">
                    <h1>Find Your Dream Destinaion Today</h1>
                    <h2>Book Now</h2>
                </div>
                <div class="booking-flight-body">
                    <BookingFlightContainer />
                </div>
            </div>
        </>
            
        )
    
}

export default MakeFlightBooking;