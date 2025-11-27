import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { IoMdArrowDropdown } from "react-icons/io";
import jobs from "../data/jobs.json"; //  data file;
import JobList from "../reusable/JobList";
import JobDetails from "../reusable/JobDetails";
import SearchBar from "../reusable/SearchBar";
const Home = ({ savedJobs, setSavedJobs }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = useState("Date Posted"); // Default sort option
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyUI, setShowApplyUI] = useState(false);
  const [showConfirmation, setConfirmation] = useState(false);
  const [filteredJob, setFilteredJob] = useState(jobs); // search area

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

  //  search job
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

  //  filtering/sorting effect
  useEffect(() => {
    let result = jobs;

    // Apply search filters
    if (searchFilters.keyword) {
      const lowerC = searchFilters.keyword.toLowerCase();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(lowerC) ||
          job.description.toLowerCase().includes(lowerC)
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

    // Apply sorting
    if (selectedSort === "Date Posted") {
      result.sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
    } else if (selectedSort === "Salary (High to low)") {
      result.sort((a, b) => {
        const getMaxSalary = (salaryStr) => {
          if (!salaryStr) return 0;
          const parts = salaryStr.split("-");
          const numberPart = parts[parts.length - 1];
          const numeric = parseInt(numberPart.replace(/[^0-9]/g, ""));
          return isNaN(numeric) ? 0 : numeric;
        };
        return getMaxSalary(b.salary) - getMaxSalary(a.salary);
      });
    } else if (selectedSort === "Relevance Area") {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    setFilteredJob(result);
  }, [selectedSort, searchFilters, filters]);

  //  save job handler
  const handleSaveJob = (job) => {
    if (!savedJobs.some((saved) => saved.id === job.id)) {
      const updatedSaved = [...savedJobs, job];
      setSavedJobs(updatedSaved);
      localStorage.setItem("savedJobs", JSON.stringify(updatedSaved));
      alert(`${job.title} saved! `);
    }
  };
  const handleRemoveJob = (jobId) => {
    const updatedSaved = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updatedSaved);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSaved));
    alert("Job removed from saved! ❌");
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
        <div className="">
          <SearchBar onSearch={handleSearch} />
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
            {/* experience level */}
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
            {/* job type */}
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
            {/* remote */}
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
          {/*  main area */}
          <div className="Home-main">
            {/* main job area  */}
            <div className="home-sorting-dropdown">
              <button
                className="home-sort-btn"
                onClick={() => {
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
                  {[
                    "Date Posted",
                    "Salary (High to low)",
                    "Relevance Area",
                  ].map((options) => (
                    <div
                      key={options}
                      className={`home-sort-option ${
                        selectedSort === options ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedSort(options);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {options}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* job lists */}
            <div className={`home-area ${showApplyUI ? "blurred" : ""}`}>
              {selectedJob ? (
                <JobDetails
                  job={selectedJob}
                  onBack={handleBack}
                  onApply={handleApply}
                  onRemove={handleRemoveJob}
                  onSave={handleSaveJob}
                  savedJobs={savedJobs}
                />
              ) : (
                <JobList
                  jobs={filteredJob}
                  onSelect={setSelectedJob}
                  onSave={handleSaveJob}
                  savedJobs={savedJobs}
                  onRemove={handleRemoveJob}
                />
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
