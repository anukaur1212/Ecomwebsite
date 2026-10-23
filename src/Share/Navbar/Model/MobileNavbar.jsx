import { X } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileNavbar = ({ menuOpen, setMenuOpen }) => {

    const navHandler = () => {
        setMenuOpen(false)
    }

    return (
        <>

            <div onClick={() => setMenuOpen(false)}
                className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 
                 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} />


            <div
                className={`flex lg:hidden fixed top-0 left-0 z-50 h-screen w-60 sm:w-70 md:w-80
                     bg-black transform transition-transform duration-500 ease-in-out 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <ul className="p-6 ps-3 w-full mt-5 flex flex-col gap-2 text-xl 
                font-semibold text-gray-100">

                    <li>
                        <NavLink onClick={() => navHandler(true)}
                            className='navBtn'
                            to="/"> Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={() => navHandler(true)}
                            className='navBtn'
                            to="/shop"> Shop
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={() => navHandler(true)}
                            className='navBtn'
                            to="/deals"> Deals
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={() => navHandler(true)}
                            className='navBtn'
                            to="/newarrivals"> New Arrivals
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={() => navHandler(true)}
                            className='navBtn'
                            to="/brands"> Brands
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={() => navHandler(true)}
                            className='navBtn'
                            to="/inspiration"> Inspiration
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={() => navHandler(true)}
                            className='navBtn'
                            to="/trackorder"> Track Order
                        </NavLink>
                    </li>

                </ul>

                <div className='p-1 bg-green-600 rounded-2xl fixed right-5 top-5'>
                    <X onClick={() => setMenuOpen(false)} color='#F3F4F6'
                        className='cursor-pointer' />
                </div>

            </div>


        </>
    )
}

export default MobileNavbar