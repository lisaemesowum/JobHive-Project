import React from 'react'
import JobCards from './JobCards'

//  wrapper component that maps over an array of job and renders jobcard for the onselect function so this renders all jobs 
const JobList = ({jobs = [], onSelect}) => {
  return (
    <div className='joblists'>
      {jobs.map(job => (
        <JobCards key={job.id} job={job} onSelect={onSelect} onApply={()=>alert("open apply ui")}   />
      ))}
    </div>
  )
}

export default JobList
