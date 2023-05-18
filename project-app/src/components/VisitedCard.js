import React from 'react'

function VisitedCard({visitEntry}) {
    const {country, flag } = visitEntry

    
  return (
    <div>
        <img src={flag} alt={country}/>
        <h3>{country}</h3>

        {/* <form>
        {/* <form onSubmit={() => handleSubmit()}> */}
        {/* <input type="text" value={form.image} onChange={(e) => updateForm(e)}> Image </input>
        <input type="text" value={form.city_name}> City name </input>
        <input type="text" value={form.country}> Country name </input>
        <input type="text" value={form.date}> Date Visited </input>
        <input type="text"value={form.memories}> Memories from your trip </input>
        <button type="submit">Add</button> 
        </form>*/}
    </div>
  )
}

export default VisitedCard