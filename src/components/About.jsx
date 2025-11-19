import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div style={{ background: "#f6f7fb" }}>
      {/* Header Section */}
      <section
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "60vh",
          background:
            "linear-gradient(to right, #020024, #090979, #009ffd)",
          padding: "20px",
        }}
        data-aos="fade-down"
      >
        <h1 className="fw-bold display-4">About Our Company</h1>
        <p className="fs-5 mt-3" style={{ maxWidth: "700px" }}>
          Delivering world-class Japanese vehicles with trust, precision, and
          unmatched expertise.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
              alt="Premium Cars"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-secondary">
              We are an international vehicle import company specializing in
              sourcing premium-quality cars directly from Japan. Our team
              carefully selects, inspects, and ships vehicles to customers
              across the globe. With years of experience, we combine automotive
              expertise with modern logistics to ensure a seamless buying
              experience.
            </p>

            <p className="text-secondary">
              Our commitment is simple: provide customers with the highest
              standard of vehicles backed by transparency, trust, and
              world-class customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-6 mb-4" data-aos="zoom-in">
            <div className="p-4 bg-white shadow rounded h-100">
              <h3 className="fw-bold mb-3">Our Mission</h3>
              <p className="text-secondary">
                To deliver carefully selected, quality-inspected Japanese
                vehicles at competitive prices — ensuring every customer receives
                a trustworthy, stress-free import experience from start to
                finish.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4" data-aos="zoom-in">
            <div className="p-4 bg-white shadow rounded h-100">
              <h3 className="fw-bold mb-3">Our Vision</h3>
              <p className="text-secondary">
                To become the global leader in Japanese vehicle imports by
                combining innovation, transparency, and unmatched dedication to
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            Why Choose Us?
          </h2>

          <div className="row">
            {[
              {
                title: "Certified Japanese Dealers",
                desc: "We partner only with trusted, certified auction houses and dealerships.",
                icon: "🚗",
              },
              {
                title: "Full Transparency",
                desc: "Every vehicle comes with inspection reports, mileage verification & history.",
                icon: "📄",
              },
              {
                title: "Worldwide Shipping",
                desc: "We handle customs, documentation, and seamless freight arrangements.",
                icon: "🌍",
              },
              {
                title: "Experienced Team",
                desc: "Decades of industry expertise ensuring smooth, risk-free importing.",
                icon: "⭐",
              },
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index} data-aos="fade-up">
                <div className="p-4 bg-light rounded shadow-sm h-100">
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-secondary small mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section
        className="text-center text-white py-5"
        style={{
          background:
            "linear-gradient(to right, #1e3c72, #2a5298)",
        }}
        data-aos="zoom-in"
      >
        <h2 className="fw-bold mb-3">Driven by Excellence</h2>
        <p className="mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
          From the first inquiry to the moment your vehicle arrives, we stand by
          you with unmatched professionalism and passion for quality.
        </p>

        <a
          href="/contact"
          className="btn btn-light fw-semibold px-4 py-2"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
