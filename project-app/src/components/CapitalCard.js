import React from 'react'

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

function CapitalCard({country}) {

  const {flags: {png}, flags: {alt}, name: {common}, capital, region, continents} = country

  return (
    <div className='card'>

      <span className='flag'>
        <img src={png} alt={alt}/>
      </span>
      <ul className='country-info'>
      <li>Country:{common}</li>
      <li>Capital:{capital}</li>
      <li>{continents}</li>
      <li>{region}</li>
      </ul>
      <button id="visited" className='button'>Visited!</button>
      <button id="add_to_bucket" className='button'>Add to Bucket List</button>

    </div>
  )
}

export default CapitalCard