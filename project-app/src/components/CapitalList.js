import React from 'react'
import CapitalCard from './CapitalCard.js'

function CapitalList({countries}) {

// console.log(capitals)
  return (
    <div className='cards'>
      {countries.map((el,i) => <CapitalCard key={i} country={el}/>)}
    </div>
  )
}

export default CapitalList