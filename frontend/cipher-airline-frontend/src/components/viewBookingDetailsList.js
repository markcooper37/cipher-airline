import BookingDetails from "./viewBookingDetails";

const BookingDetailsList = (props) => {

    // const BookingDetailsComponents = props.bookingsInformation.map((bookingInfo, number, index) => {
    //     return <BookingDetails bookingDetails={bookingInfo} number={number} key={index}/>
    // });

    const BookingDetailsComponents = props.bookingsInformation.map((bookingInfo, index) => {
        return <BookingDetails bookingDetails={bookingInfo} key={index}/>
    });




return (
    <>
        {BookingDetailsComponents[props.number]}
        {/* {BookingDetailsComponents} */}
    </>
);
}

export default BookingDetailsList