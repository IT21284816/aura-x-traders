import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted fs-5">
          We’re here to help you find your next Japanese import.
        </p>
      </div>

      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow border-0 p-4">
            <h4 className="fw-semibold mb-3">Send us a message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="form-control"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-5">
          <div className="card shadow border-0 p-4 bg-dark text-white">
            <h4 className="fw-semibold mb-4">Get in Touch</h4>
            <p className="mb-3">
              <i className="bi bi-geo-alt-fill me-2"></i>
              123 Tokyo Drive, Shinjuku, Tokyo, Japan
            </p>
            <p className="mb-3">
              <i className="bi bi-telephone-fill me-2"></i>
              +81 3-1234-5678
            </p>
            <p className="mb-3">
              <i className="bi bi-envelope-fill me-2"></i>
              info@japanpremiumcars.com
            </p>

            <hr className="border-light" />

            <h5 className="fw-semibold mt-4 mb-3">Business Hours</h5>
            <p className="mb-1">Monday – Friday: 9:00 AM – 6:00 PM</p>
            <p className="mb-1">Saturday: 10:00 AM – 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
