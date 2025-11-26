import React from "react";
import "../styles/JobDetails.css";
import { CiBookmark } from "react-icons/ci";
import { FcBookmark } from "react-icons/fc";
// this the full job details
const JobDetails = ({
  job,
  onBack,
  onApply,
  onSave,
  onRemove,
  savedJobs = [],
}) => {
  // select any job details
  if (!job) {
    return (
      <div className="jobDetails-warming">
        Please Select a job to see details.
      </div>
    );
  }
  const isSaved = savedJobs.some((saved) => saved.id === job.id);

  const handleBookmark = () => {
    if (isSaved) {
      onRemove(job.id);
    } else {
      onSave(job);
    }
  };
  return (
    <div className="job-details">
      <button onClick={onBack}> Back to jobs</button>
      <div className="job-header">
        <h2 className="job-title">{job.title}</h2>
        <p className="company">{job.company}</p>
        <button
          className="bookmark-btn"
          onClick={handleBookmark}
          title={isSaved ? "Unsave Job" : "Save Job"}
        >
          {isSaved ? <FcBookmark size={20} /> : <CiBookmark size={20} />}
        </button>
      </div>

      <div className="job-meta">
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>
        <p>
          <strong>Experience Level:</strong> {job.experience_level}
        </p>
      </div>

      <div className="job-description">
        <h3>Job Description</h3>
        <p>{job.description}</p>
      </div>

      {job.responsibilities && (
        <div className="job-responsibilities">
          <h3>Responsibilities</h3>
          <ul>
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {job.requirements && (
        <div className="job-requirements">
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={onApply} className="jobapply-btn">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
