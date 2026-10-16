import React from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Adds from '../Navbar/Adds'

const Layout = () => {
    return (
        <>

            <Adds />
            <Header />
            <div className='layout'>
            {/* {children} */}

            <Outlet />

            </div>

            <Footer />

        </>
    )
}

export default Layout