import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearch = () => {
  const [value, useValue] = useState("");
  const handleChange = (e) => {
    useValue(e.target.value);
  };
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "salad",
    "icecream",
    "soup",
  ];
  return (
    <>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
              key={index}>
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search..."
          />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PreviousSearch;
