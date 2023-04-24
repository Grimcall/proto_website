import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";


/*Hard Skills*/
import {Table} from 'react-bootstrap';
import pythonIcon from "../assets/img/skill-icons/python.png";
import postgresqlIcon from "../assets/img/skill-icons/postgresql.png";
import qtIcon from "../assets/img/skill-icons/qt.png";
import sqlalchemyIcon from "../assets/img/skill-icons/sqlalchemy.png";
import flaskIcon from "../assets/img/skill-icons/flask.png";
import reactIcon from "../assets/img/skill-icons/react.png";
import javascriptIcon from "../assets/img/skill-icons/javascript.png";
import nodejsIcon from "../assets/img/skill-icons/nodejs.png";
import gitIcon from "../assets/img/skill-icons/git.png";
import herokuIcon from "../assets/img/skill-icons/heroku.png";
import pandasIcon from "../assets/img/skill-icons/pandas.png";
import cppIcon from "../assets/img/skill-icons/c++.png";
import javaIcon from "../assets/img/skill-icons/java.png";
import htmlIcon from "../assets/img/skill-icons/html.png";
import cssIcon from "../assets/img/skill-icons/css.png";
import sqliteIcon from "../assets/img/skill-icons/sqlite.png";


export const Skills = () => {

  const tableData = [
    { text: 'Python', icon: pythonIcon},
    { text: 'PostgreSQL', icon: postgresqlIcon },
    { text: 'QT', icon: qtIcon },
    { text: 'SQLAlchemy', icon: sqlalchemyIcon },
    { text: 'Flask', icon: flaskIcon },
    { text: 'React', icon: reactIcon },
    { text: 'JavaScript', icon: javascriptIcon },
    { text: 'Node.js', icon: nodejsIcon },
    { text: 'Git', icon: gitIcon },
    { text: 'Heroku', icon: herokuIcon },
    { text: 'Pandas', icon: pandasIcon },
    { text: 'C++', icon: cppIcon },
    { text: 'Java', icon: javaIcon },
    { text: 'HTML', icon: htmlIcon },
    { text: 'CSS', icon: cssIcon },
    { text: 'SQLite', icon: sqliteIcon },
    
  ];

  const halfLength = Math.ceil(tableData.length / 2);
  const tableData1 = tableData.slice(0, halfLength);
  const tableData2 = tableData.slice(halfLength);



  const responsive = {
    superLargeDesktop: {
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
                        <h2>What can I do for you?</h2>
                        <p>I have been coding for aproximately three and a half years.<br>
                        </br>The tools and programming languages below are what I'm going to use to help you with what you need.<br>
                        </br>Don't forget, however, that these are *just* tools.</p>
                        <p style={{ fontWeight:'bold'}}>What matters is the hand that wields them.</p>

                          <Table borderless className="skilltable">
                            <tbody>
                              {tableData1.map((item, index) => (
                              <tr key={index}>     

                              <td className="skilltable-item-container">
                                <img className="skilltable-icon" src={item.icon} alt={item.text}/>
                                <div className="skilltable-text">{item.text}</div>
                              </td>

                              <td className="skilltable-item-container">
                               <img className="skilltable-icon" src={tableData2[index].icon} alt={tableData2[index].text}/>
                               <div className="skilltable-text"> {tableData2[index].text} </div>
                              </td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>

                              <h3>My main focus is on software development.<br></br>Specifically, working on the systems that make software work: the back-end.</h3>
                              <p>However, that doesn't mean I can't help you with anything else.<br></br>Within my array of skills, creating friendly user interfaces is one of them.</p>
                              
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Software Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Web App Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Backend Development</h5>
                            </div>                            
                        </Carousel>

                    </div>
                    
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}

export default Skills;