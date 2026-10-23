import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom';
import MobileNavbar from './Model/MobileNavbar';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <div className='lg:sticky lg:z-100 lg:top-45 w-full flex flex-row items-center px-4 pb-3 bg-gray-300 uppercase'>

                <div className='bg-green-950 w-full lg:w-1/8 text-white px-3 py-2 rounded-2xl
                 flex justify-between items-center shrink-0'>
                    <button
                        className='flex gap-2 shrink-0'>
                        <Menu size={25} /> CATEGORY
                    </button>

                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className='flex gap-2 lg:hidden'>
                        <Menu size={25} /> MENU
                    </button>
                </div>

                <ul className="hidden lg:flex lg:w-250 flex-row items-center
                    gap-3 text-xl font-semibold justify-between ml-6 mb-0">

                    <li><NavLink 
                    className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/">Home</NavLink> 
                    </li>

                    <li><NavLink
                    className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/shop">Shop</NavLink>
                    </li>

                    <li><NavLink 
                    className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/deals">Deals</NavLink> 
                    </li>

                    <li><NavLink 
                    className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/newarrivals">New arrivals</NavLink> 
                    </li>

                    <li><NavLink 
                    className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/deals">Brands</NavLink> 
                    </li>

                    <li><NavLink 
                    className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/inspiration">Inspiration</NavLink> 
                    </li>

                    <li><NavLink 
                    className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/trackorder">Track Order</NavLink> 
                    </li>
                </ul>

            </div>

            <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>



        </>
    )
}

export default Navbar