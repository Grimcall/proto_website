import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";
import { ReCAPTCHA } from "react-google-recaptcha";

export const Contact = () => {
  const {t} = useTranslation();

  let send = t("Contact.send");
  let sending = t("Contact.sending");

  const formInitialDetails = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(send);
  const [status, setStatus] = useState({});
  const captchaRef = useRef(null)

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText(sending);
    
    const token = captchaRef.current.getValue();

    try{
    {/*https://cosmic-itechnology.onrender.com*/}
    {/*http://localhost:5000*/}

      let response = await fetch("https://cosmic-itechnology.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();
      setFormDetails(formInitialDetails);
      
      if (result[1] === 200) {
        setStatus({ success: true, message: t("Contact.successful")});
        console.log("Message sent successfully: ", result);
      } 
      else {
        setStatus({ success: false, message: t("Contact.unsuccessful")});
        console.log("Message not sent: ", result);
      }
      setFormDetails(formInitialDetails);
      captchaRef.current.reset();

    } catch (error) {
      setStatus({ success: false, message: t("Contact.unsuccessful") });
      setButtonText(t("Contact.send"));
      console.log("Error:", error);
      } 
      finally {
        setButtonText(send);
    }
  };
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{t("Contact.title")}</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.first_name} placeholder={t("Contact.first-name")} onChange={(e) => onFormUpdate('first_name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.last_name} placeholder={t("Contact.last-name")} onChange={(e) => onFormUpdate('last_name', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder={t("Contact.email-address")} onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder={t("Contact.phone")} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder={t("Contact.message")}onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>

                      <button type="submit"><span>{buttonText}</span></button>

                      {/*<ReCAPTCHA 
                          className="reCAPTCHA"
                          sitekey={process.env.SITEKEY}
                          ref={captchaRef}
                      />*/}
                    
                    {status.message && <p className={status.success === false ? "danger" : "success"}>{status.message}</p>}

                    </Col>                
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;