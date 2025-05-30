

/*
import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="From" 
        value={from} 
        onChange={(e) => setFrom(e.target.value)} 
      />
      
      <input 
        type="text" 
        placeholder="To" 
        value={to} 
        onChange={(e) => setTo(e.target.value)} 
      />

      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />

      <button onClick={() => onSearch(from, to, date)}>Search</button>
    </div>
  );
};

export default SearchBar;*/

/*import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="search-container">
      <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={() => onSearch(from, to, date)}>Search</button>
    </div>
  );
};

export default SearchBar;*/




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/SearchBar.css";

// const SearchBar = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [date, setDate] = useState("");
//   const navigate = useNavigate(); // Hook to navigate to another page

//   const handleSearch = () => {
//     if (!from || !to || !date) {
//       alert("Please fill all fields!");
//       return;
//     }
    
//     // Navigate to the search results page with query parameters
//     navigate(`/search-results?from=${from}&to=${to}&date=${date}`);
//   };

//   return (
//     <div className="search-container">
//       <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
//       <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
//       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;












// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/SearchBar.css";

// const SearchBar = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [date, setDate] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!from || !to || !date) {
//       alert("Please fill all fields!");
//       return;
//     }
//     navigate(`/search-results?from=${from}&to=${to}&date=${date}`);
//   };

//   return (
//     <div className="home">
//       {/* Hero section with background image */}
//       <section className="hero-section">
//         <div className="overlay">
//           <div className="search-container">
//             <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
//             <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
//             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//             <button onClick={handleSearch}>Search</button>
//           </div>
//         </div>
//       </section>

//       {/* Below section */}
//       <section className="below-section">
//         <h2>Explore Our Services</h2>
//         <p>Find the best routes and travel comfortably.</p>
//       </section>
//     </div>
//   );
// };

// export default SearchBar;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields!");
      return;
    }
    navigate(`/search-results?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="home">
      
      <section className="hero-section">
        <div className="overlay">
          <div className="search-container">
            <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
            <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>
      
        <br/>
        <br/>
        <br/>
   
      <section className="below-section">
        <h2>Bus Booking Discount offers</h2>
        <p>Explore Now</p>

      
        <div className="discount-container">
          <div className="discount-box">
            <img className="home-img" src="https://static.abhibus.com/offerbanners/Nov2024/16/1731757944-Wedding720x360.webp"></img><br/>
            🎉 20% Off on First Booking</div>
          <div className="discount-box">
            <img className="home-img" src="https://static.abhibus.com/offerbanners/Jan2025/30/1738222552-KumbhMela-720x360.webp"></img><br/>
            🔥 Flash Sale: 50% Off Today</div>
          <div className="discount-box">
            <img className="home-img" src="https://static.abhibus.com/offerbanners/Oct2024/28/1730118452-ICICI720x360.webp"></img><br/>
            💳 Get 10% Cashback on Payments</div>
          <div className="discount-box">
            <img className="home-img" src="https://static.abhibus.com/offerbanners/Oct2024/28/1730118452-ICICI720x360.webp"></img><br/>
            🎁 Refer & Earn ₹100 Bonus</div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
       
        <h2>Government Buses</h2>
        <p>Book Bus Tickets From SRTC (State Road Transport Corporation)</p>
        <div className="transport-container">
          <div className="transport-box">
            <img className="transport-img" src="https://s3.rdbuz.com/web/images/homeV2/10283.png"></img><br/>
            APSRTC
            <p></p>
            </div>
          <div className="transport-box">
            <img className="transport-img" src="https://s3.rdbuz.com/web/images/homeV2/18491.png"></img><br/>
            TSRTC</div>
          <div className="transport-box">
            <img className="transport-img" src="https://s3.rdbuz.com/web/images/homeV2/28011.png"></img><br/>
            KeralaRTC</div>
          <div className="transport-box">
            <img className="transport-img" src="https://static.abhibus.com/web/media/operators/gsrtc.webp"></img><br/>
            GSRTC</div>
          <div className="transport-box">
            <img className="transport-img" src="https://static.abhibus.com/web/media/operators/rsrtc.webp"></img><br/>
            RSRTC</div>
          <div className="transport-box">
            <img className="transport-img" src="https://static.abhibus.com/web/media/operators/hsrtc.webp"></img><br/>
            HRTC</div>
            <div className="transport-box">
            <img className="transport-img" src="https://static.abhibus.com/web/media/operators/hsrtc.webp"></img><br/>
            OSRTC</div>
        </div>
      </section>
      <br/>
 
     
    </div>
  );
};

export default SearchBar;





  