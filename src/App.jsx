import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route, useParams } from 'react-router-dom'
import ShopPage from './Pages/ShopPage'
import Layout from './Share/Component/Layout'
import WishlistPage from './Pages/WishlistPage'
import CartPage from './Pages/CartPage'
import ProductDetail from './Pages/ProductDetail'

const App = () => {

  // localStorage.clear();
  return (
    <div className='w-full h-full'>

      <Routes>      
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/wishlist' element={<WishlistPage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/detail/:id' element={<ProductDetail />} />
        </Route>

      </Routes>


    </div>
  )
}

export default App