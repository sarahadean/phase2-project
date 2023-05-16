import React from 'react'
import SearchBar from './SearchBar'

function Menu({search, handleSearch}) {
  return (
    <div>Menu
      <SearchBar search={search} handleSearch={handleSearch}/>
    </div>
  )
}

export default Menu