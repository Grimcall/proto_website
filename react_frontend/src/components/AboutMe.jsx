import { Container, Row, Col } from "react-bootstrap";
import myselfImage from "../assets/img/jacket.png"

export const AboutMe = () => {
    return (
        <section className="aboutme" id="aboutme">

            <Container>
                <Row>                    
                    <Col md={6}>
                         <img id="myImage" src={myselfImage} alt="Myself!" />
                    </Col>
                    <Col md={6}>
                        <h1>Who am I?</h1>
                        <p>As stated above, I'm Diego Parra (nice to meet you) and I'm also a systems engineer.</p>
                        <h2>That means I solve problems.</h2>
                        <p>Not problems such as "what is beauty?", because that would fall within the purview of your conundrums of philosophy...</p>
                        <h2>I solve practical problems.</h2>
                        <p>Dealing with software these days can be daunting, complicated and even scary...  especially when you're dealing with newer, more complex systems! However, that's where I come in.<br>
                        </br>I have the knowledge, skills, and experience to help you navigate these challenges and come out on top. I'm not satisfied until I've found a solution that meets your needs and exceeds your expectations: whether it's developing software, troubleshooting systems, or finding ways to optimize your infrastructure, I'm here to help.<br>
                        </br>At the end of the day, that's what being an engineer is all about: </p>
                        <h2>Solving practical problems, one piece at a time.</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default AboutMe;