import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo / About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-primary">Japan Premium Cars</h4>
            <p className="text-light small mt-3">
              We specialize in sourcing and exporting high-quality Japanese
              vehicles to customers worldwide. Trusted by thousands of car
              enthusiasts and importers globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none hover-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/categories"
                  className="text-light text-decoration-none hover-link"
                >
                  Categories
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-light text-decoration-none hover-link"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-light text-decoration-none hover-link"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
              Tokyo, Japan
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              +81 3-1234-5678
            </p>
            <p className="mb-3">
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              info@japanpremiumcars.com
            </p>

            {/* Social Links */}
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-light" />
        <div className="text-center small">
          © {new Date().getFullYear()} Japan Premium Cars. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
