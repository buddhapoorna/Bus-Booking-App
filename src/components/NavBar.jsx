import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css"; 
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
      <div className="container">
        
        <Link className="navbar-brand fw-bold fs-6" to="/" style={{ fontFamily: "cursive" }}>
          Bus Booking
        </Link>
         <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

          <li className="nav-item">
              <Link className="nav-link text-black" to="/"xxxxx>Home</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link text-black" to="/about">About</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link text-black" to="/help">Help</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link text-black" to="/contact">Contact</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link text-danger fw-bold" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
