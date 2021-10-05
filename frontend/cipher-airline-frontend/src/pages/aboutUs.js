import './aboutUs.css';
import { CardBannerAboutUs, UsCard, AboutUsNavigationCard} from '../components/card';
import aboutUsBanner from '../resources/aboutUsBanner.jpeg'
import People from '../resources/meetOurPeople.jpg';
import Sustainability from '../resources/sustainability.jpg';
import Airplane from '../resources/airplane1.jpg';
import Operations from '../resources/operations.jpg';


function AboutUs() {
    return (
        <div className="aboutUs">
            <CardBannerAboutUs imageSrc={aboutUsBanner} title1={"About Cipher Airlines"} title2={"Cutting-edge travel made possible"}/>
            <div class='aboutUsBody'>
                {/* <TopCard title='About Us'text='Cutting-edge travel made possible.'/>
                <div class='aboutUsHeader'> 
                    <h1>About Us</h1>
                </div>
                <div class='aboutUsSlogan'>
                    <p> Cutting-edge travel made possible.</p> 
                </div> */}
                {/* <div class="aboutUsText">
                <p>Cipher Airlines is the largest airline, promising to serve all continents. We operate modern, efficient and comfortable aircraft, and our culturally diverse workforce delivers award-winning services to our customers across all continents every day.</p>
                <AboutUsCardBannerText text='Cipher Airlines is the largest airline, promising to serve all continents. We operate ultra-modern, high-tech and advanced aircraft, and our culturally diverse workforce delivers award-winning services to our customers across all continents every day. As we harness our direction and speed higher towards the future, we never lose sight of the bigger picture - innovation.'/>
                */}
                <AboutUsNavigationCard/>
                <div className="aboutUsDetail">
                    <UsCard name='Our people' text='Our dynamic and diverse workforce are at the heart of our success. At the helm of our business, is a stable executive team that has led the growth and success of the Emirates Group. Our executive leaders continue to drive innovation and build on our foundations for long-term success. Learn more about our leadership team.'/>
                    <UsCard imageSrc={Sustainability} name='Our values' text='We are fully committed to responsible business and environmental stewardship. Cipher Airlines is committed to environmental stewardship. We focus our efforts on three areas: reducing emissions, consuming responsibly, and preserving wildlife and habitats. Learn about our holistic approach to sustainability and eco‑efficiency.'/>
                    <UsCard imageSrc={Airplane} name='Our vision' text= 'Our mission is to deliver the world best in flight experience using cutting edge technology. Learn more about how we use Machine Learning, Internet of Things and Artificial Intelligence to ensure your Flight experience is exquisite.'/>
                    <UsCard imageSrc={Operations} name='Our operations' text= 'At the heart of our operation is a rigorous safety risk management mind‑set and focus on safe behaviour and safety practices. We apply thorough risk and change management principles to all aspects of our operation, including Flight Operations, Cargo, Engineering, Ground Operations and Cabin Safety. We have one of the youngest fleets in the air and we strive constantly for continuous improvement in safety. Our proactive initiatives include, new operational digital tools and technology that improve safety efficiencies.'/>
                </div>

            </div>
        </div>

    )

}

export default AboutUs;