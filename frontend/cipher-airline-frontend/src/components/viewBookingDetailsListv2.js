import BookingDetailsCheck from "./viewBookingDetailsv2";

const BookingDetailsListCheck = (props) => {

    const BookingDetailsComponents = props.bookingsInformation.map((bookingInfo, number,  index) => {
        return <BookingDetailsCheck bookingDetails={bookingInfo} number={number} key={index} />
    });


return (
    <>
        {BookingDetailsComponents[props.number]}
    </>
);
}

export default BookingDetailsListCheck