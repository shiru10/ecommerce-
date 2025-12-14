import React from 'react'

const Navbar = () => {
  return (
    <div className='py-3 px-4 bg-emerald-400 flex justify-between items-center' >
        <img src='https://p1.hiclipart.com/preview/694/135/611/black-n-white-apple-logo-png-clipart-thumbnail.jpg' className='max-w-10 max-h-10'/>
        <div>
            <ul className='list-none flex gap-1.5 font-medium text-white'>
                <li className='list-none'>Home</li>
                <li className='list-none'>About</li>
            </ul>
        </div>
       <button className='bg-white px-4 py-2 rounded-2xl cursor-pointer font-medium text-black text-md'>Login</button>
    </div>
  )
}

export default Navbar