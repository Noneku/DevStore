import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav">
        <Link className="link" to="/login">Login</Link>

        </nav>
  )
}

export default Navbar