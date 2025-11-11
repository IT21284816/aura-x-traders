import React, { useState } from "react";
import { useParams } from "react-router-dom";
import vehicleData from "./data/vehicleData";
import "bootstrap/dist/css/bootstrap.min.css";

const VehicleData = () => {
  const { brand } = useParams();       // ✅ get brand from URL
  const vehicles = vehicleData[brand]; // ✅ get vehicles from data file

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>No vehicles found for {brand}</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Page Title */}
      <h1 className="fw-bold text-center mb-5">{brand} Vehicles</h1>

      {/* Vehicle Grid */}
      <div className="row g-4">
        {vehicles.map((v, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <div className="card border-0 shadow-sm h-100 hover-card">
              <img
                src={v.img}
                alt={v.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold">{v.name}</h5>
                <p className="text-muted small">{v.desc.slice(0, 60)}...</p>
                <p className="fw-semibold text-primary">{v.price}</p>

                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setSelectedVehicle(v)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVehicle && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{selectedVehicle.name}</h5>
                <button className="btn-close" onClick={() => setSelectedVehicle(null)}></button>
              </div>

              <div className="modal-body">
                <img
                  src={selectedVehicle.img}
                  alt={selectedVehicle.name}
                  className="img-fluid rounded mb-3"
                />
                <p>{selectedVehicle.desc}</p>
                <p className="fw-bold text-primary fs-5">
                  Price: {selectedVehicle.price}
                </p>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedVehicle(null)}>
                  Close
                </button>
                <button className="btn btn-primary">Enquire Now</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default VehicleData;
