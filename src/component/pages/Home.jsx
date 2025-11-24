import React from "react";
import "../styles/Home.css";
// import { getNames } from "country-list"; // Importing country names (not used in this snippet)
import { Country, State, City } from "country-state-city"; // Importing Country, State, and City
// import { Country } from "country-state-city";
const Home = () => {
  const countries = Country.getAllCountries(); // Get all country objects
  // const states = State.getStatesOfCountry("NG"); // Get states of the NG
  // const cities = City.getCitiesOfCountry("NG", "LA"); // Get cities of the NG
  return (
    <div id="Home" className="Home-container">
      <div className="Home-content">
        <h1>Welcome to JobHive, Find your next Opportunity</h1>
        <p>
          Your gateway to exciting career opportunities. Explore jobs, connect
          with employers, and take the next step in your professional journey
          with JobHive.
        </p>

        {/* search area */}
        <div className="search-area">
          <div className="search-boxes">
            {/* keyword Search */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Software Engineer, Internship, Remote"
              />
            </div>
            {/* Location search */}
            <div className="search-box">
              <select>
                <option value="">Select Location</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Company name" />
            </div>
            <button className="search-button">Search Jobs</button>
          </div>
        </div>
      </div>
      {/* find jobs category, experience, job type , remote  sidebar   */}
      <div className="Home-jobs-container">
        <div className="Home-job-grid">
          {/* sidebar */}
          <aside className="Home-sidebar">
            <fieldset className="filter-group">
              <legend>Job Category</legend>
              {/* job category  */}

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                IT & Software
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Marketing
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Finance
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Healthcare
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Government & Public Sector
              </label>
            </fieldset>
            {/* Experience Level */}
            <fieldset className="filter-group">
              <legend>Experience level </legend>
              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Entry
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Mid
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Senior
              </label>
            </fieldset>
            {/* Jog Type */}
            <fieldset className="filter-group">
              <legend>Job Type </legend>
              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Full-time
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Part-time
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Internship
              </label>
              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Contact
              </label>
            </fieldset>
            {/*  remote / onsite */}
            <fieldset className="filter-group">
              <legend>Remote / Onsite</legend>
              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Remote
              </label>

              <label className="home-toggle">
                <input type="radio" name="role" id="" />
                Onsite
              </label>
            </fieldset>
          </aside>
          <div className="Home-main">x</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
