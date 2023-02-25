import React from 'react';
import About from '../../components/layout/about/About';
import Campaigns from '../../components/layout/campaigns/Campaigns';
import MenuWrapper from '../../components/layout/products/MenuWrapper';
import Carousel from '../../components/layout/ui/Carousel';
const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About/>
    </div>
  )
}

export default Home