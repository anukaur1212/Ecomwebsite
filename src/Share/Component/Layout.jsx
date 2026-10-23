import React, { useState } from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Adds from '../Navbar/Adds'

const Layout = () => {

    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    const [like, setLike] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || [])
      const [quantity, setQuantity] = useState({}); 

    return (
        <>

            <Adds />
            <Header CartCount={cart.length} 
            LikeCount={like.length} />
            
            <div className='layout'>
            <Outlet context={{cart,setCart,like,setLike,quantity,setQuantity}}  />
            </div>

            <Footer />

        </>
    )
}

export default Layout