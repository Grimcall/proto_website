import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj01.png";
import projImg2 from "../assets/img/proj02.png";
import projImg3 from "../assets/img/proj03.png";
import projImg4 from "../assets/img/proj04.png";
import projImg5 from "../assets/img/proj05.png";
import projImg6 from "../assets/img/proj06.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Trans, useTranslation } from "react-i18next";


export const Projects = () => {

  const {t} = useTranslation();

  const projects = [
    {
      title: "Data Center Infrastructure Manager (Pequiven)",
      description: "Software Development",
      imgUrl: projImg1,
      url: 'None',
    },
    {
      title: "PDF Report Generation (Dr. Angel Villegas)",
      description: "Software Development",
      imgUrl: projImg2,
    },
    {
      title: "Battlemetrics Discord Bot (K2)",
      description: "Software Development",
      imgUrl: projImg3,
    },
    {
      title: "Motion Detector",
      description: "Software Development",
      imgUrl: projImg4,
    },
    {
      title: "Personal Website",
      description: "Web Development",
      imgUrl: projImg5,
    },
    {
      title: "Doctor's Consulting Website",
      description: "Web Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>

                <h2>{t("Projects.h2_title")}</h2>
                <p><Trans i18nKey="Projects.p1" components={{ 1: <br/> }} /></p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  )
}

export default Projects;