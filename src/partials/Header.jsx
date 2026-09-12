import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between pb-3'>
      <span>FymChat</span>
      <nav className='gap-6 flex'>
        <Link to="/">Grammar Checker</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/paraphrase">Paraphrase</Link>
      </nav>
    </div>
  )
}

export default Header