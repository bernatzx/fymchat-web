import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import { TiEqualsOutline } from "react-icons/ti";

function Paraphrase() {
  const [masukkan, setMasukkan] = useState('');

  return (
    <div className='flex justify-center'>
      <div className="flex-col w-4/5 md:w-3/5 space-y-5">

        <div className='text-center'>
          <div className='place-self-center text-8xl bg-green-200 text-green-500 rounded-full p-5 mb-3 shadow-md'>
            <TiEqualsOutline />
          </div>
          <div className='text-3xl font-medium'>Paraphrase</div>
          <div className='text-gray-600 text-sm'>Rewrite and refine text</div>
        </div>

        <div className='light-green-bg-color border-green-300 border p-1 rounded-lg shadow-md'>
          <div className='white-bg-color rounded-lg p-3 flex justify-between space-x-3'>
            <div className='w-full flex-col relative'>
              <textarea
                className="h-[185px] w-full resize-none bg-transparent outline-none"
                placeholder='To rewrite text, enter text here and press "Paraphrase".'
                value={masukkan}
                onChange={(e) => setMasukkan(e.target.value)}
                autoFocus
              ></textarea>
              <div className='place-self-end flex items-center gap-2 green-bg-color text-white hover:opacity-65 cursor-pointer py-1 px-4 rounded-full '>
                Paraphrase
              </div>

              {masukkan && (
                <div onClick={() => setMasukkan('')} className="absolute bottom-1 text-gray-600 cursor-pointer hover:opacity-65">
                  <FaRegTrashAlt />
                </div>
              )}
            </div>
            <div className="w-[1px] bg-gray-300"></div>

            {/* RESULT */}
            <div className="h-[185px] w-full overflow-y-auto break-words no-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paraphrase