import React from 'react'

function page() {
  return (
    <div className='bg-blue-950 text-white min-h-screen'>
      <div className='w-[90%]  py-2 mx-auto flex items-center justify-between'>
        <h2 className='text[20px] font-serif uppercase font-extralight'>Next js</h2>
        <button className='bg-blue-300 py-2 px-7 rounded-md hover:bg-blue-500'>CV</button>
      </div>
      <div className='text-center font-serif w-[40%] mx-auto bg-red-300'>
        <h1 className='text-2xl font-semibold text-blue-300 py-1 pt-1'>John Wick</h1>
        <h2 className='text-md text-blue-200 py-2'>Actor and Artist</h2>
        <p className='text-sm text-blue-50 py-1'>John wick is a 2014 American neo-noir action triller directed by Chad<br>
        </br>Starbricks (in his directional debut) from a screenplay by Derek Kolstad</p>
      </div>
    </div>
  )
}

export default page