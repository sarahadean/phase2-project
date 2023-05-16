import React from 'react'
import CapitalCard from 'project-app/src/components/CapitalList.js'

function CapitalList({capitals}) {

console.log(capitals)
  return (
    <div className='cards'>CapitalList
      <CapitalCard />
    </div>
  )
}

export default CapitalList