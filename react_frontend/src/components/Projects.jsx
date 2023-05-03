import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

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
      imgUrl: projImg1,
    },
    {
      title: "Geocoder Website",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Medical Consulting Website",
      description: "Web Development",
      imgUrl: projImg3,
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
                <h2>Projects</h2>
                <p>Below are some of the projects I've worked on.<br></br>Please note that I am not able to showcase everything about these projects for the purposes of maintaining client privacy.</p>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;