import React, { useState } from "react";
// import "../styles/Home.css";
import "../styles/Home.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Country, State, City } from "country-state-city"; // Importing Country, State, and City
// json file
import jobs from "../data/jobs.json";
// importing the details and tje list
import JobList from "../reusable/JobList";
import JobDetails from "../reusable/JobDetails";
const Home = () => {
  const countries = Country.getAllCountries(); // Get all country objects
  // for sort by dropdown
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = useState("Date Posted"); // Default sort option
  //
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyUI, setShowApplyUI] = useState(false);
  const [showConfirmation, setConfirmation] = useState(false);

  const handleApply = () => {
    setShowApplyUI(true);
  };
  //  go back to job list
  const handleBack = () => {
    setSelectedJob(null);
    setShowApplyUI(false);
    setConfirmation(true);
  };
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
          <div className="Home-main">
            {/* main job area  */}

            <div className="home-sorting-dropdown">
              <button
                className="home-sort-btn"
                onClick={() => {
                  console.log("Clicked!");
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Sort by:{" "}
                <span>
                  {selectedSort}
                  <IoMdArrowDropdown />
                </span>
              </button>

              {/* dropdown */}
              {isDropdownOpen && (
                <div className="home-sort-dropdown">
                  <div
                    className={`home-sort-option ${
                      selectedSort === "Date Posted" ? "active" : "" // Highlight if selected
                    }`}
                    onClick={() => {
                      setSelectedSort("Date Posted");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Date Posted
                  </div>
                  <div
                    className={`home-sort-option ${
                      selectedSort === "Salary (High to low)" ? "active" : "" // Highlight if selected
                    }`}
                    onClick={() => {
                      setSelectedSort(" Salary (High to low)");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Salary (High to low)
                  </div>
                  <div
                    className={`home-sort-option ${
                      selectedSort === " Relevance Area" ? "active" : "" // Highlight if selected
                    }`}
                    onClick={() => {
                      setSelectedSort("Relevance Area");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Relevance Area
                  </div>
                </div>
              )}
            </div>

            {/* end */}
            {/* job lists */}
            <div className={`home-area ${showApplyUI ? "blurred" : ""}`}>
              {selectedJob ? (
              <JobDetails
                job={selectedJob}
                onBack={handleBack}
                onApply={handleApply}
              />
            ) : (
              <JobList jobs={jobs} onSelect={setSelectedJob} />
            )}

            {/* Job details */}
            {showApplyUI && (
             <div className="home-appy-container">
               <div className="home-apply-ui">
                <h2>Apply for {selectedJob.title}</h2>
                <form className="Home-apply-form">
                  <label>
                    Name:
                    <input type="text" placeholder="Enter your name" required />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </label>
                  <label className="home-optional">
                    Resume(optional);
                    <input type="file" />
                  </label>
                  <label>
                    Cover Letter:
                    <textarea
                      type="text"
                      placeholder="Write your cover letter.........."
                      rows={4}
                      required
                    />
                  </label>

                  <div className="home-submit">
                    <button tyoe="submit" className="home-submit-btn">
                      Submit
                    </button>
                    <button onClick={() => setShowApplyUI(false)} className="home-close">Close</button>
                  </div>
                </form>
              </div>
             </div>
            )}
            {/* confirmation model */}
            {/* {showConfirmation &&  selectedJob &&(
              <div className="home-confimation">
                <div className="home-ccon">
                  <h2>Application Submitted</h2>
                  <p>
                    Thank you for applying to {selectedJob.title} at{" "}
                    {selectedJob.company} wait for feedback from us.
                  </p>
                  <button onClick={() => setConfirmation(false)}>
                    Close
                  </button>
                </div>
              </div>
            )} */}
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
