import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import BusList from "./components/BusList";
import BusDetails from "./components/BusDetails";
import SearchResults from "./components/SearchResults";
import PassengerDetails from "./components/PassengerDetails";
import PaymentPage from "./components/PaymentPage"; 
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from"./components/Help";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

import busesData from "./data/buses";
import "./App.css";

function App() {
  const [availableBuses, setAvailableBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("seatBookings")) || {};
    const updatedBuses = busesData.map((bus) => ({
      ...bus,
      seats: savedBookings[bus.id] || Array(40).fill(false),
    }));
    setAvailableBuses(updatedBuses);
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
        <Route path="/" element={<div className="search-container-wrapper"><SearchBar /></div>} />
         {/* <Route path="/" element={<SearchBar />} />*/}
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/passengerdetails" element={<PassengerDetails />} />
          <Route path="/paymentPage" element={<PaymentPage />} /> 
          <Route path="/About" element={<About/>}/>
          <Route path="/Help" element={<Help/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;



 


