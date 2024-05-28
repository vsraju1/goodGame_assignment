import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({searchVal, setSearchVal}) => {
    
  return (
    <div className='nav_container'>
        <input type="text"  id='input' placeholder='search' value={searchVal} onChange={e => setSearchVal(e.target.value)}/>  
    </div>
  )
}

export default Navbar