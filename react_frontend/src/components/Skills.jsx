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
import figmaIcon from "../assets/img/skill-icons/figma.png";
import photoshopIcon from "../assets/img/skill-icons/ps.png";
import { Trans, useTranslation } from "react-i18next";


export const Skills = () => {

  const {t} = useTranslation();

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
    { text: 'SQLite', icon: sqliteIcon},
    { text: 'Figma', icon: figmaIcon},
    { text: 'Photoshop', icon: photoshopIcon},
    
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
                        <h2>{t("Skills.h2_text")}</h2>
                        <p><Trans i18nKey="Skills.p1" components={{ 1: <br/> }} /></p>
                        <p style={{ fontWeight:'bold'}}>{t("Skills.p2")}</p>

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

                              <h3><Trans i18nKey="Skills.h3" components={{ 1: <br/> }} /></h3>
                              <p><Trans i18nKey="Skills.p3" components={{ 1: <br/> }} /></p>
                              
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>{t("Skills.software-dev")}</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>{t("Skills.web-app-design")}</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>{t("Skills.uiux-design")}</h5>
                            </div>    
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>{t("Skills.backend-dev")}</h5>
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