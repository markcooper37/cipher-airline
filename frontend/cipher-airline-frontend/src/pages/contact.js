import './contact.css';
import { TopCard, UsCard, FaqsCard, FaqsBannerText } from '../components/card';
import Call from '../resources/call.jpg';
import Visit from '../resources/assist.jpg';
import Safe from '../resources/safe.jpg';
import { CardBannerAboutUs, AboutUsCard, AboutUsNavigationCard} from '../components/card';
import aboutUsBanner from '../resources/aboutUsBanner.jpeg'
import People from '../resources/meetOurPeople.jpg';
import Sustainability from '../resources/sustainability.jpg';
import Airplane from '../resources/airplane1.jpg';
import Operations from '../resources/operations.jpg';
import Visits from '../resources/visit.jpeg';



function ContactUs() {
    return (
        <div className="aboutUs">
            <CardBannerAboutUs imageSrc={aboutUsBanner} title1={"Contact Us"} title2={"We are here to help."}/>
            <div class='aboutUsBody'>
                <contactUsNavigationCard/>
                <div className="aboutUsDetail">
                    <UsCard imageSrc={Call} name='Contact Information' text='Email: hello@cipherairlines.co.uk' text1='Telephone: 0207 777 7777 (Mon-Fri 7am-7pm)' text2='Address: Cipher Airlines plc, Sky Place, Cloud 9 City, SK1 CL09'/>
                    <UsCard  name='Covid-19 Info Hub' text= 'Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'/>
                    <UsCard imageSrc={Visits} name='Visiting Us' text= 'Get more information on, Fast Track Screening,Electronic System for Travel Authorisation, Our locations and many more.'/>
                </div>

            </div>
        </div>

    )

}

export default ContactUs;








// function ContactUs() {
//     return (
//         <div class='contactUsBody'>
//             <TopCard title='Contact Us'text='We are here to help.'/>
//             <div className="aboutUsDetail">
//                 <ContactUsCard imageSrc={Call} 
//                 name='Contact Information' 
//                 text='Email: hello@cipherairlines.co.uk'
//                 text1='Telephone: 0207 777 7777 (Mon-Fri 7am-7pm)'
//                 text2='Address: Cipher Airlines plc, Sky Place, Cloud 9 City, SK1 CL09'/>
//                 <ContactUsCard imageSrc={Safe} name='Covid-19 Information Hub' text='Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'/>
//                 <ContactUsCard imageSrc={Visit} name='Visiting Us' 
//                 text='Get more information on, Fast Track Screening,Electronic System for Travel Authorisation, Our locations and many more.'/>
//                             </div>
//                         </div>

//     )

// }

// export default ContactUs;