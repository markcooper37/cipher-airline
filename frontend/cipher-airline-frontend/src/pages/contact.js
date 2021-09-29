// import './contact.css';
import {Card} from '../components/card.js';
import Italy from '../resources/dolomites_rectangle.jpg';

function ContactUs() {
    return (
      <>
        <Card imageSrc={Italy} />
        <h1>Contact Us</h1>
        <p>We're here to help.</p>
        <p>Email: hello@cipherairlines.co.uk</p>
        <p>Telephone: 0207 777 7777 (Mon-Fri 7am-7pm)</p>
        <p>Address: Cipher Airlines plc, Sky Place, Cloud 9 City, SK1 CL09</p>
        <img src={"https://media.discordapp.net/attachments/891968120892317707/892706868303101952/Screenshot_2021-09-29_at_10.38.13.png"} alt="Google Maps Location of Cipher Airlines" />
        

        {/* <!--Social media--> */}
            <div class = "social-media">
                <a href="#"><img class="icons" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter logo" /></a>
                <a href="#"><img class="icons" src="https://drainbrain.com/app/uploads/2016/01/Facebook-Logo-Transparent.png" alt="Facebook logo"/></a>
                <a href="#"><img class="icons" src="https://lh3.googleusercontent.com/proxy/azw2JrPjLwbPxpyQTAn92fX9Z1XlTeJwlcDgTzdcvEMl_qnUPdLM7sUe6dOAAgi23yXs5bPg4iHKv4Ghy0VWNM7QorGnog4ZB4TP_6MVgKl211RgmTNt_9scL4QIaw4jNgpXHvFmI5M1XKG78qtNRDqDFLpn" alt="Instagram logo"/></a> 
            </div>
      </>
    );
  }
  
  export default ContactUs;