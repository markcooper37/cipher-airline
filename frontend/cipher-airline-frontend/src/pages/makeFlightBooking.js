import '../containers/bookingFlightContainer.js';
import BookingFlightContainer from '../containers/bookingFlightContainer.js';
import './makeFlightBooking.css';

function MakeFlightBooking() {
    return (
        <>
            {/* <div class="booking-flight-heading">
                <h1></h1>
            </div> */}
            <div class="booking-flight-body">
                <BookingFlightContainer />
            </div>
        </>
            
        )
    
}

export default MakeFlightBooking;