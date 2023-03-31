import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import {Table} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import pythonIcon from "../assets/img/skill-icons/python.svg";

export const Skills = () => {

  const tableData = [
    { text: 'Python', icon: pythonIcon},
    { text: 'PostgreSQL', icon: 'icon2' },
    { text: 'QT', icon: 'icon3' },
    { text: 'SQLAlchemy', icon: 'icon3' },
    { text: 'Flask', icon: 'icon3' },
    { text: 'React', icon: 'icon3' },
    { text: 'JavaScript', icon: 'icon3' },
    { text: 'Node.js', icon: 'icon3' },
    { text: 'Github', icon: 'icon3' },
    { text: 'Heroku', icon: 'icon3' },
    { text: 'Pandas', icon: 'icon3' },
    { text: 'C++', icon: 'icon3' },
    { text: 'Java', icon: 'icon3' },
    { text: 'HTML', icon: 'icon3' },
    { text: 'CSS', icon: 'icon3' },
    { text: 'SQLite', icon: 'icon3' },
    // add more rows as needed
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      // Need to expand skill section to include languages known.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Table borderless className="mb-5">
                          <tbody>
                            {tableData.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <img className="skilltable-icon" src={item.icon} alt={item.text} />
                                  <span className="ml-2">{item.text}</span>
                                </td>
                                {/* Add a vertical split between the columns */}
                                {index % 2 === 0 && <td className="border-left" />}
                              </tr>
                            ))}
                          </tbody>
                        </Table>                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Software Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Mobile App Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Backend Systems</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>UI/UX Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills;