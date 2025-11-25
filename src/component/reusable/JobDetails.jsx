import React from 'react'
import "../styles/JobDetails.css"

// this the full job details
const JobDetails = ({job}) => {
// select any job details
if(!job){
  return <div className='jobDetails-warming'>
    Please Select a job to see details.
  </div>
}
  return (
    <div className='jobDetails'>
      
      
    </div>
  )
}

export default JobDetails
