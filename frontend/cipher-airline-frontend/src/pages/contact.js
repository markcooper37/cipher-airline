import './contact.css';
import {Card, FaqCard} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import Instagram from '../resources/instagram-logo.png';
import Map from '../resources/map.png';
import Facebook from '../resources/Facebook-Logo.png';
import Twitter from '../resources/twitter-logo.png';
import { TopCard } from '../components/card';
import { ContactUsCard } from '../components/card';
import { FaqsCard } from '../components/card';
import { FaqsBannerText } from '../components/card';

import Call from '../resources/call.jpg';
import Visit from '../resources/assist.jpg';
import Safe from '../resources/safe.jpg';


function ContactUs() {
    return (
        <div class='contactUsBody'>
        <TopCard title='Contact Us'text='We are here to help.'/>
        <div className="aboutUsDetail">
        <ContactUsCard imageSrc={Call} 
        name='Contact Information' 
        text='Email: hello@cipherairlines.co.uk'
        text1='Telephone: 0207 777 7777 (Mon-Fri 7am-7pm)'
        text2='Address: Cipher Airlines plc, Sky Place, Cloud 9 City, SK1 CL09'/>
        <ContactUsCard imageSrc={Safe} name='Covid-19 Information Hub' text='Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'/>
        <ContactUsCard imageSrc={Visit} name='Visiting Us' 
        text='Get more information on, Fast Track Screening,Electronic System for Travel Authorisation, Our locations and many more.'/>
        <FaqsBannerText title='FAQs'/>
        <div class="Container">
            <div className="faqsRight">
            <FaqsCard imageSrc={Visit} name='Bookings' text='Get more information '/>
            <FaqsCard imageSrc={Visit} name='Refunds' text='Get more information '/>
            <div className="faqsCentre">
            <FaqsCard imageSrc={Visit} name='Covid-19' text='Get more information '/>
            <FaqsCard imageSrc={Visit} name='Baggage' text='Get more information '/>
            <div className="faqsLeft">
            <FaqsCard imageSrc={Visit} name='Feedback' text='Get more information '/>
            <FaqsCard imageSrc={Visit} name='Other travel assistance' text='Get more information '/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )

}

export default ContactUs;
        
























    //   <div>
    //     <Card imageSrc={Italy} />
    //     <div class = "contactus">
    //         <h1>Contact Us</h1>
    //         <p>We're here to help.</p>
    //         <div class = "contact-info">
    //             <h2> Contact Information </h2>
    //             <p>Email: hello@cipherairlines.co.uk</p>
    //             <p>Telephone: 0207 777 7777 (Mon-Fri 7am-7pm)</p>
    //             <p>Address: Cipher Airlines plc, Sky Place, Cloud 9 City, SK1 CL09</p>
    //             <img src={Map} alt="Google Maps Location of Cipher Airlines" />
    //             <h2> Follow Us on Social Media </h2>
    //         </div>

    //         {/* <!--Social media--> */}
    //         <div class = "social-media">
    //             <a href="#"><img class="icons" src={Twitter} alt="Twitter logo" /></a>
    //             <a href="#"><img class="icons" src={Facebook} alt="Facebook logo"/></a>
    //             <a href="#"><img class="icons" src={Instagram} alt="Instagram logo"/></a>
    //         </div>

    //         <h2>FAQs</h2>
    //         <FaqCard title = {"Can I change or cancel my package online?"} text = {"Yes, you can cancel a booking in exchange for a voucher credit online. However, it is not currently possible to make any other changes or cancellations to package bookings via CipherAirlines.com. So for anything other than voucher credits, please contact us by telephone and we will be happy to assist."}/>
    //         <FaqCard title ={"Where can I find helpful information on Coronavirus (COVID-19) as a customer?"} text={"UK government advice:  You can find the UK government’s latest travel advice here."}/>
            

            
    //         <p>UK government advice:  You can find the UK government’s latest travel advice here.  
    //             Flexible bookings: We have a range of flexible options for new and existing bookings which allow you to change your destination, date of travel or both without incurring a change fee.  
    //             Protective measures on the ground and in the air: We’ve made changes at every step of your journey, bringing in additional protective measures on the ground and in the air. Your safety remains at the heart of everything we do.</p>
    //         <p>Country entry requirements: Please check the UK Government’s site for the latest travel advice and entry requirements by destination. You can find information about entering the UK here.</p>
    //         <p>Protective measures on the ground and in the air: We’ve made changes at every step of your journey, bringing in additional protective measures on the ground and in the air. Your safety remains at the heart of everything we do.</p>
    //         <p>Country entry requirements: Please check the UK Government’s site for the latest travel advice and entry requirements by destination. You can find information about entering the UK here.
    //             COVID-19 testing requirements: The UK, and many countries around the world, have introduced entry rules for COVID-19 testing. If you are travelling, please check our COVID-19 testing page for the UK Government rules, exclusive discounted testing and further information.</p>
    //         <p>Updating your contact details: Please make sure your contact details are up to date in Manage Booking so we can contact you if we need to.</p>

    //         <h3>I've rented a car from Cipher Airport, which terminal do I collect from?</h3>
    //         <p>There are two  depots at Cipher Airport - one on site at Terminal 5 and one that services Terminals 1 - 4 via a shuttle bus.</p>
    //         <p>If you book car hire from Cipher Airport, by default, the system will book collection from Terminal 5. However, if you book a Cipher Airline flight at the same time as your car, the depot will use your flight information and assume that you wish to collect your car from the terminal you fly into e.g. if your Cipher Airline flight arrives into Terminal 4, your car will be ready for you to collect at the Terminals 1 - 4 location even though your pre-paid voucher will show Terminal 5.</p>
    //         <p>If you do not book a Cipher Airline flight at the same time as your car, you can choose which depot you collect your car from. We recommend you check the depot opening hours - in the event that the Terminal 5 depot is closed, you can use the Terminals 1 - 4 location. We do not need to know in advance which terminal you wish to collect the car from.</p>

    //     </div>
        
    //   </div>