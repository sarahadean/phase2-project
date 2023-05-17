import React, { useState, useEffect } from 'react'
import CapitalList from './../components/CapitalList'
import Menu from './../components/Menu'

// "ae": {
//   "name": ["United Arab Emirates", "The United Arab Emirates"],
//   "number": "784",
//   "threeLetterCode": "ARE",
//   "twoLetterCode": "AE"

function Home() {

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedContinent, setContinent] = useState('All')
  // const [display, setDisplay] = useState([])


useEffect(() => {getCountries()},[])

  function getCountries(){
    fetch('http://localhost:3330/countries')
    .then(resp => resp.json())
    .then((countries) => setCountries(countries))
  }

///search functionality
  const handleSearch = (newStr) => {
    setSearch(newStr)
  }

  const filteredCountries = [...countries].filter(country => 
  (country.continents[0] === selectedContinent || selectedContinent === "All") 
  &&
  (country.name.common.toLowerCase().includes(search.toLowerCase()))

  )

  // filter functionality
  // function filterByRegion(selectedRegion){
  //  [...countries].filter(el =>
  //   el.region === selectedRegion ? true : false)
  // }

  // const filterByRegion = (e) => {
  //   setContinents(e.target.value);
  //   if(e.target.value === '') {
  //     setCountries(countries)
  //   } else {
  //     setCountries(countries.filter(country =>
  //       country.continents === e.target.value))
  //   }
  // }

  //Want to display countries if continent matches e.target.value selection, show all countries if 'all' selected
  ///COMMENTED OUT AND ADDED INTO 'filteredCountries' VARIABLE
// let continentFilter = [...countries].filter(country => country.continents[0] === selectedContinent || selectedContinent === "All")
  
  ///filter by continent:
  function filterByRegion(newSel){
      setContinent(newSel)
    } 


    return (
      <div>
        <Menu filterByRegion={filterByRegion} search={search} handleSearch={handleSearch} />
        <CapitalList countries={filteredCountries} />
      </div>
    )
  }
export default Home