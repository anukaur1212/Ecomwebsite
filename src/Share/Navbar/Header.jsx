import React from 'react'
import { Search, UserRound, Heart, ShoppingCart } from 'lucide-react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <div className='w-full sm:gap-4 gap-2 p-4 flex sm:flex-row flex-col justify-between text-center bg-gray-300 text-green-950 '>

                {/* logo + icons for mobile */}
                <div className='w-full sm:w-1/3 flex justify-between lg:hidden'>
                    <h2 className='flex flex-col'>Viva <span className='text-sm underline underline-offset-2'> LIVE BETTER </span></h2>

                    <ul className='flex gap-3 justify-center'>
                        <li>
                            <UserRound size={30} color='black' />
                        </li>
                        <li>
                            <Heart size={30} color='black' />
                        </li>
                        <li>
                            <ShoppingCart size={30} color='black' />
                        </li>
                    </ul>
                </div>

                {/* Search bar */}
                <form className='relative w-full sm:w-auto lg:hidden'>
                    <input className='border-2 w-full sm:w-90 lg:w-[500px] p-2 rounded-2xl outline-none' type="text" placeholder='search product,brands and more..' />
                    <button className='absolute right-0 top-0'>
                        <Search color='white' className='bg-green-950 p-2 rounded-r-2xl' size={43} />
                    </button>
                </form>


                {/* logo +search bar */}
                <div className='flex hidden lg:flex w-1/2 justify-between'>
                    {/* Logo */}
                    <div className='w-full sm:w-1/6 flex justify-between hidden lg:flex'>
                        <h2 className='flex flex-col'>Viva <span className='text-sm underline underline-offset-2'> LIVE BETTER </span></h2>
                    </div>

                    {/* Search bar */}
                    <form className='relative w-full sm:w-auto'>
                        <input className='border-2 w-full sm:w-90 lg:w-[500px] p-2 rounded-2xl outline-none' type="text" placeholder='search product,brands and more..' />
                        <button className='absolute right-0 top-0'>
                            <Search color='white' className='bg-green-950 p-2 rounded-r-2xl' size={43} />
                        </button>
                    </form>
                </div>


                {/* icons */}
                <div className=' w-full sm:w-1/6 hidden lg:flex'>
                    <ul className='flex gap-10 justify-center'>
                        <li>
                            <UserRound size={30} color='black' />
                        </li>
                        <li>
                            <Heart size={30} color='black' />
                        </li>
                        <li>
                            <ShoppingCart size={30} color='black' />
                        </li>
                    </ul>
                </div>
            </div>

            <Navbar />

        </>
    )
}

export default Header