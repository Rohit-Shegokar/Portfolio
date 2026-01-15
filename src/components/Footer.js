import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Rohit-Shegokar",
      icon: <AiFillGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohit-shegokar",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer-content">
          <Col xs={12} md={6} className="footer-copywright">
            <p>Copyright © {currentYear} Rohit Shegokar. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6} className="footer-social">
            <ul className="footer-icons">
              {socialLinks.map((social, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={social.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
