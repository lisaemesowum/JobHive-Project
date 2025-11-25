import React from 'react'

// for the home diplay and and if you click taking you to the details
const JobCards = (job, onselect) => {  
  return (
    // each card the page opens with different id
    // a click handler page
   <div className='job-card' onClick={()=> onselect(job)} > 
    <h3>{job.title}</h3>
    <p>{job.location}</p>
    <p>{job.salary}</p>
    <p>{job.experience_level}</p>
    <button className='jobs-btn'>Apply now</button>
    </div>
  )
}

export default JobCards
