import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Logos
import Suzuki from "../images/logos/Suzuki.png";
import Honda from "../images/logos/Honda.png";
import Toyota from "../images/logos/Toyota.png";
import Nissan from "../images/logos/Nissan.png";
import Mazda from "../images/logos/Mazda.png";
import Lexus from "../images/logos/Lexus.png";
import Daihatsu from "../images/logos/Daihatsu.png";
import Subaru from "../images/logos/Subaru.png";

const Categories = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const brands = [
    { name: "Toyota", logo: Toyota, path: "/vehicles/Toyota" },
    { name: "Honda", logo: Honda, path: "/vehicles/Honda" },
    { name: "Suzuki", logo: Suzuki, path: "/vehicles/Suzuki" },
    { name: "Nissan", logo: Nissan, path: "/vehicles/Nissan" },
    { name: "Mazda", logo: Mazda, path: "/vehicles/Mazda" },
    { name: "Lexus", logo: Lexus, path: "/vehicles/Lexus" },
    { name: "Daihatsu", logo: Daihatsu, path: "/vehicles/Daihatsu" },
    { name: "Subaru", logo: Subaru, path: "/vehicles/Subaru" },
  ];

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
        <h1 className="fw-bold display-4">Our Premium Brands</h1>
        <p className="fs-5 mt-3" style={{ maxWidth: "700px" }}>
          Explore our carefully selected Japanese car brands, sourced with quality and excellence in mind.
        </p>
      </section>

      {/* ====== BRANDS SECTION ====== */}
      <div className="container py-5">
        <div className="row g-4">
          {brands.map((brand, index) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link to={brand.path} className="text-decoration-none">
                <div
                  className="card border-0 shadow rounded overflow-hidden category-card position-relative"
                  style={{
                    height: "240px",
                    backgroundColor: "#0f172a",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  }}
                >
                  {/* Logo */}
                  <div className="position-relative z-2">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="img-fluid mb-3"
                      style={{ maxHeight: "80px", objectFit: "contain" }}
                    />
                    <h5 className="fw-bold text-white text-center">{brand.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ====== CUSTOM STYLES ====== */}
      <style>
        {`
          .category-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Categories;
