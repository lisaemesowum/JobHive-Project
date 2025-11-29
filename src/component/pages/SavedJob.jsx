import React, { useState } from "react";
import "../styles/SavedJob.css";
import JobList from "../reusable/JobList";
import JobDetails from "../reusable/JobDetails";
const SavedJob = ({ savedJobs, setSavedJobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyUI, setShowApplyUI] = useState(false);


  // save job
  const handleSaveJob = (job) => {
    if (!savedJobs.some((saved) => saved.id === job.id)) {
      const updated = [...savedJobs, job];
      setSavedJobs(updated);
      localStorage.setItem("savedJobs", JSON.stringify(updated));
      alert(`${job.title} saved!`);
    }
  };
  const handleRemoveJob = (jobId) => {
    const updatedSaved = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updatedSaved);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSaved));
    alert("Job removed from saved!");
  };
  const handleBack = () => {
    setSelectedJob(null);
    setShowApplyUI(false);
  };
  const handleApply = () => {
    setShowApplyUI(true);
  };
  return (
    <div id="SavedJob" className="SavedJob-container">
      {" "}
      {/* Matches nav href */}
      <h1 className="savedjob-title">Saved Jobs</h1>
      {savedJobs.length === 0 ? (
        <p className="empty-message">No saved jobs yet</p>
      ) : (
        <div className={`savedjob-area ${showApplyUI ? "blurred" : ""}`}>
          {selectedJob ? (
            <JobDetails
              job={selectedJob}
              onBack={handleBack}
              onApply={handleApply}
              onSave={handleSaveJob}
              onRemove={handleRemoveJob}
              savedJobs={savedJobs}
            />
          ) : (
            <div className="savedjob-lists">
              <JobList
                jobs={savedJobs}
                onSave={handleSaveJob}
                onSelect={setSelectedJob}
                onRemove={handleRemoveJob}
                savedJobs={savedJobs}
              />
            </div>
          )}
          {showApplyUI && selectedJob && (
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
                    <input type="email" placeholder="Enter your Email" required />
                  </label>
                  <label className="home-optional">
                    Resume (optional):
                    <input type="file" />
                  </label>
                  <label>
                    Cover Letter:
                    <textarea
                      placeholder="Write your cover letter.........."
                      rows={4}
                      required
                    />
                  </label>

                  <div className="home-submit">
                    <button type="submit" className="home-submit-btn">
                      Submit
                    </button>
                    <button
                      type="button"
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
        </div>
      )}
    </div>
    
  );
};

export default SavedJob;