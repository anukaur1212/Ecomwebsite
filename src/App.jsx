import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route, useParams } from 'react-router-dom'
import ShopPage from './Pages/ShopPage'
import Layout from './Share/Component/Layout'
import WishlistPage from './Pages/WishlistPage'
import CartPage from './Pages/CartPage'
import ProductDetail from './Pages/ProductDetail'
import Practice from './Practice'
import Login from './Auth/pages/Login'
import SignUp from './Auth/pages/SignUp'
import ForgetPassword from './Auth/pages/ForgetPassword'
import ResetPassword from './Auth/pages/ResetPassword'
import ProtectedRoute from './Auth/Route/ProtectedRoute'
import PublicRoute from './Auth/Route/PublicRoute'
import Dashboard from './Dashboard/pages/Dashboard'
import ProductForm from './Dashboard/component/ProductFrom'
import Report from './Dashboard/pages/Report'
import Approval from './Dashboard/pages/Approval'
import DashboardPage from './Dashboard/pages/DashBoardPage'


const App = () => {

  // localStorage.clear();
  return (
    <div className='w-full h-full'>

      {/* <Routes>      
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/wishlist' element={<WishlistPage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/detail/:id' element={<ProductDetail />} />
        </Route>

      </Routes> */}

      {/* <Practice/> */}

      {/* <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes> */}

  <Dashboard />

       <Routes>      
        <Route path="/"  element={<Dashboard />}>
         <Route index element={<DashboardPage />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path='/report' element={<Report />}/>
          <Route path='/approval' element={<Approval />}/>
        </Route>
        </Routes>

    </div>
  )
}

export default App