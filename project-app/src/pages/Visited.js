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
  
  function updateForm(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  function handleSubmit(e){
    e.preventDefault()
  }



  return (
    <div>
      <h2>Add your trip</h2>
      
    </div>
  )
}

export default Visited