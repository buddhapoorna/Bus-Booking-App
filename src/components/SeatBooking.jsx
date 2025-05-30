// import React, { useState } from "react";
// import "../styles/SeatBooking.css";

// const SeatBooking = ({ bus, onProceed }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeat = (seatIndex) => {
//     if (bus.seats[seatIndex]) return; // Prevent clicking on confirmed seats
//     setSelectedSeats((prev) =>
//       prev.includes(seatIndex)
//         ? prev.filter((s) => s !== seatIndex)
//         : [...prev, seatIndex]
//     );
//   };

//   return (
//     <div className="seat-booking-container">
//       <h3>Select Your Seats</h3>
//       <div className="bus-layout">
//         {bus.seats.map((seat, index) => (
//           <button
//             key={index}
//             className={`seat ${
//               seat ? "confirmed" : selectedSeats.includes(index) ? "selected" : "available"
//             }`}
//             onClick={() => toggleSeat(index)}
//             disabled={seat}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       <div className="selected-info">
//         <p>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.map((s) => s + 1).join(", ") : "None"}</p>
//         {selectedSeats.length > 0 && (
//           <button className="next-btn" onClick={() => onProceed(selectedSeats)}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;



// import React, { useState, useEffect } from "react";
// import "../styles/SeatBooking.css";

// const SeatBooking = ({ bus, onProceed }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [reservedSeats, setReservedSeats] = useState([]);

//   // Load reserved seats from local storage (optional)
 
//   useEffect(() => {
//     const storedReservedSeats = JSON.parse(localStorage.getItem("reservedSeats")) || [];
//     setReservedSeats(storedReservedSeats);
//   }, []);
  

//   // Toggle seat selection
//   const toggleSeat = (seatIndex) => {
//     if (reservedSeats.includes(seatIndex)) {
//       alert(`Seat ${seatIndex + 1} is already reserved!`);
//       return;
//     }

//     setSelectedSeats((prev) =>
//       prev.includes(seatIndex)
//         ? prev.filter((s) => s !== seatIndex)
//         : [...prev, seatIndex]
//     );
//   };

//   // Confirm and reserve seats
//   const handleProceed = () => {
    

//     onProceed(selectedSeats); // Proceed to next step (Passenger Details)
//   };

//   return (
//     <div className="seat-booking-container">
//       <h3>Select Your Seats</h3>
//       <div className="bus-layout">
//         {bus.seats.map((_, index) => (
//           <button
//             key={index}
//             className={`seat ${
//               reservedSeats.includes(index) ? "reserved" : selectedSeats.includes(index) ? "selected" : "available"
//             }`}
//             onClick={() => toggleSeat(index)}
//             disabled={reservedSeats.includes(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       <div className="selected-info">
//         <p>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.map((s) => s + 1).join(", ") : "None"}</p>
//         {selectedSeats.length > 0 && (
//           <button className="next-btn" onClick={handleProceed}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;





// import React, { useState, useEffect } from "react";
// import "../styles/SeatBooking.css";

// const SeatBooking = ({ bus, busId, onProceed }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [reservedSeats, setReservedSeats] = useState([]);

//   useEffect(() => {
//     // Retrieve reserved seats for this specific busId
//     const storedReservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${busId}`)) || [];
//     setReservedSeats(storedReservedSeats);
//   }, [busId]);

//   const toggleSeat = (seatIndex) => {
//     if (reservedSeats.includes(seatIndex)) {
//       alert(`Seat ${seatIndex + 1} is already reserved!`);
//       return;
//     }

//     setSelectedSeats((prev) =>
//       prev.includes(seatIndex)
//         ? prev.filter((s) => s !== seatIndex)
//         : [...prev, seatIndex]
//     );
//   };

//   const handleProceed = () => {
//     onProceed(selectedSeats); // Proceed to next step (Passenger Details)
//   };

