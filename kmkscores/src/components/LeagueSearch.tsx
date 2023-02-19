import React, { useState } from "react";

function LeagueSearch() {
  const [options, setOptions] = useState<string>("league");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="search-container">
      <div className="options">
        <div
          className="options-toggle"
          style={{ left: options === "league" ? "-1px" : "77px" }}
        />
        <div className="options-item-container">
          <span
            style={{ color: options === "league" ? "black" : "#f4a340" }}
            className="options-item"
            onClick={() => {
              setOptions("league");
            }}
          >
            League
          </span>
        </div>
        <div className="options-item-container">
          <span
            style={{ color: options === "league" ? "#f4a340" : "black" }}
            className="options-item"
            onClick={() => {
              setOptions("cup");
            }}
          >
            Cup
          </span>
        </div>
      </div>
    </div>
  );
}

export default LeagueSearch;
