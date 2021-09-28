import './card.css'
import React from 'react'


function Card(props) {
    return (
        <div className="card" styles="width: 18rem;">
            <img src={props.imageSrc} className="card-img-top" alt="Mountains in Italy, called the Dolamites" />
            {/* <div className ="card-body">
                <h5 className ="card-title">{props.title}</h5>
                <p className ="card-text">{props.text}</p>
                <a href="#" className ="btn btn-primary">{props.buttonText}</a>
            </div> */}
        </div>
    )
}

function FindFlightsCard(props) {
    return (
        <div className="findFlightsCard" styles="width: 18rem;">
            {/* <img src={props.imageSrc} className="card-img-top" alt="Mountains in Italy, called the Dolomites" /> */}
            <h5 className ="findFlightsCar-title">{props.title}</h5>
            <div className ="findFlightsCard-body">
                <p className ="findFlightsCar-text">{props.text}</p>
                <a href="#" className ="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    )
}

function DestinationCard(props) {
    return (
        <>
        <div className="destinationCard" styles="width: 5rem;">
            {/* <img src={props.imageSrc} className="card-img-top" alt="Mountains in Italy, called the Dolamites" /> */}
            <h1 className="destinationName">{props.name}</h1>
        </div>
            

        </>
    )
}

export{ Card,
        FindFlightsCard,
        DestinationCard
}