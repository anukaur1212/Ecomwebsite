import React from 'react'
import Header from '../Share/Navbar/Header';
import Footer from '../Share/Footer/Footer';
import MainSlider from '../Component/Home/MainSlider';
import Product from '../Component/Shop/Product';
import Layout from '../Share/Component/Layout';

const ShopPage = () => {
  return (
    <div>
   
      <Layout>
        <MainSlider />
        <Product />
      </Layout>

    </div>
  )
}

export default ShopPage