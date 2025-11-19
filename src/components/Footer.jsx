import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="pt-5 pb-3 mt-5"
      style={{
        background: "linear-gradient(135deg, #0d1117, #111827, #1e293b)",
        color: "#cbd5e1",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft Glowing Background Element */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          top: "-80px",
          right: "-80px",
          background: "rgba(96, 165, 250, 0.15)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      ></div>

      <div className="container position-relative">

        <div className="row">

          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold" style={{ color: "#60a5fa" }}>
              Aura X Traders
            </h2>
            <p className="small mt-3">
              Premium Japanese vehicle importers delivering excellence, trust,
              and high-end service for global customers. Your journey towards
              owning a superior Japanese automobile begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { name: "Home", link: "/" },
                { name: "Categories", link: "/categories" },
                { name: "About Us", link: "/about" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={item.link}
                    className="text-light text-decoration-none"
                    style={{
                      transition: "0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#60a5fa")}
                    onMouseOut={(e) => (e.target.style.color = "#cbd5e1")}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold text-white mb-3">Contact Info</h5>

            <p className="mb-2">
              📍 Maharagama, Sri Lanka
            </p>

            <p className="mb-2">
              📞 +94 71 123 4567
            </p>

            <p className="mb-3">
              ✉️ info@auraxtraders.com
            </p>

            {/* Modern Social Icons */}
            <div className="d-flex gap-3 mt-3">

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{ transition: "0.3s" }}
                className="text-light"
                onMouseOver={(e) => (e.target.style.color = "#3b82f6")}
                onMouseOut={(e) => (e.target.style.color = "#cbd5e1")}
              >
                <svg width="26" height="26" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{ transition: "0.3s" }}
                className="text-light"
                onMouseOver={(e) => (e.target.style.color = "#ec4899")}
                onMouseOut={(e) => (e.target.style.color = "#cbd5e1")}
              >
                <svg width="26" height="26" fill="currentColor">
                  <path d="M14 3H10C6 3 3 6 3 10v4c0 4 3 7 7 7h4c4 0 7-3 7-7v-4c0-4-3-7-7-7zm5 11c0 3-2 5-5 5h-4c-3 0-5-2-5-5v-4c0-3 2-5 5-5h4c3 0 5 2 5 5v4z" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="16" cy="8" r="1" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{ transition: "0.3s" }}
                className="text-light"
                onMouseOver={(e) => (e.target.style.color = "#38bdf8")}
                onMouseOut={(e) => (e.target.style.color = "#cbd5e1")}
              >
                <svg width="26" height="26" fill="currentColor">
                  <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.6 1.6-1.4 1.9-2.5-.8.5-1.8.9-2.8 1.1A4.3 4.3 0 0 0 11 9.3v.8A11.7 11.7 0 0 1 3 6.2s-4 9 5 13c-2.5 2-7 1.7-7 1.7s4 2.5 9 1.8c9-.5 14-8.3 14-15.5v-.7c1-.8 1.7-1.6 2-2.5-.7.4-1.4.6-2 .8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#334155" }} />

        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} Aura X Traders — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
