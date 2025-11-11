import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import vehicleData from "./data/vehicleData"; // adjust path if needed

const NewArrivals = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Get the first vehicle from each category
    const list = Object.entries(vehicleData)
      .map(([brand, cars]) => {
        if (cars.length > 0) return { ...cars[0], brand };
        return null;
      })
      .filter(Boolean);
    setVehicles(list);
  }, []);

  const handleViewDetails = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-5 fw-bold">New Arrivals</h2>

      <div className="row g-4">
        {vehicles.map((vehicle, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-3">
            <div
              className="card h-100 shadow-lg text-white position-relative card-hover"
              style={{
                backgroundImage: `url(${vehicle.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "420px", 
                cursor: "pointer",
                border: "none",
                borderRadius: "12px",
                overflow: "hidden",
              }}
              onClick={() => handleViewDetails(vehicle)}
            >
              <div
                className="card-overlay d-flex flex-column justify-content-end p-4"
                style={{
                  background: "rgba(0, 0, 0, 0.45)",
                  height: "100%",
                }}
              >
                <h4
                  className="fw-bold text-center mb-1"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                    fontSize: "1.5rem",
                  }}
                >
                  {vehicle.name}
                </h4>

                {/* Hidden button appears on hover */}
                <div
                  className="view-details-btn text-center mt-3"
                  style={{
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                >
                  <Button variant="light" size="md">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        {selectedVehicle && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedVehicle.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center">
                <img
                  src={selectedVehicle.img}
                  alt={selectedVehicle.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "400px" }}
                />
                <p>{selectedVehicle.desc}</p>
                <h5 className="text-primary fw-bold">
                  {selectedVehicle.price}
                </h5>
                <p className="text-secondary">
                  Brand: {selectedVehicle.brand}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Custom CSS */}
      <style>
        {`
          .card-hover:hover .view-details-btn {
            opacity: 1 !important;
          }

          /* Smooth zoom effect */
          .card-hover {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .card-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          }

          /* Make smaller cards on small screens */
          @media (max-width: 768px) {
            .card-hover {
              height: 320px !important;
            }
          }

          @media (max-width: 576px) {
            .card-hover {
              height: 280px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NewArrivals;
