
import React from "react";
import "../styles/About.css"; // Custom styles

const About = () => {
  return (
    <div className="about-container">
      <div className="container py-5">
        <div className="row align-items-center">
        
          {/* Left Content */}
          <div className="col-md-6">
            <h1 className="fw-bold text-danger">About Our Travel Experience</h1>
            <p className="lead text-muted">
              We offer an effortless travel booking service, connecting you with top-rated transport options for a smooth and safe journey. Book your tickets, track your ride, and enjoy the journey!
            </p>
            <button className="btn btn-custom mt-3">Discover More</button>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/free-vector/landing-page-design-mocksite_23-2148156143.jpg"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-danger fw-bold">15,000+</h2>
            <p className="text-muted">Trips Booked Daily</p>
          </div>
          <div className="col-md-4">
            <h2 className="text-danger fw-bold">700+</h2>
            <p className="text-muted">Partnered Transporters</p>
          </div>
          <div className="col-md-4">
            <h2 className="text-danger fw-bold">98%</h2>
            <p className="text-muted">Customer Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
