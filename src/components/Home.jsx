import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div
      id="homeCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      {/* Background Slider */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
            className="d-block w-100"
            alt="Car 1"
            style={{ height: "100vh", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
            className="d-block w-100"
            alt="Car 2"
            style={{ height: "100vh", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
            className="d-block w-100"
            alt="Car 3"
            style={{ height: "100vh", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ></div>

      {/* Centered Text Content */}
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="text-white fw-bold display-4 text-center mb-3">
          Premium Japanese Vehicles
        </h1>
        <p className="text-white fs-5 text-center mb-4">
          Discover Quality Import Cars from Japan
        </p>
        <a href="/categories" className="btn btn-primary btn-lg">
          View Categories
        </a>
      </div>
    </div>
  );
};

export default Home;
