import React from "react";
import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import R from "../../Assets/TechIcons/R.svg"
import PowerBI from "../../Assets/TechIcons/PowerBI.svg"
import Tableau from "../../Assets/TechIcons/Tableau.svg"
import Airbyte from "../../Assets/TechIcons/Airbyte.png"
import Dbt from "../../Assets/TechIcons/Dbt.svg"
import Hadoop from "../../Assets/TechIcons/Hadoop.svg"
import Spark  from "../../Assets/TechIcons/ApacheSpark.svg"
import MySql from "../../Assets/TechIcons/MySql.svg"
import Elastic from "../../Assets/TechIcons/Elastic.svg"
import NumPy from "../../Assets/TechIcons/NumPy.svg"
import Pandas from "../../Assets/TechIcons/Pandas.svg"
import Seaborn from "../../Assets/TechIcons/Seaborn.svg"
import Matplotlib from "../../Assets/TechIcons/Matplotlib.svg"
import GoogleAnalytics from "../../Assets/TechIcons/GoogleAnalytics.svg"
import HRML from "../../Assets/TechIcons/HTML5.svg"
import CSS from "../../Assets/TechIcons/CSS3.svg"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={NumPy} alt="R" />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Pandas} alt="R" />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Seaborn} alt="R" />
        <div className="tech-icons-text">Seaborn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Matplotlib} alt="R" />
        <div className="tech-icons-text">Matplotlib</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={R} alt="R" />
        <div className="tech-icons-text">R</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySql} alt="R" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySql} alt="R" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Elastic} alt="R" />
        <div className="tech-icons-text">ELK Stack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Hadoop} alt="R" />
        <div className="tech-icons-text">Hadoop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Spark} alt="R" />
        <div className="tech-icons-text">ApacheSpark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PowerBI} alt="R" />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tableau} alt="R" />
        <div className="tech-icons-text">Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Airbyte} alt="R" />
        <div className="tech-icons-text">Airbyte</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Dbt} alt="R" />
        <div className="tech-icons-text">Data Build Tool</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GoogleAnalytics} alt="R" />
        <div className="tech-icons-text">Google Analytics</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HRML} alt="R" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="R" />
        <div className="tech-icons-text">CSS</div>
      </Col>

    </Row>
  );
}

export default Techstack;
