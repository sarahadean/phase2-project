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
    <div className='card'>CapitalCard
      <ul>
      <li>Capital:{capital}</li>
      <li>Country:{common}</li>
      <li>Region:{region}</li>
      <li>Flag:{flag}</li>
      </ul>
    </div>
  )
}

export default CapitalCard