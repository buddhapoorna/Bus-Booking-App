import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      
      <div className="feedback-form">
        <h2 className="section-title">Feedback Form</h2>
        <form>
          <div className="input-group">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="input-group">
            <label className="label">Message</label>
            <textarea
              className="input"
              placeholder="Your Feedback"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>
        </form>
      </div>

      
      <div className="social-links">
        <h2 className="section-title">Connect with Us</h2>
        <div className="social-icons">
          <a href="#" className="social-icon facebook">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon twitter">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon linkedin">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
