import React, { useState } from 'react'

/* 
separate component for form
form state updates to another edit state that will persist?
setting edit state will include a post request
*/


function VisitedCard({visitEntry, updatePassport}) {
    const {country, flag } = visitEntry

    const formOutline ={
        image: '',
        cities:'',
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
    fetch('http://localhost:3330/visited',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            image: form.image,
            cities: form.cities,
            date: form.date,
            memories: form.memories
        })
    })
    .then(r => r.json())
    .then(data => {
        updatePassport(data)
        setForm(formOutline)
    })
  }
    
  return (
    <div className='visited-card'>
        <span>
        <img src={flag} alt={country}/>
        <h3>{country}</h3>
        </span>
        <form className='visited-form' onSubmit={e => handleSubmit(e)}>
            <label>Date of Trip:</label>
            <input 
            name="date"
            value={form.date}
            onChange={(e) => updateForm(e)}></input>

            <label>Cities and Sites Visited:</label>
            <input 
            name="cities"
            onChange={(e) => updateForm(e)}></input>

            <label>Write more about your trip:</label>
            <input
            value={form.memories}
            name="memories" 
            onChange={(e) => updateForm(e)}></input>

            <label>Add a picture:</label>
            <input
            value={form.image}
            name="image"
            onChange={(e) => updateForm(e)}></input>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default VisitedCard