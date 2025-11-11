import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import vehicleData from "./data/vehicleData"; // adjust path

const VehicleScroller = ({ speed = 0.6 }) => {
  const scrollerRef = useRef(null);
  const rafRef = useRef(null);
  const [vehicles, setVehicles] = useState([]);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 1️⃣ Prepare vehicle list
  useEffect(() => {
    const list = Object.entries(vehicleData).flatMap(([brand, cars]) => {
      if (cars.length === 0) return [];
      const repeated = [...cars];
      while (repeated.length < 5)
        repeated.push(...cars.slice(0, 5 - repeated.length));
      return repeated.slice(0, 5).map((v) => ({ ...v, brand }));
    });
    setVehicles([...list, ...list]); // duplicate for seamless scroll
  }, []);

  // 2️⃣ Auto-scroll
  useEffect(() => {
    if (vehicles.length === 0) return;
    const scroller = scrollerRef.current;
    let pos = 0;
    const halfWidth = scroller.scrollWidth / 2;

    const tick = () => {
      if (!isDragging.current) {
        pos += speed;
        if (pos >= halfWidth) pos -= halfWidth;
        scroller.scrollLeft = pos;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [vehicles, speed]);

  // 3️⃣ Mouse drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeft.current = scrollerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseUp = () => (isDragging.current = false);
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // speed multiplier
    scrollerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleViewDetails = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  if (vehicles.length === 0) return null;

  const styles = `
    .vehicle-scroller-container {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 20px;
      padding: 2rem 1rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      margin: 2rem 0;
      cursor: grab;
    }
    .vehicle-card {
      border: none;
      border-radius: 15px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .vehicle-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    /* Glass modal */
    .modal-glass .modal-content {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      color: #fff;
    }
    .modal-glass .modal-header, 
    .modal-glass .modal-footer {
      border: none;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
    }
    .modal-glass .btn-secondary {
      border: 1px solid rgba(255,255,255,0.5);
      color: #fff;
    }
    .modal-glass .btn-secondary:hover {
      background: rgba(255,255,255,0.1);
      color: #fff;
    }
    .modal-glass img {
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="container-fluid py-5">
        <h2 className="text-center text-primary fw-bold mb-3">Featured Vehicles</h2>

        <div
          ref={scrollerRef}
          className="d-flex overflow-hidden px-3 vehicle-scroller-container"
          style={{ whiteSpace: "nowrap" }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {vehicles.map((vehicle, i) => (
            <div
              key={i}
              className="card vehicle-card shadow-sm mx-2 text-center"
              style={{ minWidth: "260px", flex: "0 0 auto" }}
            >
              <img
                src={vehicle.img}
                alt={vehicle.name}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
                draggable={false}
              />
              <div className="card-body">
                <h6 className="fw-bold">{vehicle.name}</h6>
                <p className="text-primary fw-semibold mb-1">{vehicle.price}</p>
                <small className="text-muted d-block mb-2">{vehicle.brand}</small>
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => handleViewDetails(vehicle)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Glass Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        dialogClassName="modal-glass"
      >
        {selectedVehicle && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedVehicle.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={selectedVehicle.img}
                alt={selectedVehicle.name}
                className="img-fluid mb-3"
              />
              <p className="text-light">{selectedVehicle.desc}</p>
              <h5 className="text-primary fw-bold">{selectedVehicle.price}</h5>
              <p className="text-light">Brand: {selectedVehicle.brand}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default VehicleScroller;
