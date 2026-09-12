import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdTranslate } from "react-icons/md";
import { LuSpellCheck } from "react-icons/lu";
import { TiEqualsOutline } from "react-icons/ti";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";

const Header = () => {
  return (
    <div className='flex items-center justify-between pb-3'>
      <NavLink to={"/"} className='font-bold text-3xl flex items-center gap-2'>
        <HiMiniChatBubbleLeftEllipsis />
        FymChat
      </NavLink>
      <nav className='flex text-sm divide-gray-500 divide-x space-x-3'>
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
    </div>
  )
}

export default Header