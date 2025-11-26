import React, { useState } from "react";
import "../styles/JobCards.css";
import { CiBookmark } from "react-icons/ci";
import { FcBookmark } from "react-icons/fc";
const JobCards = ({ job, onSelect, onSave, onRemove, savedJobs = [] }) => {
  const isSaved = savedJobs.some((saved) => saved.id === job.id);

  const handleSave = (e) => {
    e.stopPropagation(); // Prevent opening details
    if (!isSaved) onSave(job); // Only save if not already saved
  };
  const handleBookmark = (e) => {
    e.stopPropagation(); // Prevent opening details
    if (isSaved) {
      onRemove?.(job.id); // Remove if saved
    } else {
      if (onSave) onSave(job);
    }
  };

  return (
    // each card the page opens with different id
    // a click handler page
    <div className="job-card">
      {/*  card body click */}
      <div
        className="job-card-body"
        onClick={() => onSelect(job)}
        style={{ cursor: "pointer" }}
      >
        <h3>{job.title}</h3>
        <p>{job.location}</p>
        <p>{job.salary}</p>
        <p>{job.experience_level}</p>
      </div>
      {/*  apply button */}
      <div className="applyJob-button">
        <button
          className="jobs-btn"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(job);
          }}
        >
          Apply now
        </button>
        {/*  saves */}
        <button
          className={`bookmark-btn ${isSaved ? "saved" : ""}`}
          onClick={handleBookmark}
          title={isSaved ? "Saved" : "Save Job"}
        >
          {isSaved ? <FcBookmark size={20} /> : <CiBookmark size={20} />}
        </button>
      </div>
    </div>
  );
};

export default JobCards;
