import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between pb-3'>
      <span className='font-bold text-3xl'>FymChat</span>
      <nav className='gap-6 flex text-sm'>
        <NavLink className={({isActive}) => isActive ? 'font-semibold' : 'hover:opacity-65 text-gray-600'} to="/">Grammar Checker</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-semibold' : 'hover:opacity-65 text-gray-600'} to="/translator">Translator</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-semibold' : 'hover:opacity-65 text-gray-600'} to="/paraphrase">Paraphrase</NavLink>
      </nav>
    </div>
  )
}

export default Header