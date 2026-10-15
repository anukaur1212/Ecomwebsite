import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import ShopPage from './Pages/ShopPage'
import Layout from './Share/Component/Layout'

const App = () => {
  return (
    <div className='w-full h-full'>


      {/* Home Page design */}

      {/* <HomePage/> */}

      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>

      </Routes>


    </div>
  )
}

export default App