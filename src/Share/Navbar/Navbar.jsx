import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false)

    const [activePanel, setActivePanel] = useState(null);

    return (
        <>
            <div className='w-full flex lg:flex-row flex-col items-center px-3 py-1 bg-gray-300 uppercase'>

                <div className='bg-green-950 w-full lg:w-1/8 text-white px-3 py-2 rounded-2xl flex justify-between'>
                    <button onClick={() =>    setActivePanel(activePanel === "categoryOpen" ? null : "categoryOpen")}
                        className='flex gap-2'>
                        <Menu size={25} /> CATEGORY
                    </button>

                    <button onClick={() =>    setActivePanel(activePanel === "menuOpen" ? null : "menuOpen")}
                        className='flex gap-2 lg:hidden'>
                        <Menu size={25} /> MENU
                    </button>
                </div>

                <ul className={`${activePanel === "menuOpen" ? "flex" : "hidden"} 
                lg:flex flex-col sm:flex-row lg:w-230 sm:gap-3 text-xl font-semibold text-green-950 justify-between`}>
                    <li><NavLink className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/">Home</NavLink> </li>
                    <li><NavLink className={({ isActive }) => isActive ? "nav active" : "nav"}
                        to="/shop">Shop</NavLink> </li>
                    <li>Deals</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                    <li>Inspiration</li>
                    <li>Track Order</li>
                </ul>

            </div>

            {activePanel === "categoryOpen" && <ul className={`${"flex"} 
             lg:flex flex-col lg:w-230 sm:gap-3 text-xl font-semibold text-green-950 justify-between p-3`}>
                <li><NavLink className={({ isActive }) => isActive ? "nav active" : "nav"}
                    to="/">Home</NavLink> </li>
                <li><NavLink className={({ isActive }) => isActive ? "nav active" : "nav"}
                    to="/shop">Shop</NavLink> </li>
                <li>Deals</li>
                <li>New Arrivals</li>
                <li>Brands</li>
                <li>Inspiration</li>
                <li>Track Order</li>
            </ul>}
        </>
    )
}

export default Navbar