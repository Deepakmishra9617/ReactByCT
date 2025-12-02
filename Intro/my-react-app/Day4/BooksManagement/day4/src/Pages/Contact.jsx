import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">

        <h1 className="title">Contact Us</h1>
        <p className="subtitle">
          For any queries related to the Books Management System, feel free to reach out.
        </p>

        <div className="details-section">
          <h2>Contact Details</h2>

          <p><strong>Email:</strong> books.management.support@gmail.com</p>
          <p><strong>Phone:</strong> +91 00000000</p>
          <p><strong>GitHub:</strong> 
            <a href="https://github.com/deepakmishra9617" target="_blank">
              deepakmishra9617
            </a>
          </p>

          <h3>Developers</h3>
          <p>Deepak Mishra</p>
          <p>Aman Ku. Singh</p>
          <p>Amarendra</p>
          <p>Amrit Raj</p>

          <h3>Institute</h3>
          <p>Technocrats Institute of Technology</p>

          <h3>Course / Semester</h3>
          <p>B.Tech — 5th Sem</p>
        </div>

        <form className="form">
          <div className="input-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea placeholder="Write your message..." required></textarea>
          </div>

          <button className="btn" type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
