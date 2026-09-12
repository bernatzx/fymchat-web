import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

function Translator() {
  const [masukkan, setMasukkan] = useState('');

  return (
    <div className='flex justify-center'>
      <div className="flex-col w-4/5 md:w-3/5 space-y-5">

        <div className='text-center'>
          <div className='place-self-center text-8xl bg-gray-200 text-gray-500 rounded-full p-5 mb-3 shadow-md'>
            <MdTranslate />
          </div>
          <div className='text-3xl font-medium'>Translator</div>
          <div className='text-gray-600 text-sm'>Translate quickly and accurately</div>
        </div>

        <div className='light-green-bg-color border-green-300 border p-1 rounded-lg shadow-md'>
          <div className='white-bg-color rounded-lg p-3 space-y-3'>
            <div className='flex justify-between space-x-3 h-[180px] relative'>
              <textarea
                className="h-full w-full resize-none bg-transparent outline-none"
                placeholder='Enter text'
                value={masukkan}
                onChange={(e) => setMasukkan(e.target.value)}
                autoFocus
              ></textarea>

              {masukkan && (
                <div onClick={() => setMasukkan('')} className="text-gray-600 cursor-pointer hover:opacity-65 absolute flex justify-center left-[390px]">
                  <FaRegTrashAlt />
                </div>
              )}

              <div className="w-[1px] bg-gray-300"></div>

              {/* RESULT */}
              <div className="h-full w-full no-scrollbar"></div>

            </div>
            <div className='place-self-center overflow-y-auto break-words flex items-center gap-2 green-bg-color text-white hover:opacity-65 cursor-pointer py-1 px-4 rounded-full '>
              <FaArrowRight /> Translate
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Translator