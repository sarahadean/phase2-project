import React, { useState } from 'react'

// {
//   "flags": {
//       "png": "https://flagcdn.com/w320/kw.png",
//       "svg": "https://flagcdn.com/kw.svg",
//       "alt": "The flag of Kuwait is composed of three equal horizontal bands of green, white and red, with a black trapezium superimposed on the hoist side of the field. This trapezium has its base on the hoist end and spans about one-fourth the width of the field."
//   },
//   "name": {
//       "common": "Kuwait",
//       "official": "State of Kuwait",
//       "nativeName": {
//           "ara": {
//               "official": "دولة الكويت",
//               "common": "الكويت"
//           }
//       }
//   },
//   "currencies": {
//       "KWD": {
//           "name": "Kuwaiti dinar",
//           "symbol": "د.ك"
//       }
//   },
//   "capital": [
//       "Kuwait City"
//   ],
//   "region": "Asia",
//   "languages": {
//       "ara": "Arabic"
//   },
//   "continents": [
//       "Asia"
//   ]
// },

// ********TASK: SHOW CURRENCIES FOR EACH COUNTRY


function CapitalCard({country, currency}) {

  const [isToggled, setToggle] = useState(false)

  // let currencyName = Object.values(currency)[0].name

  // console.log(currency)
  const {flags: {png}, flags: {alt}, name: {common}, capital, continents} = country

  const {name, symbol} = currency


  ///pass down visited state so post request can add country to list
const handleVisit = () => {
  setToggle(prev => !prev)
  fetch(`http://localhost:3330/visited/`,{
    method: 'POST',
    body: JSON.stringify({...country}),
    header: {'content-type':'application/json'}
  })
  .then(r => r.json())
  .then(data => setVisited(data))
}

  return (
    <div className='card'>

      <span className='flag'>
        <img className='flag' src={png} alt={alt}/>
      </span>
      <h3>{common}</h3>
      <ul className='country-info'>
      <li>Capital:{capital}</li>
      <li>Currencies:{symbol}</li>
      <li>{continents}</li>
      {/* <li>{region}</li> */}
      </ul>
      <button id="visited" className='button' onClick={() => handleVisit()}> {isToggled? "Visited" : "Mark as Visited"}</button>
      <button id="add_to_bucket" className='button'>Add to Bucket List</button>

    </div>
  )
}

export default CapitalCard