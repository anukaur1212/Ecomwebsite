import React from 'react'
import Adds from '../Share/Navbar/Adds'
import MainSlider from '../Component/Home/MainSlider'
import Benefits from '../Component/Home/Benefits';
import Circlecards from '../Component/Home/Circlecards';
import ProductParent from '../Component/Home/ProductParent';
import Review from '../Component/Home/Review';

const HomePage = () => {
  return (
    <div>

     
      {/* Header Section */}
     
     
      {/* <Layout> */}

      <MainSlider />
      <Circlecards/>
      <ProductParent/>     
      <Review/>
      <Benefits />

      {/* </Layout> */}
  

    </div>
  )
}

export default HomePage