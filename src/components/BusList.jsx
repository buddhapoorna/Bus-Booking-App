
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BusList = ({ buses, onSelect }) => {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {buses.map((bus) => (
          <div key={bus.id} className="col-md-8 mb-3">
            <div className="card shadow-sm border-0">
              <div className="row g-0 align-items-center p-3">
                
                {/* Bus Image */}
                <div className="col-md-4 text-center">
                  <img
                    src={bus.image}
                    alt="Bus"
                    className="img-fluid rounded"
                    style={{ maxHeight: "100px", objectFit: "cover" }}
                  />
                </div>

                {/* Bus Details */}
                <div className="col-md-5">
                  <div className="card-body py-0">
                    <h5 className="card-title mb-1">{bus.name}</h5>
                    <p className="card-text text-muted mb-1">
                      {bus.from} → {bus.to}
                    </p>
                    <p className="card-text small text-muted">
                      Departure: {bus.departure} | Arrival: {bus.arrival}
                    </p>
                    <p className="card-text small">
                      <strong>₹{bus.price}</strong> | {bus.type}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="col-md-3 text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onSelect(bus)}
                  >
                    View Details
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;


