import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BusDetails.css";

const BusDetails = ({ bus }) => {
  const navigate = useNavigate();
  const busId = bus.id; 

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

 
  useEffect(() => {
    const storedReservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${busId}`)) || [];
    setReservedSeats(storedReservedSeats);
  }, [busId]);

  const toggleSeat = (seatIndex) => {
    if (reservedSeats.includes(seatIndex)) return; 

    setSelectedSeats((prev) =>
      prev.includes(seatIndex) ? prev.filter((s) => s !== seatIndex) : [...prev, seatIndex]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

   
    const updatedReservedSeats = [...reservedSeats, ...selectedSeats];
    localStorage.setItem(`reservedSeats_${busId}`, JSON.stringify(updatedReservedSeats));

   
    navigate("/PassengerDetails", { state: { selectedSeats, busId } });
  };

  return (
    <div className="bus-details-container">
     
      <div className="bus-info">
        <img src={bus.image} alt="Bus" className="bus-image" />
        <h3>{bus.name}</h3>
        <p><strong>Departure:</strong> {bus.departure}</p>
        <p><strong>Arrival:</strong> {bus.arrival}</p>
        
      </div>

      
      <div className="seat-selection">
        <h2>Select Your Seats</h2>
        <div className="bus-layout">
          {[...Array(40)].map((_, index) => (
            <button
              key={index}
              className={`seat ${
                reservedSeats.includes(index) ? "reserved" : selectedSeats.includes(index) ? "selected" : "available"
              }`}
              onClick={() => toggleSeat(index)}
              disabled={reservedSeats.includes(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {selectedSeats.length > 0 && (
          <button className="confirm-btn" onClick={handleBooking}>
            Proceed to Passenger Details
          </button>
        )}
      </div>
    </div>
  );
};

export default BusDetails;

