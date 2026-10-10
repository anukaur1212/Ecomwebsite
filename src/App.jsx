import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import ShopPage from './Pages/ShopPage'

const App = () => {
  return (
    <div className='w-full h-full'>


      {/* Home Page design */}

      {/* <HomePage/> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>


    </div>
  )
}

export default App