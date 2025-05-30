// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/PaymentPage.css"; // Add styles if needed

// const PaymentPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="payment-page">
//       <h2>Payment Page</h2>
//       <p>Proceed with payment for your ticket.</p>

//       <button className="home-btn" onClick={() => navigate("/")}>
//         Go to Home
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;




// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../styles/PaymentPage.css";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { bus, selectedSeats } = location.state || {}; // Get bus and selected seats from state
//   const [reservedSeats, setReservedSeats] = useState([]);

//   useEffect(() => {
//     if (!bus || !selectedSeats) {
//       navigate("/"); // Redirect to home if accessed directly
//     }

//     const savedReservations = localStorage.getItem(`reservedSeats-${bus?.id}`);
//     if (savedReservations) {
//       setReservedSeats(JSON.parse(savedReservations));
//     }
//   }, [bus, selectedSeats, navigate]);

//   const handlePayment = () => {
//     if (!bus || !selectedSeats) return;

//     // Reserve the seats only after payment
//     const updatedReservedSeats = [...reservedSeats, ...selectedSeats];
//     localStorage.setItem(`reservedSeats-${bus.id}`, JSON.stringify(updatedReservedSeats));

//     alert("Payment Successful! Your seats have been reserved.");
//     navigate("/"); // Redirect to home page after payment
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Page</h2>
//       <p>Bus: {bus?.name}</p>
//       <p>Selected Seats: {selectedSeats?.map((s) => s + 1).join(", ")}</p>
//       <p>Total Price: ₹{selectedSeats?.length * bus?.price}</p>

//       <button className="pay-btn" onClick={handlePayment}>
//         Proceed to Pay
//       </button>
//     </div>
//   );
// };

// export default Payment;



/*
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bus, selectedSeats } = location.state || {}; // Get bus & seats from state
  const [reservedSeats, setReservedSeats] = useState([]);

  useEffect(() => {
    if (!bus || !selectedSeats) {
      navigate("/"); // Redirect to home if accessed directly
    }
  }, [bus, selectedSeats, navigate]);

  const handleGoHome = () => {
    if (!bus || !selectedSeats) return;

    // Reserve the seats only after payment
    const updatedReservedSeats = [...(JSON.parse(localStorage.getItem(`reservedSeats-${bus.id}`)) || []), ...selectedSeats];

    localStorage.setItem(`reservedSeats-${bus.id}`, JSON.stringify(updatedReservedSeats));

    alert("Payment Successful! Your seats have been reserved.");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p>Bus: {bus?.name}</p>
      <p>Selected Seats: {selectedSeats?.map((s) => s + 1).join(", ")}</p>
      <p>Total Price: ₹{selectedSeats?.length * bus?.price}</p>

      <button className="pay-btn" onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentPage;*/

/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentPage.css"; // Add styles if needed

const PaymentPage = ({ selectedSeats, onPaymentSuccess }) => {
  const navigate = useNavigate();
  
  // Payment form state
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  // Handle Payment Submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // ✅ Simulate seat reservation logic
    onPaymentSuccess(selectedSeats);

    // ✅ Redirect to Home Page after payment
    navigate("/");
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <p>Enter your payment details to confirm your booking.</p>

      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <input
          type="text"
          name="cardName"
          placeholder="Cardholder Name"
          value={paymentDetails.cardName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handleChange}
          maxLength="16"
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry (MM/YY)"
          value={paymentDetails.expiry}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handleChange}
          maxLength="3"
          required
        />
        
        <button type="submit" className="submit-btn">
          Submit Payment
        </button>
      </form>

      <button className="home-btn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentPage;
*/






// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/PaymentPage.css"; // Add styles if needed

// const PaymentPage = ({ selectedSeats }) => {
//   const navigate = useNavigate();
  
//   // Payment form state
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardName: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   // Handle form input change
//   const handleChange = (e) => {
//     setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
//   };

//   // Handle Payment Submission
//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();

//     // ✅ Get already reserved seats from localStorage
//     const reservedSeats = JSON.parse(localStorage.getItem("reservedSeats")) || [];

//     // ✅ Merge new reserved seats with existing ones
//     const updatedReservedSeats = [...reservedSeats, ...selectedSeats];

//     // ✅ Save back to localStorage
//     localStorage.setItem("reservedSeats", JSON.stringify(updatedReservedSeats));

//     alert("Payment successful! Your seat(s) are now reserved.");

//     // ✅ Redirect to Home Page
//     navigate("/");
//   };

//   return (
//     <div className="payment-page">
//       <h2>Payment Page</h2>
//       <p>Enter your payment details to confirm your booking.</p>

