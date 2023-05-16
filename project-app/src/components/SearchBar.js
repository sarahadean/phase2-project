import React from 'react'

function SearchBar({search, handleSearch}) {
  return (
    <div>SearchBar
      <input 
      type="text"
      id="search"
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
      />


    </div>
  
  )
}

export default SearchBar