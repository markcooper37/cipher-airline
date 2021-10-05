import React, { Component } from "react"
import ReturnAllDestinations from "../components/returnAllDestinations";

class destinationContainer extends Component {

    constructor (props){
        super(props);

        this.state = {
            destinations: [],
            number: null,
            viewAll: false
          }

    }

    
    componentDidMount() {
      this.getDestinationData();
    }

    getDestinationData() {
        fetch('http://localhost:8080/api/country/exploreflights')
            .then((response) => response.json())
            .then(data => this.setState({destinations: data}))
            .then(this.setState({number:this.props.selector}))
            .then(this.setState({viewAll:this.props.viewAll}))
            .catch(error => console.log(error))
            
    }

    
    render(){

        return (
            <>
                { <ReturnAllDestinations destinations={this.state.destinations} viewAll={this.state.viewAll}/>}
            </>
        )
    }
  }

  export default destinationContainer;