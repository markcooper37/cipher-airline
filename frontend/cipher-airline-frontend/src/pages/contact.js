import './contact.css';
import {Card} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';
import Instagram from '../resources/instagram-logo.png';
import Map from '../resources/map.png';
import Facebook from '../resources/Facebook-Logo.png';
import Twitter from '../resources/twitter-logo.png';

function ContactUs() {
    return (
      <div>
        <Card imageSrc={Italy} />
        <div class = "contactus">
            <h1>Contact Us</h1>
            <p>We're here to help.</p>
            <div class = "contact-info">
                <h2> Contact Information </h2>
                <p>Email: hello@cipherairlines.co.uk</p>
                <p>Telephone: 0207 777 7777 (Mon-Fri 7am-7pm)</p>
                <p>Address: Cipher Airlines plc, Sky Place, Cloud 9 City, SK1 CL09</p>
                <img src={Map} alt="Google Maps Location of Cipher Airlines" />
                <h2> Follow Us on Social Media </h2>
            </div>

            {/* <!--Social media--> */}
            <div class = "social-media">
                <a href="#"><img class="icons" src={Twitter} alt="Twitter logo" /></a>
                <a href="#"><img class="icons" src={Facebook} alt="Facebook logo"/></a>
                <a href="#"><img class="icons" src={Instagram} alt="Instagram logo"/></a> 
            </div>
        </div>
        
      </div>
    );
  }
  
  export default ContactUs;