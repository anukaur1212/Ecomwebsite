import React from 'react'
import Adds from '../Share/Navbar/Adds'
import MainSlider from '../Component/Home/MainSlider'
import Footer from '../Share/Footer/Footer'
import CircleCard from '../Component/Home/CircleCard';
import Products from '../Component/Home/Products';
import Review from '../Component/Home/Review';
import Benefits from '../Component/Home/Benefits';

const HomePage = () => {
  return (
    <div>

      {/* Header Section */}
      <Adds />

      {/* Home-main Section */}
      <MainSlider />
      <CircleCard />
      <Products />
      <Review />
      <Benefits />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default HomePage