import './card.css'
import React from 'react'
import CustomerIdForm from './customerIdForm'


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
        <div className="destinationCard">
            <div className="destinationCardImage">
                <img src={props.imageSrc} className="destination-card-img" alt="Mountains in Italy, called the Dolamites" />
            </div>
            <h1 className="destinationName">{props.name}</h1>
        </div>
            

        </>
    )
}

function PeopleCard(props) {
    return (
        <> 
        <div className="peopleCard">
            <div className="peopleCardImage">
                <img src={props.imageSrc} className="people-card-image" alt={props.alt} />
            </div>
            <div className="peopleInfo">
            <h1 className="personName">{props.name}</h1>
            </div>
        </div>
        
        </>
    )
}

function ViewBookedFlightsLogIn(props) {
    return (
        <div className="bookedFlightsLogIn">
            <h5 className ="bookedFlightsCar-title">{props.title}</h5>
            <div className ="bookedFlightsCard-body">
                <p className ="bookedFlightsCar-text">{props.text}</p>
            </div>
        </div>
    )
}

function FaqCard(props) {
    return (
        <div className="FaqCard">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export{ Card,
        FindFlightsCard,
        DestinationCard,
        ViewBookedFlightsLogIn,
        PeopleCard,
        FaqCard
}