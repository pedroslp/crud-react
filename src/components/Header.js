import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white">
        <ul className="flex">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/add'>Add</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
