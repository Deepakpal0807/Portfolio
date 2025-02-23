import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import text from "../../Assets/text.png";
import inventory from "../../Assets/inventory.webp";
import books from "../../Assets/books.jpeg";
import passop from "../../Assets/password.webp";
import newsapp from "../../Assets/newsapp.webp";
import weather from "../../Assets/wea.webp";
import student from "../../Assets/students.webp"

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
    imgPath={student}
    isBlog={false}
    title="Student Result Analysis"
    description="A data analysis project utilizing Matplotlib, Seaborn, NumPy, and Pandas to analyze student performance based on marital status, education level, ethnic distribution, and various other factors. The project provides visual insights into trends and correlations, helping in better understanding student demographics and their academic outcomes."
    ghLink="https://github.com/Deepakpal0807/Student_Result_analysis"
    // demoLink="https://example.com/"
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Managment"
              description="A comprehensive web application designed to manage and track inventory efficiently. Built using the MERN stack, the system allows users to add, update, delete, and search for products in stock. It provides real-time tracking of product quantities, order management, and alerts for low stock levels. The app helps businesses streamline their inventory processes, ensuring smooth operations and preventing stockouts or overstocking."
              ghLink="https://github.com/Deepakpal0807/Inventary-Managment"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text - Modifier"
              description="A versatile text manipulation application built with React and Bootstrap. It offers features like converting text to uppercase and lowercase, text-to-audio functionality, clearing extra spaces, word and character counting, and more. Designed with an intuitive interface, it ensures seamless text editing for various use cases."
              ghLink="https://github.com/Deepakpal0807/Text-Modifiers"
              demoLink="https://deepakpal0807.github.io/Text-Modifiers/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              isBlog={false}
              title="Book-Swap"
              description="BookSwap is a platform that enables students to buy and borrow books at affordable prices. Users can sign up, add their books, and search for books by genre, allowing them to purchase used books in good condition at discounted rates or borrow them for reading. Built with the MERN stack, Firebase, and Tailwind CSS, it provides a seamless and user-friendly experience to help students save on textbooks."
              ghLink="https://github.com/Deepakpal0807/BookSwap"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passop}
              isBlog={false}
              title="Password Manager"
              description="A secure and user-friendly password management application built using React, Tailwind CSS, MongoDB, Express, and Node.js. The app allows users to store, edit, and delete passwords with associated usernames and website URLs. It ensures data security by leveraging encrypted storage in MongoDB."
              ghLink="https://github.com/Deepakpal0807/PassOP"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="News - App"
              description="A dynamic news platform built with React, providing real-time updates across various categories such as business, sports, technology, and more. The app features a user-friendly interface with seamless navigation, ensuring users can easily explore news tailored to their interests."
              ghLink="https://github.com/Deepakpal0807/Voice-of-india-News-app/tree/master"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather - App"
              description="A feature-rich JavaScript application that delivers real-time weather updates for any location. It displays key information such as temperature, humidity, wind speed, and weather conditions. With a clean and interactive interface, the app utilizes weather APIs to provide accurate data and offers features like location-based forecasts and dynamic visuals for an enhanced user experience."
              ghLink="https://github.com/Deepakpal0807/weather_app_own"
              demoLink="https://openweathersapp.netlify.app/"
              //  <--------Please include a demo link here
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
