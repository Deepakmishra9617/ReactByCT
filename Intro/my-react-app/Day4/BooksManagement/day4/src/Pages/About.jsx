import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Book Management System</h1>

        <p className="about-text">
          This Book Management System is a frontend-based web application
          designed to manage and organize book information efficiently. The
          project is built using HTML, CSS, and JavaScript, and focuses on
          providing a simple and interactive user interface.
        </p>

        <p className="about-text">
          Users can add new books, view the list of available books, update
          details, and delete records — all performed within the browser using
          client-side storage. This project showcases essential concepts like
          DOM manipulation, form handling, data validation, responsive design,
          and dynamic UI updates.
        </p>
      </div>
    </div>
  );
}

export default About;
