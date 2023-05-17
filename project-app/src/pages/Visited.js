import React from 'react'

function Visited() {
  return (
    <div>Form
      <form>
        <input type="text">City name</input>
        <input>Country name</input>
        <select>
          <option value=''></option>
          <option value='Asia'></option>
          <option value='Americas'></option>
          <option value='Africa'></option>
          <option value='Europe'></option>
          <option value='Oceania'></option>
          <option value='Antarctic'></option>
        </select>
        <input>Image</input>
      </form>
    </div>
  )
}

export default Visited