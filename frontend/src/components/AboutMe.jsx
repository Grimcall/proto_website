import { Container, Row, Col } from "react-bootstrap";
import myselfImage from "../assets/img/me but cooler.png"
import { Trans, useTranslation } from "react-i18next";


export const AboutMe = () => {

    const {t} = useTranslation();

    return (
        <section className="aboutme" id="aboutme">

            <Container>
                <Row>                    
                    <Col md={6}>
                         <img id="myImage" src={myselfImage} alt="Myself!" />
                    </Col>
                    <Col md={6}>
                        <h1>{t("AboutMe.h1_text")}</h1>
                        <p>{t("AboutMe.p1")}</p>
                        <h2>{t("AboutMe.h2_text")}</h2>
                        <p>{t("AboutMe.p2")}</p>
                        <h2>{t("AboutMe.h2_text_2")}</h2>
                        <p><Trans i18nKey="AboutMe.p3" components={{ 1: <br/> }} /></p>
                        <h2>{t("AboutMe.h2_text_3")}</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default AboutMe;