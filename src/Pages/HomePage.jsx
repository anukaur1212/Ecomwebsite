import React from 'react'
import Adds from '../Share/Navbar/Adds'
import MainSlider from '../Component/Home/MainSlider'
import Footer from '../Share/Footer/Footer'
import Products from '../Component/Home/Products';
import Benefits from '../Component/Home/Benefits';
import Circlecards from '../Component/Home/Circlecards';
import ReviewCard from '../Component/Home/ReviewCard';
import ProductCard from '../Share/Component/ProductCard';
import ProductParent from '../Component/Home/ProductParent';
import Layout from '../Share/Component/Layout';

const HomePage = () => {
  return (
    <div>

     
      {/* Header Section */}
      <Adds />
      <Layout>
     

      <MainSlider />
      <Circlecards/>
      {/* <Products /> */}
      {/* <ProductCard/> */}

      <ProductParent/>
     
      <ReviewCard/>
      <Benefits />

      {/* Footer Section */}
      </Layout>
  

    </div>
  )
}

export default HomePage