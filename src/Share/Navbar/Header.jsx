import React, { useEffect, useRef, useState } from 'react'
import { ValidateEmail, ValidatePassword } from '../Validation/Validation';
import LoginModel from './Model/LoginModel';
import { Search, UserRound, Heart, ShoppingCart, X } from 'lucide-react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';


const Header = ({ CartCount, LikeCount }) => {

    const [loginModel, setloginModel] = useState(false)

    // useState form's state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkBox, setCheckBox] = useState(false)


    // Validations
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    // handling scrollbar
    const openModel = () => {
        setloginModel(true)
        document.body.style.overflow = "hidden";
    }

    const closeModel = () => {
        setloginModel(false)
        document.body.style.overflow = "auto";
    }


    // using useState
    const SubmitHandler = (e) => {
        e.preventDefault();

        const emailMsg = ValidateEmail(email);
        const passwordMsg = ValidatePassword(password);

        setEmailError(emailMsg);
        setPasswordError(passwordMsg);

        if (emailMsg || passwordMsg)
            return

        console.log("form submitted");

        setEmail("");
        setPassword("");
        setCheckBox(false);
    }


    return (
        <>

            <div className='lg:sticky lg:z-100 lg:top-19 w-full sm:gap-4 gap-3 p-4 bg-gray-300 text-green-950
            flex md:flex-row flex-col md:justify-between md:text-center md:items-center '>

                {/* logo + icons */}
                <div className='flex justify-between items-center w-full md:w-auto gap-4'>

                    {/* Logo */}
                    <div className='w-full md:w-auto justify-between'>
                        <h2 className='flex flex-col'>Viva
                            <span className='text-sm underline underline-offset-2'>
                                LIVE BETTER
                            </span>
                        </h2>
                    </div>

                    {/* icons */}
                    <div className='sm:w-1/2 md:w-auto w-full flex justify-between md:hidden'>
                        <UserRound className='cursor-pointer'
                            size={30}
                            onClick={() => openModel()} />

                        <NavLink to="/cart">
                            <ShoppingCart size={30} className='cursor-pointer' color='black' />
                        </NavLink>


                        <NavLink to="/wishlist">
                            <Heart size={30} className='cursor-pointer' color='black' />
                        </NavLink>
                    </div>
                </div>


                {/* Search bar */}
                <form onSubmit={(e) => SubmitHandler(e)}
                    className='relative w-full md:w-auto'>
                    <input className='border-2 w-full sm:w-full md:w-[500px] p-2 rounded-2xl outline-none'
                        type="text"
                        placeholder='search product,brands and more..' />

                    <button className='absolute right-0 top-0'>
                        <Search color='white' className='bg-green-950 p-2 rounded-r-2xl' size={43} />
                    </button>
                </form>


                {/* icons */}
                <div className=' w-full md:w-auto md:flex lg:flex hidden'>
                    <div className='flex gap-10 justify-center'>
                        <UserRound className='cursor-pointer'
                            size={30}
                            onClick={() => openModel()} />

                        <NavLink to="/cart">
                            <div className='relative'>
                                <ShoppingCart size={30} className='cursor-pointer' color='black' />

                                {CartCount > 0 && <div className="absolute -top-3 -right-2 w-6 h-6 text-xs
                                 font-bold text-white flex items-center justify-center bg-danger border-2 rounded-full">
                                    {CartCount}
                                </div>
                                }
                            </div>
                        </NavLink>

                        <NavLink to="/wishlist">
                            <div className='relative'>
                                <Heart size={30} className='cursor-pointer' color='black' />

                                {LikeCount > 0 && <div className="absolute -top-3 -right-2 flex justify-center  items-center
                                w-6 h-6 text-xs font-bold text-white bg-danger border-2 rounded-full">
                                    {LikeCount}
                                </div>
                                }
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>

            <Navbar />

            <LoginModel loginModel={loginModel} setloginModel={setloginModel} />

        </>
    )
}

export default Header