import React, { useState, useEffect } from 'react'
import CapitalList from './../components/CapitalList'
import Menu from './../components/Menu'


function Home() {

  const [capitals, setCapitals] = useState([])

  useEffect(() => {getCapitals()}, [])

  function getCapitals(){
    fetch('http://localhost:3330/capitals')
    .then(resp => resp.json())
    .then(capitals => setCapitals(capitals))
  }

  // console.log(capitals) - GET REQUEST SUCCESSFUL

    return (
      <div>HOME PAGE
        <Menu />
        <CapitalList capitals={capitals}/>
      </div>
    )
  }
export default Home