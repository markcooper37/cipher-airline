import React from "react";
import BookingDetailsListCheck from "../components/viewBookingDetailsListv2";
import { ViewBookedFlights } from "../components/card";
class ViewBookingsFormContainerCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }

      componentDidMount () {
          this.getCountries();
      }

      getCountries () {
        fetch('http://localhost:8080/flights/userId?customerId=' + this.state.value)
        .then((response) => response.json())
        .then(data => this.setState({flights: data}))
        .catch(error => console.log(error))
      } 

      handleSubmit(event) {
          this.componentDidMount();
          event.preventDefault();
      }

      handleChange(event) {
          this.setState({value: event.target.value});
      }
    
      render() {
          return(
              <div>
                  <ViewBookedFlights title="Find Flights" text="Destination" buttonText="Search" handlesubmit={this.handleSubmit} value={this.state.value} handlechange={this.handleChange} />
                  {/* <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Customer Id' />
                    <input type='submit' value='Submit' />
                  </form> */}
                  <BookingDetailsListCheck bookingsInformation={this.state.flights}></BookingDetailsListCheck>
              </div>
          )
      }
}

export default ViewBookingsFormContainerCheck;