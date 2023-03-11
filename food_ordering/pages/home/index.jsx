import React from 'react';
import About from '../../components/layout/about/About';
import Campaigns from '../../components/layout/campaigns/Campaigns';
import MenuWrapper from '../../components/layout/products/MenuWrapper';
import Carousel from '../../components/layout/ui/Carousel';
import Reservation from '../../components/layout/reservation/Reservation';
const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About/>
      <Reservation />
    </div>
  )
}

export default Home