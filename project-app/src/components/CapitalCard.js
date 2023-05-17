import React from 'react'

// {
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
//   "flag": "🇰🇼"
// },

function CapitalCard({capitalInfo}) {
  console.log(capitalInfo)

  const {name: {common}, capital, region, flag} = capitalInfo

  return (
    <div className='card'>
      <span className='flag'>{flag}</span>
      <ul className='country-info'>
        <li>Capital:{capital}</li>
        <li>Country:{common}</li>
        <li>Region:{region}</li>
      </ul>
      <button id='bucket-list' className="button">Bucket List</button>
      <button id='visited' className="button">Visited</button>
    </div>
  )
}

export default CapitalCard