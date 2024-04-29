import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CV_es from '../assets/DP_CV_es.pdf';
import CV_en from '../assets/DP_CV_en.pdf'; 

export const NavBar = () => {

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const handleLanguageSwitch = (languages) => {
    i18n.changeLanguage(languages);
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);
  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const cvLink = selectedLanguage === 'es' ? CV_es : CV_en;

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href={window.location.pathname}>
            <img id="logo-small"  src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
              {t("NavBar.home")}
                </Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
              {t("NavBar.skills")}
                </Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
              {t("NavBar.projects")}
                </Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/diego-parra-838739212/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/Grimcall"><img src={navIcon2} alt="GitHub" /></a>
                <a href={cvLink} target="_blank" rel="noreferrer" className="d-none"><img src={navIcon3} alt="" /></a>              
              </div>
            
            <div className="languageSwitcher">
              <NavDropdown title={selectedLanguage === 'es' ? 'ES' : 'EN'} id="language-dropdown">
                
                <NavDropdown.Item onClick={() => handleLanguageSwitch('es')}>
                Español
                </NavDropdown.Item>
                
                <NavDropdown.Item onClick={() => handleLanguageSwitch('en')}>
                English
                </NavDropdown.Item> 

              </NavDropdown>
            </div>
            
              <HashLink to='#connect'>
                <button className="vvd"><span>{t("NavBar.lets-connect")}</span></button>
              </HashLink>              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar