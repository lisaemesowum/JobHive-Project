import React from "react";
import JobCards from "./JobCards";
import "../styles/JobCards.css";
//  wrapper component that maps over an array of job and renders jobcard for the onselect function so this renders all jobs
const JobList = ({ jobs = [], onSelect, onSave, onRemove, savedJobs = [] }) => {
  return (
    <div className="joblists">
      {jobs.map((job) => (
        <JobCards
          key={job.id}
          job={job}
          onSelect={onSelect}
          onSave={onSave}
          onRemove={onRemove}
          // onApply={() => alert("open apply ui")}
          savedJobs={savedJobs}
        />
      ))}
    </div>
  );
};

export default JobList;
