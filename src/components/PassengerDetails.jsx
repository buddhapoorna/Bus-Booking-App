/*import React, { useState } from "react";
import "../styles/PassengerDetails.css";

const PassengerDetails = ({ selectedSeats, onConfirm }) => {
  const [passengers, setPassengers] = useState(
    selectedSeats.map(() => ({ name: "", age: "" }))
  );

  const handleChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  return (
    <div className="passenger-details">



      <h3>Enter Passenger Details</h3>
      {selectedSeats.map((seat, index) => (
        <div key={index} className="passenger-input">
          <p>Seat {seat + 1}</p>
          <input
            type="text"
            placeholder="Name"
            value={passengers[index].name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={passengers[index].age}
            onChange={(e) => handleChange(index, "age", e.target.value)}
          />
        </div>
      ))}

      <button className="confirm-btn" onClick={() => onConfirm(passengers)}>Proceed To Pay</button>
    </div>
  );
};

export default PassengerDetails;*/







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/PassengerDetails.css";

// const PassengerDetails = ({ selectedSeats, onConfirm }) => {
//   const navigate = useNavigate();

//   const [passengers, setPassengers] = useState(
//     selectedSeats.map(() => ({ name: "", age: "" }))
//   );

//   const handleChange = (index, field, value) => {
//     const updatedPassengers = [...passengers];
//     updatedPassengers[index][field] = value;
//     setPassengers(updatedPassengers);
//   };

//   const handleConfirmBooking = () => {
//     console.log("Passengers:", passengers);

//     if (onConfirm) {
//       onConfirm(passengers);
//     } else {
//       console.error("onConfirm function is missing!");
//     }

//     // ✅ Ensure navigation works
//     navigate("/PaymentPage", { state: { selectedSeats } });
//     console.log("Navigating to Payment Page", selectedSeats);
//   };

//   return (
//     <div className="passenger-details">
//       <h3>Enter Passenger Details</h3>
//       {selectedSeats.map((seat, index) => (
//         <div key={index} className="passenger-input">
//           <p>Seat {seat + 1}</p>
//           <input
//             type="text"
//             placeholder="Name"
//             value={passengers[index].name}
//             onChange={(e) => handleChange(index, "name", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             value={passengers[index].age}
//             onChange={(e) => handleChange(index, "age", e.target.value)}
//           />
//         </div>
//       ))}

//       <button className="confirm-btn" onClick={handleConfirmBooking}>
//         Proceed To Pay
//       </button>
//     </div>
//   );
// };

// export default PassengerDetails;










// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/PassengerDetails.css";

// const PassengerDetails = ({ selectedSeats, onConfirm }) => {
//   const navigate = useNavigate();

//   const [passengers, setPassengers] = useState(
//     selectedSeats.map(() => ({ name: "", age: "" }))
//   );

//   const handleChange = (index, field, value) => {
//     const updatedPassengers = [...passengers];
//     updatedPassengers[index][field] = value;
//     setPassengers(updatedPassengers);
//   };

//   const handleConfirmBooking = () => {
//     console.log("Passengers:", passengers);
  
//     if (typeof onConfirm === "function") {
//       onConfirm(passengers);
//     } else {
//       console.error("onConfirm function is not defined!");
//     }
  
//     navigate("/PaymentPage", { state: { selectedSeats } });
//     console.log("Navigating to Payment Page", selectedSeats);
//   };
  
//   return (
//     <div className="passenger-details">
//       <h3>Enter Passenger Details</h3>
//       {selectedSeats.map((seat, index) => (
//         <div key={index} className="passenger-input">
//           <p>Seat {seat + 1}</p>
//           <input
//             type="text"
//             placeholder="Name"
//             value={passengers[index].name}
//             onChange={(e) => handleChange(index, "name", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             value={passengers[index].age}
//             onChange={(e) => handleChange(index, "age", e.target.value)}
//           />
//         </div>
//       ))}

//       <button className="confirm-btn" onClick={handleConfirmBooking}>
//         Proceed To Pay
//       </button>
//     </div>
//   );
// };

// export default PassengerDetails;







// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../styles/PassengerDetails.css";

// const PassengerDetails = () => {
//   const location = useLocation();
//   const { selectedSeats } = location.state || {}; // Retrieve selectedSeats from state

//   const [passengers, setPassengers] = useState(
//     selectedSeats.map(() => ({ name: "", age: "" }))
//   );

//   const handleChange = (index, field, value) => {
//     const updatedPassengers = [...passengers];
//     updatedPassengers[index][field] = value;
//     setPassengers(updatedPassengers);
//   };

