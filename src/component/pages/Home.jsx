import React, { useEffect, useState } from "react";
// import "../styles/Home.css";
import "../styles/Home.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Country, State, City } from "country-state-city"; // Importing Country, State, and City
// json file
import jobs from "../data/jobs.json"; //  data file;
// importing the details and tje list
import JobList from "../reusable/JobList";
import JobDetails from "../reusable/JobDetails";
import SearchBar from "../reusable/SearchBar";
const Home = () => {
  const countries = Country.getAllCountries(); // Get all country objects
  // for sort by dropdown
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = useState("Date Posted"); // Default sort option
  //
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyUI, setShowApplyUI] = useState(false);
  const [showConfirmation, setConfirmation] = useState(false);

  // state for sidebar fiters
  const [filters, setFilters] = useState({
    category: "",
    experience: "",
    jobType: "",
    remote: "",
  });
  const [searchFilters, setSearchFilters] = useState({
    keyword: "",
    location: "",
    company: "",
  });

  const handleApply = () => {
    setShowApplyUI(true);
  };
  //  go back to job list
  const handleBack = () => {
    setSelectedJob(null);
    setShowApplyUI(false);
    setConfirmation(true);
  };
  // search area
  const [filteredJob, setFilteredJob] = useState(jobs);

  const handleSearch = ({ keyword, location, company }) => {
    let result = jobs;

    // filter keyword by title OR description
    if (keyword.trim() !== "") {
      const lower = keyword.toLowerCase();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(lower) ||
          job.description.toLowerCase().includes(lower)
      );
    }

    // filter by location
    if (location.trim() !== "") {
      result = result.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // filter by company
    if (company.trim() !== "") {
      result = result.filter((job) =>
        job.company.toLowerCase().includes(company.toLowerCase())
      );
    }

    setFilteredJob(result);
  };
  //  sorting function
  useEffect(() => {
    let sorted = [...filteredJob];

    if (selectedSort === "Date Posted") {
      sorted.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
    } else if (selectedSort === "Salary (High to low)") {
      sorted.sort((a, b) => {
        const getMaxSalary = (salaryStr) => {
          if (!salaryStr) return 0;
          const parts = salaryStr.split("-"); // "₦371,000k - ₦542,000k"
          const numberPart = parts[parts.length - 1]; // take the higher salary
          const numeric = parseInt(numberPart.replace(/[^0-9]/g, ""));
          return isNaN(numeric) ? 0 : numeric;
        };
        return getMaxSalary(b.salary) - getMaxSalary(a.salary);
      });
    } else if (selectedSort === "Relevance Area") {
      sorted.sort((a, b) => a.category.localeCompare(b.category));
    }

    setFilteredJob(sorted);
  }, [selectedSort, filteredJob]);

  // filters
  useEffect(() => {
    let result = jobs;

    // Apply search filters (from your SearchBar)
    if (searchFilters.keyword) {
      result = result.filter(
        (job) =>
          job.title
            .toLowerCase()
            .includes(searchFilters.keyword.toLowerCase()) ||
          job.description
            .toLowerCase()
            .includes(searchFilters.keyword.toLowerCase())
      );
    }
    if (searchFilters.location) {
      result = result.filter((job) =>
        job.location
          .toLowerCase()
          .includes(searchFilters.location.toLowerCase())
      );
    }
    if (searchFilters.company) {
      result = result.filter((job) =>
        job.company.toLowerCase().includes(searchFilters.company.toLowerCase())
      );
    }

    // Apply sidebar filters
    if (filters.category)
      result = result.filter((job) => job.category === filters.category);
    if (filters.experience)
      result = result.filter(
        (job) => job.experience_level === filters.experience
      );
    if (filters.jobType)
      result = result.filter((job) => job.job_type === filters.jobType);
    if (filters.remote)
      result = result.filter((job) => job.remoeOption === filters.remote);

    setFilteredJob(result);
  }, [searchFilters, filters]);

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

        <div className="">
          <SearchBar onSearch={handleSearch} />
          {/* show filtered jobs */}
          {/* <JobList jobs={filteredJob} onSelect={(job) => console.log(job)} /> */}
        </div>
      </div>
      {/* find jobs category, experience, job type , remote  sidebar   */}
      <div className="Home-jobs-container">
        <div className="Home-job-grid">
          {/* sidebar */}
          <aside className="Home-sidebar">
            <fieldset className="filter-group">
              <legend>Job Category</legend>
              {[
                "IT & Software",
                "Marketing",
                "Finance",
                "Healthcare",
                "Government & Public Sector",
              ].map((cat) => (
                <label key={cat} className="home-toggle">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={filters.category === cat}
                    onChange={() =>
                      setFilters((prev) => ({ ...prev, category: cat }))
                    }
                  />
                  {cat}
                </label>
              ))}
            </fieldset>

            <fieldset className="filter-group">
              <legend>Experience level</legend>
              {["Entry", "Mid", "Senior"].map((exp) => (
                <label key={exp} className="home-toggle">
                  <input
                    type="radio"
                    name="experience"
                    value={exp}
                    checked={filters.experience === exp}
                    onChange={() =>
                      setFilters((prev) => ({ ...prev, experience: exp }))
                    }
                  />
                  {exp}
                </label>
              ))}
            </fieldset>

            <fieldset className="filter-group">
              <legend>Job Type</legend>
              {["Full-time", "Part-time", "Internship", "Contract"].map(
                (type) => (
                  <label key={type} className="home-toggle">
                    <input
                      type="radio"
                      name="jobType"
                      value={type}
                      checked={filters.jobType === type}
                      onChange={() =>
                        setFilters((prev) => ({ ...prev, jobType: type }))
                      }
                    />
                    {type}
                  </label>
                )
              )}
            </fieldset>

            <fieldset className="filter-group">
              <legend>Remote / Onsite</legend>
              {["Remote", "Onsite"].map((remote) => (
                <label key={remote} className="home-toggle">
                  <input
                    type="radio"
                    name="remote"
                    value={remote}
                    checked={filters.remote === remote}
                    onChange={() => setFilters((prev) => ({ ...prev, remote }))}
                  />
                  {remote}
                </label>
              ))}
            </fieldset>
          </aside>
          <div className="Home-main">
            {/* main job area  */}

            <div className="home-sorting-dropdown">
              <button
                className="home-sort-btn"
                onClick={() => {
                  // console.log("Clicked!");
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
                // <div className="home-sort-dropdown">
                //   <div
                //     className={`home-sort-option ${
                //       selectedSort === "Date Posted" ? "active" : "" // Highlight if selected
                //     }`}
                //     onClick={() => {
                //       setSelectedSort("Date Posted");
                //       setIsDropdownOpen(false);
                //     }}
                //   >
                //     Date Posted
                //   </div>
                //   <div
                //     className={`home-sort-option ${
                //       selectedSort === "Salary (High to low)" ? "active" : "" // Highlight if selected
                //     }`}
                //     onClick={() => {
                //       setSelectedSort(" Salary (High to low)");
                //       setIsDropdownOpen(false);
                //     }}
                //   >
                //     Salary (High to low)
                //   </div>
                //   <div
                //     className={`home-sort-option ${
                //       selectedSort === " Relevance Area" ? "active" : "" // Highlight if selected
                //     }`}
                //     onClick={() => {
                //       setSelectedSort("Relevance Area");
                //       setIsDropdownOpen(false);
                //     }}
                //   >
                //     Relevance Area
                //   </div>
                // </div>
                //
                <div className="home-sort-dropdown">
                  {[
                    "Date Posted",
                    "Salary (High to low)",
                    "Relevance Area",
                  ].map((option) => (
                    <div
                      key={option}
                      className={`home-sort-option ${
                        selectedSort === option ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedSort(option);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
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
                <JobList jobs={filteredJob} onSelect={setSelectedJob} />
              )}

              {/* Job details */}
              {showApplyUI && (
                <div className="home-appy-container">
                  <div className="home-apply-ui">
                    <h2>Apply for {selectedJob.title}</h2>
                    <form className="Home-apply-form">
                      <label>
                        Name:
                        <input
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
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
                        <button
                          onClick={() => setShowApplyUI(false)}
                          className="home-close"
                        >
                          Close
                        </button>
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
