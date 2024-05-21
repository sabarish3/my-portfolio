import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiAmazondynamodb,
  SiExpress,
  SiBootstrap,
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazons3,
} from "react-icons/si";
import { IoLogoCss3  } from "react-icons/io";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML">
      <FaHtml5 title="HTML"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <IoLogoCss3 title="CSS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 title="Javascript"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="Node Js">
        <DiNodejs title="Node Js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React Js">
        <DiReact title="React Js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express Js">
        <SiExpress title="Express Js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb title="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="DynamoDB">
        <SiAmazondynamodb title="DynamoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS Lambda">
        <SiAwslambda title="AWS Lambda"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <SiBootstrap title="Bootstrap"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="API Gateway">
        <SiAmazonapigateway title="API Gateway"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Amazon S3">
        <SiAmazons3 title="Amazon S3"/>
      </Col>
    </Row>
  );
}

export default Techstack;
