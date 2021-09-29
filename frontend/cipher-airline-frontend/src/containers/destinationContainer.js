import React, { Component } from "react"
import DestinationList from '../components/destinationList'

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
            // .then(data => this.setState({oneDestination: data[this.props.selector]}))
            .catch(error => console.log(error))
            
    }

    // getDestinationIndex() {
    //     this.setState({number:1})
    // }

    // getDestination() {
    //   let destinations_list= this.state.destinations;
    //   let destination = destinations_list[this.props.value];
    //   return destination
    // }
  
    
    render(){

        return (
            
            <>
                    {/* <div>{this.state.destinations.country_name}</div> */}
                <DestinationList destinations={this.state.destinations} number={this.state.number} viewAll={this.state.viewAll}/>
                {/* <DestinationList oneDestination={this.state.oneDestination} /> */}
                {/* <div>{this.state.oneDestination}</div> */}
                
            </>
        )
    }
    
    
    // render() {
    //   const {destinations} = this.state;
    //   return (
    //     <div className="">
    //         <h2>destinations</h2>
    //         {destinations.map(destination =>
    //             <div key={destinations.id}>
    //                 {destinations.country_name}
    //             </div>
    //             )}
    //     </div>
    //   );
    // }
  }
  export default destinationContainer;