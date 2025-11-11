import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const slides = [
    {
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
      alt: "Car 1",
    },
    {
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      alt: "Car 2",
    },
    {
      img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      alt: "Car 3",
    },
  ];

  return (
    <Carousel fade interval={2000} controls={false} indicators={false}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.img}
            alt={slide.alt}
            style={{ height: "100vh", objectFit: "cover" }}
          />

          {/* Dark Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></div>

          {/* Text */}
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="text-white fw-bold display-4 text-center mb-3">
              Premium Japanese Vehicles
            </h1>
            <p className="text-white fs-5 text-center mb-4">
              Discover Quality Import Cars from Japan
            </p>
            <Button href="/categories" variant="primary" size="lg">
              View Categories
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Home;
