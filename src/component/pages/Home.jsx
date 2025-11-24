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
            <div className="search-box">
              <input
                type="text"
                placeholder="Software Engineer, Internship, Remote"
              />
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

         <aside className="Home-sidebar">d

         </aside>
        <div className="Home-main">x</div>
       </div>
      </div>
    </div>
  );
};

export default Home;
