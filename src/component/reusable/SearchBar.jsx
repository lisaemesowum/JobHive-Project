import React, { useState } from "react";
import "../styles/Home.css";
import { Country, State, City } from "country-state-city"; // Importing Country, State, and City
const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const countries = Country.getAllCountries(); //react country libe
  const handleSearch = () => {
    onSearch({ keyword, location, company });
  };
  return (
    <>
      <div className="search-area">
        <div className="search-boxes">
          {/* keyword Search */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Software Engineer, Internship, Remote"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          {/* Location search */}
          <div className="search-box">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" style={{color:"red"}}>Select Location</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <button className="search-button" onClick={handleSearch}>
            Search Jobs
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
