import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gpt3 from "../../Assets/Projects/gpt3.png";
import bundle from "../../Assets/Projects/bundle.png";
import classify from "../../Assets/Projects/classify.png";
import heartpred from "../../Assets/Projects/heartpred.png";
import antidistract from "../../Assets/Projects/antidistract.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt3}
              isBlog={false}
              title="Study Buddy"
              description="An intelligent PDF analysis and summarization application that utilizes advanced algorithms to extract key insights and generate concise summaries from lengthy PDF documents. It streamlines information comprehension, saving valuable time and enhancing productivity for users."
              ghLink="https://github.com/Aad-K6/StudyBuddy"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classify}
              isBlog={false}
              title="Real or Not"
              description="The Image Authenticity Classifier is a web application powered by AI that accurately detects and classifies images, distinguishing between real and AI-generated (fake) images. It employs Random forest classifier algorithm to provide reliable results and aid in identifying image authenticity."
              ghLink="https://github.com/Aad-K6/RealorNot"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={antidistract}
              isBlog={false}
              title="Anti Distraction App"
              description="A Python app that enhances productivity by blocking distracting websites and providing personalized notifications and a to-do list for effective task management."
              ghLink="https://github.com/Aad-K6/AntiDistraction.py"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bundle}
              isBlog={false}
              title="Smart Bundle Builder"
              description="Create Bundle of products and price them as per psychological pricing marketing strategy. Find the maximum number of products in a bundle so that the price ends in a trailing digit"
              ghLink="https://github.com/Aad-K6/BundlePricing.c"
                      
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heartpred}
              isBlog={false}
              title="HeartPredict+"
              description="Employs machine learning algorithms to analyze medical data and predict the likelihood of heart disease in individuals. By utilizing predictive models, it assists in early detection and proactive management of cardiovascular health."
              ghLink="https://github.com/Aad-K6/HeartDiseasePredictor"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
