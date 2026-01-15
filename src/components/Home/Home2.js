import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a results-driven professional currently pursuing a 
            <i>
              <b className="purple">
                  {" "}Master of Science in Management of Technology{" "}
              </b> 
            </i>
              at 
            <i>
              <b className="purple">
                  {" "}New York University.{" "}
              </b> 
            </i>
              With a strong foundation in both
            <i>
              <b className="purple">
                  {" "} Project Management{" "}
              </b> 
            </i> 
              and
            <i>
              <b className="purple">
                  {" "} Data Analytics{""}
              </b> 
            </i> 
            , I specialize in bridging the gap between technical architecture and strategic business needs.
              <br />
              <br />
              I possess a deep technical proficiency in
              <i>
                <b className="purple">
                  {" "} Python{" "}
                </b>
              </i>
              and
              <i>
                <b className="purple">
                  {" "} R{" "}
                </b>
              </i>
             for data manipulation and statistical analysis. My expertise extends across the data landscape, with extensive experience in
              <i>
                <b className="purple">
                  {" "} SQL{" "}
                </b>
              </i>
              and managing both
              <i>
                <b className="purple">
                  {" "} relational databases{" "}
                </b>
              </i>
              like
              <i>
                <b className="purple">
                  {" "} MySQL{" "}
                </b>
              </i>
              and
              <i>
                <b className="purple">
                  {" "} PostgreSQL{""}
                </b>
              </i>
              , as well as
              <i>
                <b className="purple">
                  {" "} non-relational databases{" "}
                </b>
              </i>
              such as
              <i>
                <b className="purple">
                  {" "} MongoDB{" "}
                </b>
              </i>
              and
              <i>
                <b className="purple">
                  {" "} The ELK Stack.{" "}
                </b>
              </i>
              My expertise lies in transforming complex datasets into actionable insights using tools like
              <i>
                <b className="purple">
                  {" "} Power BI{" "}
                </b>
              </i>
              and
              <i>
                <b className="purple">
                  {" "} Tableau{" "}
                </b>
              </i>
              to drive informed decision-making and operational efficiency.
              <br />
              <br />
              As a
              <i>
                <b className="purple">
                  {" "}Certified Scrum Master{""}
                </b>
              </i>
              , I am passionate about optimizing processes, fostering cross-functional collaboration, and leveraging data to solve high-impact global challenges
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
