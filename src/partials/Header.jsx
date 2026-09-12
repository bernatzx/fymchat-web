import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdTranslate } from "react-icons/md";
import { LuSpellCheck } from "react-icons/lu";
import { TiEqualsOutline } from "react-icons/ti";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className='flex items-center justify-between pb-3 relative'>
      <NavLink to={"/"} className='font-bold text-3xl flex items-center gap-2'>
        <HiMiniChatBubbleLeftEllipsis />
        FymChat
      </NavLink>

      {/* DESKTOP NAV */}
      <nav className='hidden md:flex text-sm divide-gray-500 divide-x space-x-3'>
        <NavLink
          to="/grammarchecker"
          className={({ isActive }) =>
            `flex gap-2 items-center pl-3 ${isActive
              ? 'font-semibold'
              : 'hover:opacity-65 text-gray-600'
            }`
          }
        >
          <LuSpellCheck className='text-lg' />
          Grammar Checker
        </NavLink>
        <NavLink
          to="/translator"
          className={({ isActive }) =>
            `flex gap-2 items-center pl-3 ${isActive
              ? 'font-semibold'
              : 'hover:opacity-65 text-gray-600'
            }`
          }
        >
          <MdTranslate className='text-lg' />
          Translator
        </NavLink>
        <NavLink
          to="/paraphrase"
          className={({ isActive }) =>
            `flex gap-2 items-center pl-3 ${isActive
              ? 'font-semibold'
              : 'hover:opacity-65 text-gray-600'
            }`
          }
        >
          <TiEqualsOutline className='text-lg' />
          Paraphrase
        </NavLink>
      </nav>

      {/* MOBILE NAV */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
        className='md:hidden text-2xl cursor-pointer text-gray-600'
      >
        {isOpen ? <IoClose /> : <TiThMenuOutline />}
      </div>

      {isOpen && (
        <nav className="absolute md:hidden top-full bg-white right-0 w-56 z-50 shadow-lg border-2 rounded-lg p-2">
          <NavLink to="/grammarchecker" onClick={closeMenu}
            className={({ isActive }) => `flex gap-3 items-center p-3 rounded-md 
            ${isActive
                ? 'font-semibold bg-gray-100'
                : 'text-gray-600 hover:bg-gray-100'
              }`
            }>
            <LuSpellCheck className="text-lg" /> Grammar Checker
          </NavLink>

          <NavLink to="/translator" onClick={closeMenu}
            className={({ isActive }) => `flex gap-3 items-center p-3 rounded-md 
            ${isActive
                ? 'font-semibold bg-gray-100'
                : 'text-gray-600 hover:bg-gray-100'
              }`
            }>
            <MdTranslate className="text-lg" /> Translator
          </NavLink>

          <NavLink to="/paraphrase" onClick={closeMenu}
            className={({ isActive }) => `flex gap-3 items-center p-3 rounded-md 
            ${isActive
                ? 'font-semibold bg-gray-100'
                : 'text-gray-600 hover:bg-gray-100'
              }`
            }>
            <TiEqualsOutline className="text-lg" /> Paraphrase
          </NavLink>
        </nav>
      )}

    </div>
  )
}

export default Header