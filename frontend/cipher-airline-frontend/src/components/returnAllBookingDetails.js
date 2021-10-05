import React from "react";
import { BookingDetailsCard } from "./card";
import Japan from '../resources/JapanViewDestination.jpg';
import BookingDetailsList from "./viewBookingDetailsListv2.js";

function ReturnAllBookingDetails(props) {

    const bookings = props.bookings;
    const listBookings = bookings.map((booking) =>
    <BookingDetailsCard information={<BookingDetailsList bookingsInformation={props.bookings} number={bookings.indexOf(booking)} viewAll={props.viewAll}/>}/>
    );
    return(
        <div>
            {listBookings}
        </div>
    )

}

export default ReturnAllBookingDetails