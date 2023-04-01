import React from 'react';
import About from '../../components/layout/about/About';
import Campaigns from '../../components/layout/campaigns/Campaigns';
import MenuWrapper from '../../components/layout/products/MenuWrapper';
import Carousel from '../../components/layout/ui/Carousel';
import Reservation from '../../components/layout/reservation/Reservation';
import Customers from '../../components/layout/customers/Customers';
const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About/>
      <Reservation />
      <Customers />
    </div>
  )
}

export default Home