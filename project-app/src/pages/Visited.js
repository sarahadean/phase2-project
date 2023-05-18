import React, { useState } from 'react'
import VisitedCard from '../components/VisitedCard'

function Visited() {

  const formOutline ={
    image: '',
    city_name:'',
    country: '',
    date: '',
    memories: ''
  }
  const [form, setForm] = useState(formOutline)

  const baseUrl = "http://localhost:3330"
  const vistedUrl = baseUrl + "/visited"
  
  function updateForm(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  // function handleSubmit(e){
  //   e.preventDefault();
  //   fetch (vistedUrl, {
  //     method: "Post",
  //     headers: {
  //       "Contente-Type": "application/json",
  //     }, body:JSON.stringify({country, flag}),
    
  //   })
  //   .then((response) => response.json())
  //   .then(({countries, }) )
  // }



  return (
    <div>
      <h2>Add your trip</h2>
      
    </div>
  )
}

export default Visited