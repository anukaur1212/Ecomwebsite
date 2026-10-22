import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false)

    const [activePanel, setActivePanel] = useState(null);

    return (
        <>
            <div className='w-full flex flex-row items-center px-4 py-3 bg-gray-300 uppercase'>

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

                    <li><NavLink className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/">Home</NavLink> </li>

                    <li><NavLink className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/shop">Shop</NavLink> </li>

                    <li><NavLink className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/deals">Deals</NavLink> </li>

                    <li><NavLink className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/newarrivals">New arrivals</NavLink> </li>

                    <li><NavLink className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/deals">Brands</NavLink> </li>

                    <li><NavLink className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/inspiration">Inspiration</NavLink> </li>

                    <li><NavLink className={({ isActive }) => isActive ? "navbar active" : "navbar"}
                        to="/trackorder">Track Order</NavLink> </li>
                </ul>

            </div>

            <div onClick={() => setMenuOpen(false)}
                className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 
                 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} />


            <div
                className={`flex lg:hidden fixed top-0 left-0 z-50 h-screen w-60 sm:w-70 md:w-80
                     bg-linear-to-b from-green-600 to-green-950 transform transition-transform duration-500 ease-in-out 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <ul className="p-6 w-full mt-4 flex flex-col gap-2 text-xl 
                font-semibold text-gray-100">

                    <li> <NavLink onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/"> Home </NavLink> </li>

                    <li> <NavLink onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/shop"> Shop </NavLink> </li>

                     <li> <NavLink onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/deals"> Deals </NavLink> </li>

                     <li> <NavLink onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/newarrivals"> New Arrivals </NavLink> </li>

                     <li> <NavLink onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/brands"> Brands </NavLink> </li>

                     <li> <NavLink onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/inspiration"> Inspiration </NavLink> </li>

                     <li> <NavLink onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/trackorder"> Track Order </NavLink> </li>

                </ul>

                <X onClick={() => setMenuOpen(false)} color='#F3F4F6'
                    className='cursor-pointer fixed right-5 top-5' />

            </div>





        </>
    )
}

export default Navbar