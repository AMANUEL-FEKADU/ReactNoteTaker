import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className="navbar">
      < Link to='/'>Home</Link>
      < Link to='/Addnotes' >Add notes</Link>
      < Link to='/Notes'>Notes</Link>
      < Link to='/DeletedNotes'>Deleted notes</Link> 
     
    </nav>
  )
}

export default Navbar
