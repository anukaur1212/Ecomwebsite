import React from 'react'
import MainSlider from '../Component/Home/MainSlider';
import Product from '../Component/Shop/Product';

const ShopPage = () => {
  return (
   <>
  
       
       <p className='mb-0 text-4xl font-bold text-green-900 w-fit p-4'>
        View All Products
       </p>
        
        <Product />

   </>
  )
}

export default ShopPage