import './aboutUs.css';
import { Card } from '../components/card';
import Italy from '../resources/dolomites_rectangle.jpg';
import Japan from '../resources/JapanViewDestination.jpg';
import { PeopleCard } from '../components/card';
import DestinationContainer from '../containers/destinationContainer';

function AboutUs() {
    return (
        <div class='aboutUsBody'>
        <Card imageSrc={Italy} />
        <div class='aboutUsHeader'>
        <h1>About Us</h1>
        </div>
        <div class="aboutUsText">
        <p>Cipher Airlines is the largest airline, promising to serve all continents.</p>
        <h2>Meet our people!</h2>
        
        <div className="meetOurPeople">
        <PeopleCard imageSrc={Japan} name='Mark'/>
        <PeopleCard imageSrc={Japan} name='Jessica'/>
        <PeopleCard imageSrc={Japan} name='Sanchayata'/>
        <PeopleCard imageSrc={Japan} name='Maria'/>
        <PeopleCard imageSrc={Japan} name='Ben'/>
        <PeopleCard imageSrc={Japan} name='Valeria'/>
        </div>

        </div>
        </div>
    )

}

export default AboutUs;