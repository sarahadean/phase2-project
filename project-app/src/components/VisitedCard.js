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
    updatePassport()
  }
    
  return (
    <div className='visited-card'>
        <span>
        <img src={flag} alt={country}/>
        <h3>{country}</h3>
        </span>
        <form className='visited-form'>
            <label>Date of Trip:</label>
            <input
            type="text" 
            value={form.date}
            onChange={(e) => updateForm(e)}></input>

            <label>Cities and Sites Visited:</label>
            <input 
            type="text"
            name="cities"
            onChange={(e) => updateForm(e)}></input>

            <label>Write more about your trip:</label>
            <input
            value={form.memories}
            name="memories" ></input>

            <label>Add a picture:</label>
            <input
            value={form.image}
            name="image"
            onChange={(e) => updateForm(e)}></input>
            <button>Edit</button>
            <button>Delete</button>
        </form>
    </div>
  )
}

export default VisitedCard