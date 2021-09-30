import React, { Component } from "react"
import ViewBookingDetailsList from '../components/viewBookingDetailsList.js'

class viewBookingDetailsContainer extends Component {

    constructor (props){
        super(props);
        

        this.state = {
            bookingDetails: [],
            number: null,
            //customer: null
          }

    }

    
    componentDidMount() {
      this.getBookingDetailsData();
    }

    getBookingDetailsData() {
    
        fetch('http://localhost:8080/flights/userId?customerId=' + this.props.customerId)
            .then((response) => response.json())
            .then(data => this.setState({bookingDetails: data}))
            .then(this.setState({number:this.props.selector}))
            .catch(error => console.log(error))
            
    }
  
    
    render(){

        return (
            
            <>
                    {/* <div>{this.state.destinations.country_name}</div> */}
                <ViewBookingDetailsList bookingsInformation={this.state.bookingDetails} number={this.state.number}/>
                {/* <ViewBookingDetailsList bookingsInformation={this.state.bookingDetails}/> */}
                {/* <DestinationList oneDestination={this.state.oneDestination} /> */}
                {/* <div>{this.state.oneDestination}</div> */}
                
            </>
        )
    }

  }

  export default viewBookingDetailsContainer;