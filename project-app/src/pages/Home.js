import React, { useState, useEffect } from 'react'
import CapitalList from './../components/CapitalList'
import Menu from './../components/Menu'


function Home() {

  const [capitals, setCapitals] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {getCapitals()}, [])

  function getCapitals(){
    fetch('http://localhost:3330/capitals')
    .then(resp => resp.json())
    .then(capitals => setCapitals(capitals))
  }

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