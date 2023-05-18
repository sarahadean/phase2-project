import React from 'react'
import CapitalCard from './CapitalCard.js'

function CapitalList({countries, updateVisited}) {
///PATCH visited to cards, if country shows visited = true, add to Visited?


// console.log(capitals)
  return (
    <div className='cards'>
      {countries.map((el,i) => <CapitalCard key={i} country={el} currency={el.currencies} updateVisited={updateVisited}/>)}
    </div>
  )
}

export default CapitalList