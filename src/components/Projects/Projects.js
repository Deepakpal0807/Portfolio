import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Inventory Managment"
              description="A comprehensive web application designed to manage and track inventory efficiently. Built using the MERN stack, the system allows users to add, update, delete, and search for products in stock. It provides real-time tracking of product quantities, order management, and alerts for low stock levels. The app helps businesses streamline their inventory processes, ensuring smooth operations and preventing stockouts or overstocking."
              ghLink="https://github.com/Deepakpal0807/Inventary-Managment"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Password Manager"
              description="A secure and user-friendly password management application built using React, Tailwind CSS, MongoDB, Express, and Node.js. The app allows users to store, edit, and delete passwords with associated usernames and website URLs. It ensures data security by leveraging encrypted storage in MongoDB."
              ghLink="https://github.com/Deepakpal0807/PassOP"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Text - Modifier"
              description="A versatile text manipulation application built with React and Bootstrap. It offers features like converting text to uppercase and lowercase, text-to-audio functionality, clearing extra spaces, word and character counting, and more. Designed with an intuitive interface, it ensures seamless text editing for various use cases."
              ghLink="https://github.com/Deepakpal0807/Text-Modifiers"
              demoLink="https://deepakpal0807.github.io/Text-Modifiers/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="News - App"
              description="A dynamic news platform built with React, providing real-time updates across various categories such as business, sports, technology, and more. The app features a user-friendly interface with seamless navigation, ensuring users can easily explore news tailored to their interests."
              ghLink="https://github.com/Deepakpal0807/Voice-of-india-News-app/tree/master"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather - App"
              description="A feature-rich JavaScript application that delivers real-time weather updates for any location. It displays key information such as temperature, humidity, wind speed, and weather conditions. With a clean and interactive interface, the app utilizes weather APIs to provide accurate data and offers features like location-based forecasts and dynamic visuals for an enhanced user experience."
              ghLink="https://github.com/Deepakpal0807/weather_app_own"
              demoLink="https://openweathersapp.netlify.app/"
              //  <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dictionary - App"
              description="A user-friendly dictionary application built with JavaScript, providing instant word definitions, synonyms, antonyms, and translations. The app allows users to search for words and view their meanings, pronunciation, and usage in sentences. It features an intuitive interface, making it easy to find and explore words across different languages, ensuring a seamless learning experience."
              ghLink="https://github.com/Deepakpal0807/dictonary"
              demoLink="https://e-dictonary.netlify.app/"      //<--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
