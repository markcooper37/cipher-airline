import { BookedFlights } from "./card";

const BookingDetailsCheck = (props) => {

    return (
        <>
        {/* <BookedFlights>
            line1={props.bookingDetails.value0}
            line2 = {props.bookingDetails.value1}
            line 3 = {props.bookingDetails.value2}
            line 4 ={props.bookingDetails.value3}
            line 5 ={props.bookingDetails.value4}
            line 6 ={props.bookingDetails.value5}
            line 7 ={props.bookingDetails.value6}
            line 8 ={props.bookingDetails.value7}
            line 9 ={props.bookingDetails.value8}
        </BookedFlights> */}

            <p>Flight ID: {props.bookingDetails.value0}</p>
            <p>{props.bookingDetails.value1}</p>
            <p>{props.bookingDetails.value2}</p>
            <p>{props.bookingDetails.value3}</p>
            <p>{props.bookingDetails.value4}</p>
            <p>{props.bookingDetails.value5}</p>
            <p>{props.bookingDetails.value6}</p>
            <p>{props.bookingDetails.value7}</p>
            <p>{props.bookingDetails.value8}</p>
        
        </>
    )
    
    }
    
    
    
    export default BookingDetailsCheck;