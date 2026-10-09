import React from 'react'
import Header from '../Share/Navbar/Header';
import Footer from '../Share/Footer/Footer';
import MainSlider from '../Component/Home/MainSlider';
import Products from '../Component/Home/Products';
import Product from '../Component/Shop/Product';

const ShopPage = () => {
  return (
    <div>
      <Header/>

      <MainSlider/>
      {/* <Products/> */}
      <Product/>


      <Footer/>
    </div>
  )
}

export default ShopPage