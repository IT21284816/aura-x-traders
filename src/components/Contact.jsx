import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div>

      {/* ====== PAGE HEADER ====== */}
      <section
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "50vh",
          background: "linear-gradient(to right, #020024, #090979, #009ffd)",
        }}
        data-aos="fade-down"
      >
        <h1 className="fw-bold display-4">Get In Touch</h1>
        <p className="fs-5 mt-3" style={{ maxWidth: "700px" }}>
          We're here to help with everything you need at Aura X Traders.
        </p>
      </section>

      {/* ====== CONTACT SECTION ====== */}
      <section className="container py-5">
        <div className="row g-5">

          {/* ====== BEAUTIFUL GLASS FORM ====== */}
          <div className="col-md-7" data-aos="fade-right">
            <div
              className="p-4 shadow-lg rounded"
              style={{
                backdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <h3 className="fw-semibold mb-4">Send Us a Message</h3>

              <form className="row g-4">

                {/* Name */}
                <div className="col-md-6 position-relative">
                  <label className="form-label fw-semibold">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6 position-relative">
                  <label className="form-label fw-semibold">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+94 71 123 4567"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Subject</label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-chat-left-text-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Inquiry subject"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <div className="col-12 mt-2">
                  <button
                    type="submit"
                    className="btn w-100 py-2 fs-5 text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa)",
                    }}
                  >
                    Send Message ✉️
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ====== CONTACT INFO CARD ====== */}
          <div className="col-md-5" data-aos="fade-left">
            <div
              className="p-4 rounded shadow-lg text-white"
              style={{
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              }}
            >
              <h3 className="fw-semibold mb-4">Contact Information</h3>

              <p className="mb-3"><strong>📍 Address:</strong> Maharagama, Sri Lanka</p>
              <p className="mb-3"><strong>📞 Phone:</strong> +94 71 123 4567</p>
              <p className="mb-3"><strong>✉️ Email:</strong> info@auraxtraders.com</p>

              <hr className="border-light" />

              <h5 className="fw-semibold mt-4">Business Hours</h5>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>

              <hr className="border-light" />

              <h5 className="fw-semibold mt-4 mb-3">Follow Us</h5>
              <div className="d-flex gap-3 fs-3">
                <i className="bi bi-facebook cursor-pointer"></i>
                <i className="bi bi-instagram cursor-pointer"></i>
                <i className="bi bi-twitter cursor-pointer"></i>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====== GOOGLE MAP SECTION ====== */}
      <section className="container mb-5" data-aos="fade-up">
        <h3 className="fw-bold text-center mb-4">Find Us on the Map</h3>
        <div className="rounded shadow overflow-hidden">
          <iframe
            title="Aura X Traders Map"
            src="https://maps.google.com/maps?q=Maharagama,%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
