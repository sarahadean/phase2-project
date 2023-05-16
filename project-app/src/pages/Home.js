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

  const handleSearch = (newStr) => {
    setSearch(newStr)
  }

  const displayedCapitals = capitals.filter((el) => 
  el.name.common.toLowerCase().includes(search.toLowerCase())
  )

    return (
      <div>HOME PAGE
        <Menu search={search} handleSearch={handleSearch}/>
        <CapitalList capitals={displayedCapitals}/>
      </div>
    )
  }
export default Home