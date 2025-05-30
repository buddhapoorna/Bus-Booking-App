/*import React from "react";
import BusList from "./BusList";

const SearchResults = ({ buses }) => {
  return (
    <div className="search-results">
      {buses.length > 0 ? (
        <BusList buses={buses} />
      ) : (
        <p className="no-buses-message">No buses found. Please try a different search.</p>
      )}
    </div>
  );
};

// ✅ Add default export
export default SearchResults;*/

/*import React from "react";
import { useLocation } from "react-router-dom";
import busesData from "../data/buses";
import BusList from "./BusList";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  const filteredBuses = busesData.filter(
    (bus) => bus.from === from && bus.to === to && bus.date === date
  );

  return (
    <div className="search-results">
      <h2>Available Buses</h2>
      {filteredBuses.length > 0 ? (
        <BusList buses={filteredBuses} />
      ) : (
        <p>No buses found for this route.</p>
      )}
    </div>
  );
};

export default SearchResults;*/




import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import busesData from "../data/buses";
import BusList from "./BusList";
import BusDetails from "./BusDetails";
import '../styles/SearchResults.css'

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  const filteredBuses = busesData.filter(
    (bus) => bus.from === from && bus.to === to && bus.date === date
  );

  const [selectedBus, setSelectedBus] = useState(null);

  return (
    <div className="search-results">
       
       <button onClick={() => navigate(-1)} className="back-button">Home</button>
       
      

      {/* Show Bus List or Details */}
      {!selectedBus ? (
        filteredBuses.length > 0 ? (
          <BusList buses={filteredBuses} onSelect={setSelectedBus} />
        ) : (
          <p>No buses found for this route.</p>
        )
      ) : (
        <BusDetails bus={selectedBus} onBack={() => setSelectedBus(null)} />
      )}
    </div>
  );
};

export default SearchResults;

