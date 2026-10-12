import React from 'react'
import Adds from '../Share/Navbar/Adds'
import MainSlider from '../Component/Home/MainSlider'
import Footer from '../Share/Footer/Footer'
import Products from '../Component/Home/Products';
import Benefits from '../Component/Home/Benefits';
import Circlecards from '../Component/Home/Circlecards';
import ReviewCard from '../Component/Home/ReviewCard';

const HomePage = () => {
  return (
    <div>

      {/* Header Section */}
      <Adds />

      {/* Home-main Section */}
      <MainSlider />
      <Circlecards/>
      <Products />
      <ReviewCard/>
      <Benefits />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default HomePage