import React from 'react'
import CampaignItem from './CampaignItem'

const Campaigns = () => {
  return (
    <div className='sm:flex justify-center mb-10 -mt-[50px] '>
<CampaignItem image="/images/o1.jpg" title="Tasty Thursdays" discount="20% off"/>
<CampaignItem image="/images/pizza.jpg"  title="Pizza Days" discount="15% off"/>

    </div>
  )
}

export default Campaigns