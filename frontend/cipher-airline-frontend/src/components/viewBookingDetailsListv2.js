import BookingDetailsCheck from "./viewBookingDetailsv2";

const BookingDetailsListCheck = (props) => {

    const BookingDetailsComponents = props.bookingsInformation.map((bookingInfo, index) => {
        return <BookingDetailsCheck bookingDetails={bookingInfo} key={index}/>
    });


return (
    <>
        {BookingDetailsComponents}
    </>
);
}

export default BookingDetailsListCheck