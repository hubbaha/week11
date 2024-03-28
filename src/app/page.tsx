import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
import { TbSettingsCog } from "react-icons/tb";



function page() {
  return (
    <div className=' text-white font-serif min-h-screen bg-[#000029] '>
      <div className='w-[90%]  py-2 mx-auto flex items-center justify-between'>
        <h2 className='text[20px] font-serif uppercase font-extralight'>Next js</h2>
        <button className='bg-blue-300 py-2 px-7 rounded-md hover:bg-blue-500'>CV</button>
      </div>
      <div className='text-center font-serif w-[40%] mx-auto'>
        <h1 className='text-2xl font-bold text-blue-300 py-1 pt-1'>John Wick</h1>
        <h2 className='text-md font-bold py-2'>Actor and Artist</h2>
        <p className='text-sm  py-1'>John wick is a 2014 American neo-noir action triller directed by Chad<br>
        </br>Stahelski (in his directional debut) from a screenplay by Derek Kolstad</p>
        <div className='flex justify-center items-center gap-40 pt-3'>
        <FaFacebookSquare  className='h-9 w-5'/>
        <FaYoutube className='h-9 w-6'/>
        <FaLinkedin className='h-9 w-5' />

         </div>
      <img src="/images/img1.1.jpg" alt="" className=' mt-5 border border-gray-300 p-2 rounded-[100%] mx-auto h-[30%] w-[30%] ' />
      </div>
      <div className='ml-16 mt-7' >
      <h2 className='text-md font-bold pt-5 '>Services I offer</h2>
      <p className=' pt-5 font-thin text-xs'>Legendary assasin John Wick(Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster losef Tarasov(Alfie Allen)<br></br> and his thugs steals John's prized car and kill the puppy that was the last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile Losef's father(Michael Nyqvist) --<br></br>John's former colleague -- puts a huge bounty on John's head.</p>
      </div>
      <div className='flex'>
        <div className='bg-white ml-16 mt-7 h-[50%] w-[27%] text-black text-xs rounded-md'>
        <FaPencilRuler className='h-9 w-6 mx-auto' />
        <h1 className='py-2 text-center'>Dummy text</h1>
        <p className='px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum fugit quod corporis nobis dolores fugiat cumque non quo dolore atque amet illum officia laudantium, magnam quaerat fuga porro corrupti tenetur?</p>
        <h1 className='py-2 text-center'>Dummy text</h1>
        </div>
        <div className='bg-white ml-16 mt-7 h-[50%] w-[27%] text-black text-xs rounded-md'>
        <IoBagAddSharp className='h-9 w-8 mx-auto' />
        <h1 className='py-2 text-center'>Dummy text</h1>
        <p className='px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum fugit quod corporis nobis dolores fugiat cumque non quo dolore atque amet illum officia laudantium, magnam quaerat fuga porro corrupti tenetur?</p>
        <h1 className='py-2 text-center'>Dummy text</h1>
        </div>
        <div className='bg-white ml-16 mt-7 h-[50%] w-[27%] text-black text-xs rounded-md'>
        <TbSettingsCog className='h-9 w-9 mx-auto' />
        <h1 className='py-2 text-center'>Dummy text</h1>
        <p className='px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum fugit quod corporis nobis dolores fugiat cumque non quo dolore atque amet illum officia laudantium, magnam quaerat fuga porro corrupti tenetur?</p>
        <h1 className='py-2 text-center'>Dummy text <br></br></h1>
        </div>
        
      </div>
      <div className='ml-16 mt-7' >
      <h2 className='text-md font-bold pt-5 '>Services I offer</h2>
      <p className=' pt-5 font-thin text-xs'>Legendary assasin John Wick(Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster losef Tarasov(Alfie Allen)<br></br> and his thugs steals John's prized car and kill the puppy that was the last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile Losef's father(Michael Nyqvist) --<br></br>John's former colleague -- puts a huge bounty on John's head.</p>
      </div>
      <div className='flex items-center justify-center'>
        <img src="/images/img2.jpg" className='w-[35%] h-72  ml-16 mt-7' />
        <img src="/images/img3.jpg" className='w-[35%] h-72 ml-16 mt-7' />
      </div>
      <div className='flex items-center justify-center'>
        <img src="/images/img4.jpg" className='w-[35%] h-72 ml-16 mt-7' />
        <img src="/images/img5.jpg" className='w-[35%] h-72 ml-16 mt-7' />
      </div>
      <div className='flex items-center justify-center'>
        <img src="/images/img1.jpg" className='w-[35%] h-72 ml-16 mt-7' />
        <img src="/images/img.jpg" className='w-[35%] h-72 ml-16 mt-7' />
      </div>
    </div>
  )
}

export default page