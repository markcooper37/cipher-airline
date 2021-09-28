import React from "react"
import DestinationList from '../components/destinationList'

class destinationContainer extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            destinations: []
          }

    }
    
    componentDidMount() {
      this.getDestinationData();
    }

    getDestinationData() {
        fetch('http://localhost:8080/api/country/exploreflights')
            .then((response) => response.json())
            .then(data => this.setState({destinations: data}))
            .catch(error => console.log(error))
    }

    // getDestination() {
    //   let destinations_list= this.state.destinations;
    //   let destination = destinations_list[this.props.value];
    //   return destination
    // }
  
    
    render(){

        return (
            <>
                <DestinationList destinations={this.state.destinations}/>
                {/* <DestinationList destinations={this.getDestination()}></DestinationList>; */}
                {/* {this.getDestination()} */}
                
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