import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function GrammarChecker() {
  return (
    <div className='flex justify-center py-20'>
      <div className="flex-col w-4/5 md:w-3/5 space-y-5">
        <div className='text-center'>
          <div className='text-3xl font-semibold'>Grammar Checker</div>
          <div className='text-gray-600 text-sm'>Fix spelling, grammar, punctuation</div>
        </div>

        <div className='light-green border-green-300 border p-2 rounded-lg shadow-md'>
          <div className='white-color rounded-lg p-3'>
            <textarea
              placeholder="Let's write!"
              className='h-[150px] resize-none w-full bg-transparent outline-none'
              autoFocus
              name=""
              id=""
            ></textarea>
            <div className='cursor-pointer hover:opacity-65 place-self-end light-green border-green-300 border p-2 rounded-full text-xl text-gray-400'>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrammarChecker