import React, { useState } from 'react'

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


function Visited() {
  return (
    <div>
      <h2>Add your trip</h2>
      <form onSubmit={() => handleSubmit()}>
        <input type="text" value={form.image} onChange={(e) => updateForm(e)}> Image </input>
        <input type="text" value={form.city_name}> City name </input>
        <input type="text" value={form.country}> Country name </input>
        <input type="text" value={form.date}> Date Visited </input>
        <input type="text"value={form.memories}> Memories from your trip </input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Visited