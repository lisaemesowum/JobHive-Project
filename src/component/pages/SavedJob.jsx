import React from "react";
import "../styles/SavedJob.css";
import JobList from "../reusable/JobList";
const SavedJob = ({ savedJobs, setSavedJobs, onSelect }) => {
  const handleSaveJob = (job) => {
    if (!savedJobs.some((saved) => saved.id === job.id)) {
      const updated = [...savedJobs, job];
      setSavedJobs(updated);
      localStorage.setItem("savedJobs", JSON.stringify(updated));
      alert(`${job.title} saved! ✅`);
    }
  };
  const handleRemoveJob = (jobId) => {
    const updatedSaved = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updatedSaved);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSaved));
    alert("Job removed from saved! ❌");
  };
  return (
    <div id="SavedJob" className="SavedJob-container">
      {" "}
      {/* Matches nav href */}
      <h1 className="savedjob-title">Saved Jobs</h1>
      {savedJobs.length === 0 ? (
        <p className="empty-message">No saved jobs yet</p>
      ) : (
        <div className="savedjob-lists">
          <JobList
            jobs={savedJobs}
            onSave={handleSaveJob}
            onSelect={onSelect} // Optional: for viewing details
            onRemove={handleRemoveJob} // Pass a remove handler if your JobList supports it
            savedJobs={savedJobs} // For UI (e.g., show bookmark as filled)
          />
        </div>
      )}
    </div>
  );
};

export default SavedJob;
