import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'

const Customers = () => {
  return (

          <div className="sm:mx-52 py-12">
      <div>
        <Title addClass={"text-4xl mb-10 lg:mx-24 text-center"}>
          What Says Our Customers
        </Title>
      </div>
      <div className='flex mx-4 gap-4'>
        <CustomerItem />
        <CustomerItem />
     </div>

    </div>

  )
}

export default Customers