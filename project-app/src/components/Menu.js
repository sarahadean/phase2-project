import React from 'react'
import SearchBar from './SearchBar'

function Menu({search, handleSearch, filterByRegion}) {

  
  return (
    <div>
      <SearchBar search={search} handleSearch={handleSearch}/>
      <button>Sort A-Z</button>
      <label>Filter by Continent: </label>
        <select onChange={(e) => filterByRegion(e.target.value)}> 
          <option value=''> </option>
          <option value='Asia'>Asia</option>
          <option value='North America'>Americas</option>
          <option value='South America'>Americas</option>
          <option value='Africa'>Africa</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
          <option value='Antarctic'>Antarctic</option>
        </select>

    </div>
  )
}

export default Menu