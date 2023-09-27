import React from 'react'
import JobCard from '../CardComponents/JobCard'

const SimilarPost = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-2">
      {props.postArequirementDetails.length > 0 ? props.postArequirementDetails.slice(0, 4).map((item, index) => {
        return (
          <div key={index} className="">
            <JobCard data={item} />
          </div>
        )
      }) : ""}
    </div>
  )
}

export default SimilarPost