import React from "react";
import { Accordion } from "react-bootstrap"; // Import Accordion for FAQs

import "../styles/Help.css"; // Custom styles

const Help = () => {
  return (
    <div className="help-container">
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold text-danger">How Can We Help?</h1>
            <p className="lead text">
              We are here to make your experience smooth and hassle-free. Explore
              the common questions below or get in touch with our support team.
            </p>
            <button className="btn btn-danger btn-lg mt-3">Contact Support</button>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://s3.rdbuz.com/Images/webplatform/Common/rc_artboard.jpg"
              alt="Help"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container py-5">
        <h2 className="fw-bold text-center text-danger">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I book a bus?</Accordion.Header>
            <Accordion.Body>
              To book a bus, simply enter your travel details, choose your preferred bus, and proceed with the payment to confirm your booking.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I modify my booking?</Accordion.Header>
            <Accordion.Body>
              Yes, you can modify your booking by logging into your account and going to the "My Bookings" section.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What if I miss my bus?</Accordion.Header>
            <Accordion.Body>
              If you miss your bus, please reach out to our customer service for assistance. We will help you with rescheduling or refund options.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Help;
