import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import PowerBi1 from "../../Assets/Projects/PowerBiOnLaptop.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PowerBi1}
              isBlog={false}
              title="UPI Business Insights Dashboard"
              description="End-to-end Power BI dashboard analyzing UPI transactions to support revenue growth, operational efficiency, and fraud risk reduction. Includes insights on transaction trends and user behavior, merchant and bank performance, revenue and volume flows, and fraud detection patterns for proactive risk management."
              ghLink="https://github.com/Rohit-Shegokar/UPI_Business_Insights_Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
