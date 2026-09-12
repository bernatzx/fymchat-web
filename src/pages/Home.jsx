import React from 'react'

function Home() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='text-center leading-10'>
        <span className='text-7xl font-semibold'>
          Welcome to <span className='text-green-500'>FymChat</span>!
        </span>
        <br />
        <span className='font-medium'>
          Improve your grammar, translate your words, and express your ideas better.
        </span>
      </div>
    </div>
  )
}

export default Home