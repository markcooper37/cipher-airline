import React, { Component } from "react"

class flightContainer extends Component {

    constructor (props){
        super(props);

        this.state = {
            flights: [],
            number: null,
            loaded: false
          }

    }

    componentDidMount(){
        this.getFlightData();
    }

    getFlightData() {
        fetch('http://localhost:8080/api/flights/flightList')
            .then((response) => response.json())
            .then(data => this.setState({flights: data}))
            .then(this.setState({number:this.props.selector}))
            .then(this.setState({loaded:true}))
            .catch(error => console.log(error))
            
    }

    render(){

        return (
            <>
                <h1>Flights</h1>
                <FlightList flights={this.state.flights} number={this.state.number}/>
            </>
        )
    }
}

export default flightContainer;