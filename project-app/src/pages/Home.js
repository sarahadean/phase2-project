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
////sort alphabetically///////
  function sortCountries(){
    setCountries(countries.toSorted((a,b) => 
    a.name.common > b.name.common ? 1 : -1))
  }

  ///sort dropdown///
  ///if e.target.value = alphabetically, then [...countries].toSorted
  //if = continent, then a.continent > b.continent ? 1:-1
  //if = region, then a.region > b.region ? 1: -1

  ///COMMENTED OUT WHILE WORKING ON FILTER BY COUNTRY
  // function handleSort(selection){
  //   setCountries([...countries].filter(el => {
  //     if (selection === 'Alphabetically'){
  //       countries.toSorted((a,b) => 
  //       a.name.common > b.name.common ? 1 : -1)
  //   } else if (selection === 'Continent'){
  //     countries.toSorted((a,b) => 
  //   a.continent > b.continent ? 1 : -1)
  //   } else if (selection === 'Region'){
  //     countries.toSorted((a,b) => 
  //   a.region > b.region ? 1 : -1)
  //   }
  // }
  //   ))
  // }




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
        <Menu filterByRegion={filterByRegion} search={search} handleSearch={handleSearch} sortCountries={sortCountries} />
        <CapitalList countries={filteredCountries}/>
      </div>
    )
  }
export default Home