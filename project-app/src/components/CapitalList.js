import React, { useState } from 'react'
import CapitalCard from './CapitalCard.js'

function CapitalList({countries, updateVisited}) {
const [favorites, setFavorites] = useState([])

function updateFavs(){
  setFavorites(favorites)
}

// console.log(capitals)
  return (
    <div className='cards'>
      {countries.map((el,i) => <CapitalCard key={i} country={el} currency={el.currencies} updateVisited={updateVisited} updateFavs={updateFavs}/>)}
    </div>
  )
}

export default CapitalList