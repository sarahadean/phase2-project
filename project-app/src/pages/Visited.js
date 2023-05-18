import React, { useState, useEffect } from 'react'
import VisitedCard from '../components/VisitedCard'

function Visited() {
  
  const [visitList, setVisitList] = useState([])


  const formOutline ={
    image: '',
    city_name:'',
    country: '',
    date: '',
    memories: ''
  }
  // const [form, setForm] = useState(formOutline)


  ///GET request for visited countries

  useEffect(() => {getVisitedCountries()},[])
  function getVisitedCountries(){
    fetch('http://localhost:3330/visited')
    .then(r => r.json())
    .then(visitList => setVisitList(visitList))
  }
  // function updateForm(e){
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   })
  // }
  
  // function handleSubmit(e){
  //   e.preventDefault()
  // }



  return (
    <div>
      <h1>Your Virtual Passport</h1>
      {visitList.map(el => <VisitedCard visitEntry={el} key={el.id}/>)}
    </div>
  )
}

export default Visited