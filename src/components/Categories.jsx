import React from "react";
import { Link } from "react-router-dom"; // <-- import for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import Suzuki from "../images/logos/Suzuki.png";
import Honda from "../images/logos/Honda.png";
import Toyota from "../images/logos/Toyota.png";
import Nissan from "../images/logos/Nissan.png";
import Mazda from "../images/logos/Mazda.png";
import Lexus from "../images/logos/Lexus.png";
import Daihatsu from "../images/logos/Daihatsu.png";
import Subaru from "../images/logos/Subaru.png";




const Categories = () => {
  // Car brands and logos
  const brands = [
    {
      name: "Toyota",
      logo: Toyota,
      path: "/vehicles/Toyota",
    },
    {
      name: "Honda",
      logo: Honda,
      path: "/vehicles/Honda",
    },
    {
      name: "Suzuki",
      logo: Suzuki,
      path: "/vehicles/Suzuki",
    },
    {
      name: "Nissan",
      logo: Nissan,
      path: "/vehicles/Nissan",
    },
    {
      name: "Mazda",
      logo: Mazda,
      path: "/vehicles/Mazda",
    },
    {
      name: "Lexus",
      logo: Lexus,
      path: "/vehicles/Lexus",
    },
    {
      name: "Daihatsu",
      logo: Daihatsu,
      path: "/vehicles/Daihatsu",
    },
    {
      name: "Subaru",
      logo: Subaru,
      path: "/vehicles/Subaru",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Our Categories</h2>

      <div className="row g-4">
        {brands.map((brand, index) => (
          <div className="col-6 col-md-3" key={index}>
            <Link
              to={brand.path}
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div
                className="card border-0 text-white position-relative brand-card overflow-hidden"
                style={{
                  height: "200px",
                  backgroundImage: `url(${brand.logo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "#000",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
              >
                {/* Dark overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 brand-overlay"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    transition: "background-color 0.4s ease",
                  }}
                ></div>

                {/* Text */}
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h4 className="fw-bold text-center">{brand.name}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
