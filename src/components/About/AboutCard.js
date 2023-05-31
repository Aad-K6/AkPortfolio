import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Aaditi Kshirsagar </span>
            a driven and ambitious individual currently pursuing <span className="purple"> B.Tech at Sanjay Ghodawat University</span> in Kolhapur, India.
            <br /> I am fascinated by the potential of<span className="purple"> artificial intelligence (AI)</span> and<span className="purple"> machine learning (ML) </span>
            to revolutionize industries and solve complex problems. 
            
            <br />
            I am passionate about exploring the intricacies of data-driven problem-solving and discovering 
            patterns that enable intelligent decision-making.
            <br />
            <br />
            I am a dedicated learner who embraces challenges and consistently seeks opportunities to<span className="purple"> expand my knowledge.</span>
            <br />
          Outside coding, I enjoy staying active. 
          <br />
          Whether it's engaging in outdoor activities or exploring new hobbies, 
          I believe in the importance of personal growth and well-being.
          </p>
          

          
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
