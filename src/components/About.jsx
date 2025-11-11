import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted fs-5">
          Trusted Partner for Premium Japanese Vehicle Imports
        </p>
      </div>

      {/* About Content */}
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
            alt="Japanese Cars"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h3 className="fw-semibold mb-3">Who We Are</h3>
          <p className="text-secondary">
            We specialize in importing top-quality vehicles directly from Japan —
            from reliable sedans and SUVs to performance sports cars. Our goal is
            to make Japanese vehicles accessible globally with transparency,
            trust, and excellence.
          </p>

          <h3 className="fw-semibold mt-4 mb-3">Our Mission</h3>
          <p className="text-secondary">
            To provide customers with hand-picked, inspected vehicles at
            competitive prices while ensuring a smooth and trustworthy import
            experience. We aim to connect you with Japan’s finest automotive
            engineering, all while maintaining unmatched service quality.
          </p>

          <a href="/contact" className="btn btn-primary mt-3">
            Contact Us
          </a>
        </div>
      </div>

      {/* Vision / Extra Info */}
      <div className="mt-5 text-center">
        <h3 className="fw-semibold mb-3">Why Choose Us?</h3>
        <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          • Direct sourcing from certified Japanese dealers<br />
          • Vehicle inspection reports for transparency<br />
          • Worldwide shipping and documentation support<br />
          • Decades of experience in the auto import industry
        </p>
      </div>
    </div>
  );
};

export default About;
