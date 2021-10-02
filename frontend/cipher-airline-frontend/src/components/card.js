import './card.css'
import React from 'react'
import CustomerIdForm from './customerIdForm'
import AboutUsTopImage from '../resources/dolomites_rectangle.jpg'
var aboutUsBanner = 'dolomites_rectangle.jpg'


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

function AboutUsCard(props) {
    return (
        <> 
        <div className="aboutUsCard">
            <div className="aboutUsCardImage">
                <img src={props.imageSrc} className="aboutUs-card-image" alt={props.alt} />
            </div>
            <div className="aboutUsInfo">
            <h4 className="aboutUsInfoHeader">{props.name}</h4>
            <p className="aboutUsInfoText">{props.text}</p>
            <p className="aboutUsInfoText">{props.text1}</p>
            <p className="aboutUsInfoText">{props.text2}</p>


            <button class="moreButton" ><span>More </span></button>

            </div>
        </div>
        
        </>
    )
}

function AboutUsCardBannerText(props) {
    return (
        <> 
        <div className="aboutUsCardBanner">
            <h5 >{props.title}</h5>
            <p >{props.text}</p>
            </div>        
        </>
    )
}
function TopCard(props) {
    return (
        <div className="topCard" style={{backgroundImage: `url(${aboutUsBanner})`, backgroundSize: "100% 100%", width: "70%", height: "30vh"}}>
            {/* <img src={props.imageSrc} className="card-img-top" alt={props.alt} /> */}
            { <div className ="aboutUsTopCardInfo">
                <h1 className ="AboutUsTopCardTitle">{props.title}</h1>
                <p className ="AboutUsTopCardText">{props.text}</p>
            </div>}
        </div>
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
function ContactUsCard(props) {
    return (
        <> 
        <div className="contactUsCard">
            <div className="contactUsCardImage">
                <img src={props.imageSrc} className="contactUs-card-image" alt={props.alt} />
            </div>
            <div className="contactUsInfo">
            <h4 className="contactUsInfoHeader">{props.name}</h4>
            <p className="contactUsInfoText">{props.text}</p>
            <p className="contactUsInfoText">{props.text1}</p>
            <p className="contactUsInfoText">{props.text2}</p>
            <button class="moreButton" ><span>More </span></button>

            </div>
        </div>
        
        </>
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
function FaqsCard(props) {
    return (
        <> 
        <div className="faqsCard">
            <div className="faqsCardImage">
                <img src={props.imageSrc} className="faqs-card-image" alt={props.alt} />
            </div>
            <div className="faqsInfo">
            <h4 className="faqsHeader">{props.name}</h4>
            <p className="fqsText">{props.text}</p>
            <button class="helpButton" ><span>Help </span></button>
            </div>
        </div>
        
        </>
    )
}
function FaqsBannerText(props) {
    return (
        <> 
        <div className="faqsBanner">
            <h1 >{props.title}</h1>
            <p >{props.text}</p>
            </div>        
        </>
    )
}

export{ Card,
        FindFlightsCard,
        DestinationCard,
        ViewBookedFlightsLogIn,
        AboutUsCard,
        TopCard,
        AboutUsCardBannerText,
        ContactUsCard,
        FaqCard,
        FaqsCard,
        FaqsBannerText
}