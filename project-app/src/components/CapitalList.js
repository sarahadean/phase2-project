import React from 'react'
import CapitalCard from './CapitalCard.js'

function CapitalList({capitals}) {

console.log(capitals)
  return (
    <div className='cards'>
      {capitals.map((el,i) => <CapitalCard key={i} capitalInfo={el}/>)}
    </div>
  )
}

export default CapitalList