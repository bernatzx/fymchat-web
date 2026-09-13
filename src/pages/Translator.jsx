import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { translator } from '../services/translator';

function Translator() {
  const [masukkan, setMasukkan] = useState('');
  const [target, setTarget] = useState('english');
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    if (!masukkan.trim() || !target.trim() || loading) return;

    try {
      setLoading(true);
      setError("");
      setHasil(null);

      const result = await translator(masukkan, target);

      setHasil(result);
    } catch (error) {
      setError("Failed to translate.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMasukkan("");
    setHasil(null);
    setError("");
  };

  return (
    <div className='flex justify-center'>
      <div className="flex-col w-11/12 md:w-3/5 space-y-5">

        <div className='text-center'>
          <div className='place-self-center text-8xl bg-gray-200 text-gray-500 rounded-full p-5 mb-3 shadow-md'>
            <MdTranslate />
          </div>
          <div className='text-3xl font-medium'>Translator</div>
          <div className='text-gray-600 text-sm'>Translate quickly and accurately</div>
        </div>

        <div className='light-green-bg-color border-green-300 border p-1 rounded-lg shadow-md'>
          <div className='white-bg-color rounded-lg p-3 space-y-3 relative'>
            <div className='flex flex-col md:flex-row justify-between md:space-x-3 md:h-[180px] relative'>
              <textarea
                className="h-[200px] text-sm md:text-base md:h-full w-full resize-none bg-transparent outline-none"
                placeholder='Enter text'
                value={masukkan}
                onChange={(e) => setMasukkan(e.target.value)}
                autoFocus
              ></textarea>

              {masukkan && (
                <div onClick={handleClear} className="text-gray-600 cursor-pointer hover:opacity-65 absolute flex justify-center left-[275px] md:left-[385px]">
                  <FaRegTrashAlt />
                </div>
              )}

              <div className="w-[1px] bg-gray-300"></div>
              <div className="h-[1px] bg-gray-300"></div>

              {/* RESULT */}
              <div className="h-[200px] md:h-full w-full no-scrollbar">
                {hasil && (
                  hasil.translated_text
                )}
              </div>


              <div className='absolute md:bottom-[-44px] md:pb-0 pb-3 bottom-1/2 flex justify-between w-full'>

                <div className="text-xs flex border py-1 px-3 text-gray-600 rounded-full">
                  <select
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                  >
                    <option value="english">English</option>
                    <option value="bahasa indonesia">Indonesia</option>
                  </select>
                </div>

                <div onClick={handleTranslate}
                  className={`md:hidden flex items-center text-sm md:text-base gap-2 green-bg-color text-white py-1 px-4 rounded-full ${loading || !masukkan.trim() || !target.trim()
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-65 cursor-pointer"
                    }`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaArrowRight /> Translate
                    </>
                  )}
                </div>

              </div>



            </div>

            <div onClick={handleTranslate}
              className={`md:place-self-center place-self-end hidden md:flex items-center gap-2 green-bg-color text-white py-1 px-4 rounded-full ${loading || !masukkan.trim() || !target.trim()
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-65 cursor-pointer"
                }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <FaArrowRight /> Translate
                </>
              )}
            </div>

          </div>
        </div>


        {/* ERROR */}
        {error && (
          <div className="text-sm text-red-500">
            {error}
          </div>
        )}

      </div>
    </div>
  )
}

export default Translator