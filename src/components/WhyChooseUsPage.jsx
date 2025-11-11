import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUsPage = () => {
  const reasons = [
    {
      icon: "✅",
      title: "Trusted Japanese Vehicles",
      desc: "We source only high-quality Japanese imports that meet strict standards for reliability and performance.",
    },
    {
      icon: "💼",
      title: "Professional Service",
      desc: "Our team guides you through the entire process from auction selection to delivery with complete transparency.",
    },
    {
      icon: "🌍",
      title: "Global Shipping",
      desc: "We handle worldwide shipping efficiently, ensuring your vehicle arrives safely and on time.",
    },
    {
      icon: "🛡️",
      title: "Full Inspection & Warranty",
      desc: "Every vehicle is thoroughly inspected and comes with a documented quality check for your peace of mind.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      desc: "Get fair pricing with no hidden costs. We help you maximize value for money when buying Japanese vehicles.",
    },
    {
      icon: "🛠️",
      title: "Customization & Support",
      desc: "We provide vehicle customization, after-sales support, and spare parts sourcing tailored to your needs.",
    },
  ];

  const styles = `
    .why-choose-section {
      background: linear-gradient(135deg, #fefefe, #e6f0ff);
    }
    .reason-card {
      border: none;
      border-radius: 15px;
      padding: 2rem 1rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: white;
    }
    .reason-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    .reason-icon {
      font-size: 3rem;
      color: #0d6efd;
      margin-bottom: 1rem;
    }
    .reason-title {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .reason-desc {
      font-size: 0.95rem;
      color: #6c757d;
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <section className="why-choose-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-3">
            Why Choose Aura X Traders?
          </h2>
          <p className="text-center text-muted mb-5">
            Trusted, professional, and dedicated to delivering premium Japanese vehicles worldwide.
          </p>

          <div className="row g-4">
            {reasons.map((reason, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card reason-card text-center h-100 shadow-sm">
                  <div className="reason-icon">{reason.icon}</div>
                  <h5 className="reason-title">{reason.title}</h5>
                  <p className="reason-desc">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsPage;
