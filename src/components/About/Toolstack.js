import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
} from "react-icons/si";
import {   
  FaGithub,
  FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>      
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode title="Visual Studio Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <FaAws title="AWS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack title="Slack"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <FaGithub title="Github"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
