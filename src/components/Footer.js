import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="2" className="footer-copywright">
          <h3>© 2022-2023 Aaditi Kshirsagar</h3>
           
        </Col>
      </Row>
      
    </Container>
  );
}

export default Footer;
