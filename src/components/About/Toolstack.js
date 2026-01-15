import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import GoogleColab from "../../Assets/TechIcons/GoogleColaboratory.svg";
import Jupyter from "../../Assets/TechIcons/Jupyter.svg";
import Excel from "../../Assets/TechIcons/Excel.svg"
import Azure from "../../Assets/TechIcons/AzureDevOps.svg"
import Jira from "../../Assets/TechIcons/Jira.svg"
import Hive from "../../Assets/TechIcons/Hive.svg"
import Postman from "../../Assets/TechIcons/Postman.svg"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GoogleColab} alt="R" />
        <div className="tech-icons-text">Google Colab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Jupyter} alt="R" />
        <div className="tech-icons-text">Jupyter Notebook</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="R" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Azure} alt="R" />
        <div className="tech-icons-text">Azure DevOps</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Jira} alt="R" />
        <div className="tech-icons-text">Jira</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Hive} alt="R" />
        <div className="tech-icons-text">Hive</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Excel} alt="R" />
        <div className="tech-icons-text">Advanced MS Excel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
