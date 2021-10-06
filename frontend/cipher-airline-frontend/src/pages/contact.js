import './contact.css';
import Italy from '../resources/dolomites_rectangle.jpg';
import Instagram from '../resources/instagram-logo.png';
import Map from '../resources/map.png';
import Facebook from '../resources/Facebook-Logo.png';
import Twitter from '../resources/twitter-logo.png';
import { TopCard, ContactUsCard, FaqsCard, FaqsBannerText } from '../components/card';


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