import React from "react";
import "../styles/Home.css";
const Home = () => {
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
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
                <option>Kano</option>
                <option>Ibadan</option>
                <option>Enugu</option>
                <option>Abeokuta</option>
                <option>Benin City</option>
                <option>Jos</option>
                <option>Ilorin</option>
                <option>Owerri</option>
                <option>Calabar</option>
                
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
          </aside>
          <div className="Home-main">x</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
