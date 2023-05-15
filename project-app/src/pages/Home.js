import React, { useState, useEffect } from 'react'


function Home() {

  const [capitals, setCapitals] = useState([])

  useEffect(getCapitals, [])

  function getCapitals(){
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flag,currencies')
    .then(resp => resp.json())
    .then(capitals => setCapitals(capitals))
  }

  console.log(capitals)

    return (
      <div>HOME PAGE
     
      </div>
    )
  }
export default Home