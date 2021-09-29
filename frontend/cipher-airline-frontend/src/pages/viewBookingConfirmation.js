// intermediate page between homepage and view booked flights
// customer must enter customer_id correctly to move onto next page

import {ViewBookedFlightsLogIn} from '../components/card.js';


function viewBookingConfirmation() {
    return(
        <>
            <ViewBookedFlightsLogIn title={"Please Enter Your Customer Id"} text={"Customer Id"} buttonText={"Log In"}/>

        </>
    )
}

export default viewBookingConfirmation;