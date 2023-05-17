import React from 'react'
import CapitalCard from './CapitalCard.js'

function CapitalList({countries}) {
///PATCH visited to cards, if country shows visited = true, add to Visited?


// console.log(capitals)
  return (
    <div className='cards'>
      {countries.map((el,i) => <CapitalCard key={i} country={el} currency={el.currencies}/>)}
    </div>
  )
}

export default CapitalList