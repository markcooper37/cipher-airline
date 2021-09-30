// intermediate page between homepage and view booked flights
// customer must enter customer_id correctly to move onto next page

import React from "react";
import ViewBookingForm from '../components/viewBookingForm.js'

class viewBookingsFormContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        // <>
          
        // </>
        <form onSubmit={this.handleSubmit}>
          <label>
          Booking Reference id
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default viewBookingsFormContainer







// import {ViewBookedFlightsLogIn} from '../components/card.js';


// function viewBookingConfirmation() {
//     return(
//         <>
//             <ViewBookedFlightsLogIn title={"Please Enter Your Customer Id"} text={"Customer Id"} buttonText={"Log In"}/>

//         </>
//     )
// }

// export default viewBookingConfirmation;