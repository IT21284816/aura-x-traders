import React from "react";
import { Link } from "react-router-dom"; // <-- import for navigation
import "bootstrap/dist/css/bootstrap.min.css";

const Categories = () => {
  // Car brands and logos
  const brands = [
    {
      name: "Toyota",
      logo: "https://1000logos.net/wp-content/uploads/2018/02/Toyota-logo.png",
      path: "/vehicles/Toyota",
    },
    {
      name: "Honda",
      logo: "https://live.staticflickr.com/3453/3747525628_5f0fab0ba0_b.jpg",
      path: "/vehicles/Honda",
    },
    {
      name: "Suzuki",
      logo: "https://pngimg.com/d/suzuki_PNG12291.png",
      path: "/vehicles/Suzuki",
    },
    {
      name: "Nissan",
      logo: "https://images.seeklogo.com/logo-png/9/2/nissan-logo-png_seeklogo-99769.png",
      path: "/vehicles/Nissan",
    },
    {
      name: "Mazda",
      logo: "https://pngimg.com/d/car_logo_PNG1654.png",
      path: "/vehicles/Mazda",
    },
    {
      name: "Lexus",
      logo: "https://vincar.com.vn/wp-content/uploads/2025/03/logo-lexus.png",
      path: "/vehicles/Lexus",
    },
    {
      name: "Daihatsu",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Daihatsu-Logo.png",
      path: "/vehicles/Daihatsu",
    },
    {
      name: "Subaru",
      logo: "https://di-uploads-pod47.dealerinspire.com/subaruoftwinfalls/uploads/2023/03/Subaru-logo.jpeg",
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
