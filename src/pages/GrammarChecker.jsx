import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { LuSpellCheck } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

import { checkGrammar } from '../services/grammar';

function GrammarChecker() {
  const [masukkan, setMasukkan] = useState('');
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckGrammar = async () => {
    if (!masukkan.trim() || loading) return;

    try {
      setLoading(true);
      setError("");
      setHasil(null);

      const result = await checkGrammar(masukkan);

      setHasil(result);
    } catch (error) {
      setError("Failed to check grammar.");
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
      <div className="flex-col w-4/5 md:w-3/5 space-y-5">
        {/* INPUT */}
        <div className='text-center'>
          <div className='place-self-center text-8xl bg-red-200 text-red-500 rounded-full p-5 mb-3 shadow-md'>
            <LuSpellCheck />
          </div>
          <div className='text-3xl font-medium'>Grammar Checker</div>
          <div className='text-gray-600 text-sm'>Fix spelling, grammar, punctuation</div>
        </div>

        <div className='light-green-bg-color border-green-300 border p-1 rounded-lg shadow-md'>
          <div className='white-bg-color rounded-lg p-3 relative'>
            <textarea
              placeholder="Let's write!"
              className='h-[180px] resize-none w-full bg-transparent outline-none'
              value={masukkan}
              onChange={(e) => setMasukkan(e.target.value)}
              autoFocus
            ></textarea>

            {masukkan && (
              <div className='text-gray-600 cursor-pointer hover:opacity-65 absolute bottom-4'>
                <FaRegTrashAlt onClick={handleClear} />
              </div>
            )}

            <div
              onClick={handleCheckGrammar}
              className={`place-self-end light-green-bg-color border-green-300 border p-2 rounded-full text-xl text-gray-400 ${loading || !masukkan.trim()
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:opacity-65"
                }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <FaArrowRight />
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

        {/* RESULT */}
        {hasil && (
          <div className='light-green-bg-color border-green-300 border p-1 rounded-lg shadow-md'>
            <div className='p-3 flex gap-2 items-center relative'>
              <div className='text-lg bg-red-200 text-red-500 p-2 rounded-lg'>
                <RiRobot2Line />
              </div>
              <div className='leading-none'>
                <span className='font-medium'>
                  Writing assistant
                </span>
                <br />
                <span className='text-xs font-medium text-gray-500'>
                  Grammar corrections
                </span>
              </div>

              <div
                onClick={() => setHasil(null)}
                className="absolute right-3 text-gray-600 cursor-pointer hover:opacity-65"
              ><FaRegTrashAlt />
              </div>
            </div>
            <div className='white-bg-color rounded-lg p-3'>
              {hasil.corrected_answer}
              <div className='bg-red-200 p-3 rounded-lg mt-3'>
                <span className='text-red-500'>Explanations</span>
                <p className='text-red-400 font-sm'>{hasil.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default GrammarChecker