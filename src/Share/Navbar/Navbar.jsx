import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router';
import { NavLink } from 'react-router';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false)

    return (
        <div className='w-full flex lg:flex-row flex-col items-center px-3 py-1 bg-gray-300 uppercase'>

            <div className='bg-green-950 w-full lg:w-1/6 text-white px-3 py-2 rounded-2xl border-2 flex justify-between'>
                <button onClick={() => setCategoryOpen(!categoryOpen)}
                    className='flex gap-2'>
                    <Menu size={25} /> CATEGORY
                </button>

                <button onClick={() => setMenuOpen(!menuOpen)}
                    className='flex gap-2 lg:hidden'>
                    <Menu size={25} /> MENU
                </button>
            </div>

            <ul className={`${menuOpen ? "flex" : "hidden"} 
             lg:flex flex-col sm:flex-row lg:w-230 sm:gap-3 text-xl font-semibold text-green-950 justify-between`}>
                <li><NavLink className="nav" to="/">Home</NavLink> </li>                
                <li><NavLink className="nav" to="/shop">Shop</NavLink> </li>
                <li>Deals</li>
                <li>New Arrivals</li>
                <li>Brands</li>
                <li>Inspiration</li>
                <li>Track Order</li>
            </ul>

            {categoryOpen && <ul className={`${"flex"} 
             lg:flex flex-col sm:flex-row lg:w-230 sm:gap-3 text-xl font-semibold text-green-950 justify-between`}>
                <li><NavLink className="nav" to="/">Home</NavLink> </li>
                <li><NavLink className="nav" to="/shop">Shop</NavLink> </li>
                <li>Deals</li>
                <li>New Arrivals</li>
                <li>Brands</li>
                <li>Inspiration</li>
                <li>Track Order</li>
            </ul>}

        </div>
    )
}

export default Navbar