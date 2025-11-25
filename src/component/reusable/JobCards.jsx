import React from "react";
import "../styles/JobCards.css"
// for the home diplay and and if you click taking you to the details
const JobCards = ({ job, onSelect }) => {
  return (
    // each card the page opens with different id
    // a click handler page
    <div className="job-card">
      {/*  card body click */}
      <div className="job-card-body" onClick={()=> onSelect(job)} style={{cursor: "pointer"}}>
        <h3>{job.title}</h3>
        <p>{job.location}</p>
        <p>{job.salary}</p>
        <p>{job.experience_level}</p>
      </div>
      {/*  apply button */}
      <button
        className="jobs-btn"
        onClick={(e) => {
          e.stopPropagation;
          onSelect(job);
        }}
      >
        Apply now
      </button>
    </div>
  );
};

export default JobCards;
