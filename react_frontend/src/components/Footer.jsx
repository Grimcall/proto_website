import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/whatsapp.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/diego-parra-838739212/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/Grimcall"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://wa.link/yxtlng"><img src={navIcon4} alt="WhatsApp"/></a>
                     
            </div>
            <p>Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