//   const handleConfirmBooking = () => {
//     alert("Booking confirmed with passengers!");
//     // You can handle booking confirmation logic here (e.g., saving to localStorage or backend)
//   };

//   return (
//     <div className="passenger-details">
//       <h3>Enter Passenger Details</h3>
//       {selectedSeats.map((seat, index) => (
//         <div key={index} className="passenger-input">
//           <p>Seat {seat + 1}</p>
//           <input
//             type="text"
//             placeholder="Name"
//             value={passengers[index].name}
//             onChange={(e) => handleChange(index, "name", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             value={passengers[index].age}
//             onChange={(e) => handleChange(index, "age", e.target.value)}
//           />
//         </div>
//       ))}
//       <button className="confirm-btn" onClick={handleConfirmBooking}>
//         Procced to payment
//       </button>
//     </div>
//   );
// };

// export default PassengerDetails;







// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
// import "../styles/PassengerDetails.css";

// const PassengerDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate(); // Initialize navigate
//   const { selectedSeats } = location.state || {}; // Retrieve selectedSeats from state

//   const [passengers, setPassengers] = useState(
//     selectedSeats.map(() => ({ name: "", age: "" }))
//   );

//   const handleChange = (index, field, value) => {
//     const updatedPassengers = [...passengers];
//     updatedPassengers[index][field] = value;
//     setPassengers(updatedPassengers);
//   };

//   const handleConfirmBooking = () => {
//     // Logic for confirming the booking
//     alert("Booking confirmed with passengers!");

//     // Now navigate to the Payment Page
//     navigate("/PaymentPage", { state: { selectedSeats, passengers } }); // Pass selectedSeats and passengers
//   };

//   return (
//     <div className="passenger-details">
//       <h3>Enter Passenger Details</h3>
//       {selectedSeats.map((seat, index) => (
//         <div key={index} className="passenger-input">
//           <p>Seat {seat + 1}</p>
//           <input
//             type="text"
//             placeholder="Name"
//             value={passengers[index].name}
//             onChange={(e) => handleChange(index, "name", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             value={passengers[index].age}
//             onChange={(e) => handleChange(index, "age", e.target.value)}
//           />
//         </div>
//       ))}
//       <button className="confirm-btn" onClick={handleConfirmBooking}>
//         Proceed to payment
//       </button>
//     </div>
//   );
// };

// export default PassengerDetails;






// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/PassengerDetails.css";

// const PassengerDetails = () => {
//   const location = useLocation();
//   const { selectedSeats } = location.state || {}; // Retrieve selectedSeats from state
//   const [passengers, setPassengers] = useState(
//     selectedSeats.map(() => ({ name: "", age: "" }))
//   );

//   const navigate = useNavigate();

//   const handleChange = (index, field, value) => {
//     const updatedPassengers = [...passengers];
//     updatedPassengers[index][field] = value;
//     setPassengers(updatedPassengers);
//   };

//   const handleConfirmBooking = () => {
//     alert("Booking confirmed with passengers!");
//     navigate("/payment", { state: { selectedSeats, passengers } }); // Proceed to payment page
//   };

//   return (
//     <div className="passenger-details">
//       <h3>Enter Passenger Details</h3>
//       {selectedSeats.map((seat, index) => (
//         <div key={index} className="passenger-input">
//           <p>Seat {seat + 1}</p>
//           <input
//             type="text"
//             placeholder="Name"
//             value={passengers[index].name}
//             onChange={(e) => handleChange(index, "name", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             value={passengers[index].age}
//             onChange={(e) => handleChange(index, "age", e.target.value)}
//           />
//         </div>
//       ))}
//       <button className="confirm-btn" onClick={handleConfirmBooking}>
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };

// export default PassengerDetails;




import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PassengerDetails.css";

const PassengerDetails = () => {
  const location = useLocation();
  const { selectedSeats } = location.state || {}; // Retrieve selectedSeats from state
  const [passengers, setPassengers] = useState(
    selectedSeats.map(() => ({ name: "", age: "" }))
  );

  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleConfirmBooking = () => {
    alert("Booking confirmed with passengers!");
    navigate("/paymentPage", { state: { selectedSeats, passengers } }); // Proceed to payment page
  };

  return (
    <div className="passenger-details">
      <h3>Enter Passenger Details</h3>
      {selectedSeats.map((seat, index) => (
        <div key={index} className="passenger-input">
          <p>Seat {seat + 1}</p>
          <input
            type="text"
            placeholder="Name"
            value={passengers[index].name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={passengers[index].age}
            onChange={(e) => handleChange(index, "age", e.target.value)}
          />
        </div>
      ))}
      <button className="confirm-btn" onClick={handleConfirmBooking}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default PassengerDetails;

