import React from 'react'
import MenuItem from './MenuItem'
import Title from '../ui/Title'

const MenuWrapper = () => {
  return (
    <div className='flex flex-col items-center mb-16'>
     <Title addClass="text-[40px]">Our Menu</Title>
     <div className="mt-10">
        <button className="px-6 py-2 bg-secondary rounded-3xl text-white">All</button>
        <button className="mx-3">Burger</button>
        <button className="mx-3">Pizza</button>
        <button className="mx-3">Pasta</button>
        <button className="mx-3">Fries</button>
     </div>
     <div className='mt-6  lg:mx-20 md:mx-6 mx-10 sm:mx-2 grid  md:grid-cols-3 sm:grid-cols-2 '>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />


     </div>
    </div>
  )
}

export default MenuWrapper