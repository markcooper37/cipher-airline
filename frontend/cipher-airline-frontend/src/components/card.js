import './card.css'
import React from 'react'

function Card(props) {
    return (
        <div className="card" styles="width: 18rem;">
            <img src={props.imageSrc} className="card-img-top" alt="Hongkong city skyline in the evening" />
            <div className ="card-body">
                <h1 className ="card-title">{props.title1} <br/> {props.title2}</h1>
            </div>
        </div>
    )
}

function FindFlightsCard(props) {
    return (
        <div className="findFlightsCard" styles="width: 18rem;">
            <h5 className ="findFlightsCar-title">{props.title}</h5>

            <form>
                <input type="text" name="destination" autocomplete="off" required />
                <label for="destination" class="label-destination">
                    <span class="content-destination">Destination</span>
                </label>
                {/* <button type="submit">Search</button> */}
            </form>
                {/* <p className ="findFlightsCar-text">{props.text}</p> 
                <a href="#" className ="btn btn-primary">{props.buttonText}</a>*/}
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