//   return (
//     <div className="seat-booking-container">
//       <h3>Select Your Seats</h3>
//       <div className="bus-layout">
//         {bus.seats.map((_, index) => (
//           <button
//             key={index}
//             className={`seat ${
//               reservedSeats.includes(index) ? "reserved" : selectedSeats.includes(index) ? "selected" : "available"
//             }`}
//             onClick={() => toggleSeat(index)}
//             disabled={reservedSeats.includes(index)} // Prevent clicking reserved seats
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       <div className="selected-info">
//         <p>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.map((s) => s + 1).join(", ") : "None"}</p>
//         {selectedSeats.length > 0 && (
//           <button className="next-btn" onClick={handleProceed}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;






// import React, { useState, useEffect } from "react";
// import "../styles/SeatBooking.css";

// const SeatBooking = ({ bus, busId, onProceed }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [reservedSeats, setReservedSeats] = useState([]);

//   useEffect(() => {
//     // Load reserved seats for the specific bus from localStorage
//     const storedReservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${busId}`)) || [];
//     setReservedSeats(storedReservedSeats);
//   }, [busId]);

//   const toggleSeat = (seatIndex) => {
//     // Prevent selecting reserved seats
//     if (reservedSeats.includes(seatIndex)) {
//       alert(`Seat ${seatIndex + 1} is already reserved!`);
//       return;
//     }

//     setSelectedSeats((prev) =>
//       prev.includes(seatIndex)
//         ? prev.filter((s) => s !== seatIndex) // Deselect if already selected
//         : [...prev, seatIndex] // Select the seat
//     );
//   };

//   const handleProceed = () => {
//     onProceed(selectedSeats); // Proceed to the next step (Passenger Details)
//   };

//   return (
//     <div className="seat-booking-container">
//       <h3>Select Your Seats</h3>
//       <div className="bus-layout">
//         {bus.seats.map((_, index) => (
//           <button
//             key={index}
//             className={`seat ${
//               reservedSeats.includes(index) ? "reserved" : selectedSeats.includes(index) ? "selected" : "available"
//             }`}
//             onClick={() => toggleSeat(index)}
//             disabled={reservedSeats.includes(index)} // Disable button for reserved seats
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       <div className="selected-info">
//         <p>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.map((s) => s + 1).join(", ") : "None"}</p>
//         {selectedSeats.length > 0 && (
//           <button className="next-btn" onClick={handleProceed}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;
















import React, { useState, useEffect } from "react";
import "../styles/SeatBooking.css";

const SeatBooking = ({ bus, busId, onProceed }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  useEffect(() => {
    const storedReservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${busId}`)) || [];
    setReservedSeats(storedReservedSeats);
  }, [busId]);

  const toggleSeat = (seatIndex) => {
    if (reservedSeats.includes(seatIndex)) {
      alert(`Seat ${seatIndex + 1} is already reserved!`);
      return;
    }

    setSelectedSeats((prev) =>
      prev.includes(seatIndex) ? prev.filter((s) => s !== seatIndex) : [...prev, seatIndex]
    );
  };

  const handleProceed = () => {
    onProceed(selectedSeats);
  };

  return (
    <div className="seat-booking-container">
      {/* Left Section - Bus Details */}
      <div className="bus-info">
        <img src="data:image/jpeg;base64,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" alt="Bus" className="bus-image" />
        <h3 >{bus.name}</h3>
        <h4>Departure: {bus.departure}</h4>
        <p><strong>Arrival:</strong> {bus.arrival}</p>
        <p><strong>Fare:</strong> ₹{bus.fare}</p>
      </div>

      {/* Right Section - Seat Selection */}
      <div className="seat-selection">
        <h3>Select Your Seats</h3>
        <div className="bus-layout">
          {bus.seats.map((_, index) => (
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

        {/* Selected Seats Info */}
        <div className="selected-info">
          <p>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.map((s) => s + 1).join(", ") : "None"}</p>
          {selectedSeats.length > 0 && <button className="next-btn" onClick={handleProceed}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;




