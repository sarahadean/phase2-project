import React, { useState, useEffect } from 'react'
import CapitalList from './../components/CapitalList'
import Menu from './../components/Menu'

// "ae": {
//   "name": ["United Arab Emirates", "The United Arab Emirates"],
//   "number": "784",
//   "threeLetterCode": "ARE",
//   "twoLetterCode": "AE"

function Home() {

  const [capitals, setCapitals] = useState([])
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])


// useEffect(() => {
//  Promise.all(
//   [
//   fetch('http://localhost:3330/capitals'), 
//   fetch('http://localhost:3330/countries')
// ]).then(links => {
//   const capitalResp = links[0];
//   const countriesResp = links[0];

//   setCapitals(capitalResp)
//   setCountries(countriesResp)
// })
// }, [])
//   constPromise.all([res1.json(), res2.json()]))
// .then(([capitals, countries]) => {
// setCapitals(capitals),
// setCountries(countries)
// })
// }, [])

console.log(countries)
//FUNCTIONING 

useEffect(() => {getCapitals()},[])

  function getCapitals(){
    fetch('http://localhost:3330/capitals')
    .then(resp => resp.json())
    .then((capitals) => setCapitals(capitals))
  }

//THIS DID NOT WORK
  // function getCountries(){
  //   fetch('http://localhost:3330/countries')
  //   .then(resp => resp.json())
  //   .then(countries => setCountries(countries))
  // }

  console.log(countries)
  // console.log(capitals) - GET REQUEST SUCCESSFUL

///search functionality
  const handleSearch = (newStr) => {
    setSearch(newStr)
  }

  const displayedCapitals = capitals.filter((el) => 
  el.name.common.toLowerCase().includes(search.toLowerCase())
  )

  //filter functionality
  function filterByRegion(selectedRegion){
   [...capitals].filter(el =>
    el.region === selectedRegion ? true : false)
  }

    return (
      <div>
        <Menu filterByRegion={filterByRegion} search={search} handleSearch={handleSearch}/>
        <CapitalList capitals={displayedCapitals}/>
      </div>
    )
  }
export default Home