//       <form className="payment-form" onSubmit={handlePaymentSubmit}>
//         <input
//           type="text"
//           name="cardName"
//           placeholder="Cardholder Name"
//           value={paymentDetails.cardName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="cardNumber"
//           placeholder="Card Number"
//           value={paymentDetails.cardNumber}
//           onChange={handleChange}
//           maxLength="16"
//           required
//         />
//         <input
//           type="text"
//           name="expiry"
//           placeholder="Expiry (MM/YY)"
//           value={paymentDetails.expiry}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="cvv"
//           placeholder="CVV"
//           value={paymentDetails.cvv}
//           onChange={handleChange}
//           maxLength="3"
//           required
//         />
        
//         <button type="submit" className="submit-btn">
//           Submit Payment
//         </button>
//       </form>

//       <button className="home-btn" onClick={() => navigate("/")}>
//         Go to Home
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;





/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentPage.css"; 

const PaymentPage = ({ selectedSeats }) => {
  const navigate = useNavigate();

  // Payment form state
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  // Handle payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // ✅ Fetch already reserved seats
    const reservedSeats = JSON.parse(localStorage.getItem("reservedSeats")) || [];

    // ✅ Merge selected seats with reserved seats
    const updatedReservedSeats = [...reservedSeats, ...selectedSeats];

    // ✅ Save updated reserved seats
    localStorage.setItem("reservedSeats", JSON.stringify(updatedReservedSeats));

    alert("Payment successful! Your seat(s) are now reserved.");

    // ✅ Redirect to Home Page
    navigate("/");
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <p>Enter your payment details to confirm your booking.</p>

      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <input
          type="text"
          name="cardName"
          placeholder="Cardholder Name"
          value={paymentDetails.cardName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handleChange}
          maxLength="16"
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry (MM/YY)"
          value={paymentDetails.expiry}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handleChange}
          maxLength="3"
          required
        />
        
        <button type="submit" onClick={handlePaymentSubmit} className="submit-btn">
          Submit Payment
        </button>
      </form>

      <button className="home-btn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentPage;*/










import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Safely retrieve selectedSeats from state
  const selectedSeats = location.state?.selectedSeats || [];

  // ✅ Payment form state
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  // ✅ Handle payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // 🔹 Ensure selectedSeats is an array before proceeding
    if (!Array.isArray(selectedSeats) || selectedSeats.length === 0) {
      alert("No seats selected for booking!");
      return;
    }

    // ✅ Fetch already reserved seats from localStorage
    const reservedSeats = JSON.parse(localStorage.getItem("reservedSeats")) || [];

    // ✅ Merge selected seats with reserved seats
    const updatedReservedSeats = [...reservedSeats, ...selectedSeats];

    // ✅ Save updated reserved seats
    localStorage.setItem("reservedSeats", JSON.stringify(updatedReservedSeats));

    alert("Payment successful! Your seat(s) are now reserved.");

    // ✅ Redirect to Home Page
    navigate("/");
  };


  // const handlePaymentSubmit = (selectedSeats, busId) => {
  //   // Save reserved seats for the specific bus
  //   const reservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${busId}`)) || [];
  //   const updatedReservedSeats = [...reservedSeats, ...selectedSeats];
  //   localStorage.setItem(`reservedSeats_${busId}`, JSON.stringify(updatedReservedSeats));
  
  //   alert("Payment successful! Your seat(s) are now reserved.");
  // };
  

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <p>Enter your payment details to confirm your booking.</p>

      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <input
          type="text"
          name="cardName"
          placeholder="Cardholder Name"
          value={paymentDetails.cardName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handleChange}
          maxLength="16"
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry (MM/YY)"
          value={paymentDetails.expiry}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handleChange}
          maxLength="3"
          required
        />
        
        <button type="submit" className="submit-btn">
          Submit Payment
        </button>
      </form>

      <button className="home-btn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentPage;







/*

import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { selectedSeats, passengers } = location.state || {}; // Retrieve selectedSeats and passengers from state

  const handlePaymentSubmit = () => {
    // Assume we know the bus ID (for example purposes)
    const busId = "bus1"; // This should come from the previous steps
    const reservedSeats = JSON.parse(localStorage.getItem(`reservedSeats_${busId}`)) || [];

    // Update the reserved seats for this bus
    const updatedReservedSeats = [...reservedSeats, ...selectedSeats];
    localStorage.setItem(`reservedSeats_${busId}`, JSON.stringify(updatedReservedSeats));

    alert("Payment successful! Your seat(s) are now reserved.");
  };

  return (
    <div className="payment-page">
      <h3>Payment Details</h3>
      <p>Selected Seats: {selectedSeats.join(", ")}</p>
      <button onClick={handlePaymentSubmit}>Submit Payment</button>
    </div>
  );
};

export default PaymentPage;

*/
