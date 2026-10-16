import React, { useEffect, useRef, useState } from 'react'
import { Search, UserRound, Heart, ShoppingCart, X } from 'lucide-react'
import Navbar from './Navbar'
import { ValidateEmail, ValidatePassword } from '../Validation/Validation';


const Header = () => {

    const [user, setUser] = useState(false)

    // useState form's state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkBox, setCheckBox] = useState(false)


     // Validations
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    // Using useRef
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const checkedBox = useRef(null);


    useEffect(() => {
        document.body.style.overflow = user ? "hidden" : "auto"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [user])


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


    // using useRef
    //     const SubmitHandler = (e) => {
    //     e.preventDefault();

    //     console.log("email", emailRef.current.value);
    //     console.log("password", passwordRef.current.value);

    //     emailRef.current.value = "";
    //     passwordRef.current.value = "";

    //     checkedBox.current.checked = false;

    // }


    return (
        <>

            <div className='w-full sm:gap-4 gap-3 p-4 bg-gray-300 text-green-950
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
                            onClick={() => setUser(true)} />
                        <ShoppingCart size={30} />
                        <Heart size={30} />
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
                            onClick={() => setUser(true)} />
                        <ShoppingCart size={30}
                            className='cursor-pointer' />
                        <Heart size={30}
                            className='cursor-pointer' />
                    </div>
                </div>

            </div>


            <Navbar />

            {/* Div appears on clicking icon using useState*/}
            {user && (
                <div className='fixed inset-0 z-50 p-4 flex justify-center lg:items-center  bg-white/20 backdrop-blur-sm  '>

                    <div className="relative z-20 w-full sm:max-w-md md:max-w-lg bg-white
                     shadow-lg p-4 sm:p-6 rounded-lg  max-h-120">

                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-xl text-gray-400 font-semibold'>Login</h2>
                            <X onClick={() => setUser(false)} color='red' className='cursor-pointer' />
                        </div>

                        {/* form using useState */}
                        <form className="w-full flex flex-col" onSubmit={(e) => SubmitHandler(e)}>

                            <div className="mb-2">
                                <label className="block mb-2.5 text-sm font-medium">
                                    Your email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    onBlur={() => setEmailError(ValidateEmail(email))}
                                    className="border text-sm rounded-md focus:ring-2 focus:ring-green-700 block w-full px-3 py-2.5 shadow"
                                    placeholder="name@gmail.com" />
                                {emailError && (<p className='text-red-600 ps-2'>{emailError}</p>)}
                            </div>

                            <div className="mb-2">
                                <label className="block mb-2.5 text-sm font-medium">
                                    Your password
                                </label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    onBlur={() => setPasswordError(ValidatePassword(password))}
                                    className="border text-sm rounded-md focus:ring-2 focus:ring-green-700 block w-full px-3 py-2.5 shadow"
                                    placeholder="••••••••" />
                                {passwordError && (<p className='text-red-600 p-2 '>{passwordError}</p>)}
                            </div>

                            <div className="flex gap-2 mb-2">
                                <label className="flex items-center ">
                                    <input id="remember-alternative" type="checkbox" checked={checkBox}
                                        onChange={(e) => setCheckBox(e.target.checked)}
                                    /> I agree with the terms and conditions
                                </label>
                            </div>

                            <button type="submit"
                                className="text-white shadow-xs bg-green-800 font-semibold leading-5 text-sm px-3 py-2.5 focus:outline-none active:scale-95">Submit</button>
                        </form>


                        {/* form using useRef */}
                        {/* <form className="w-full flex flex-col" onSubmit={(e) => SubmitHandler(e)}>

                            <div className="mb-4">
                                <label className="block mb-2.5 text-sm font-medium">
                                    Your email</label>
                                <input type="email" ref={emailRef}
                                    className="border text-sm rounded-md focus:ring-2 focus:ring-green-700 block w-full px-3 py-2.5 shadow"
                                    placeholder="name@gmail.com" required />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2.5 text-sm font-medium">
                                    Your password
                                </label>
                                <input type="password" ref={passwordRef}
                                    className="border text-sm rounded-base focus:ring-2 focus:ring-green-700 block w-full px-3 py-2.5 shadow"
                                    placeholder="••••••••" required />
                            </div>

                            <div className="flex gap-2 mb-5">
                                <label className="flex items-center ">
                                    <input id="remember-alternative" type="checkbox" ref={checkedBox}
                                        required /> I agree with the terms and conditions
                                </label>
                            </div>

                            <button type="submit"
                                className="text-white shadow-xs bg-green-800 font-semibold leading-5 text-sm px-3 py-2.5 focus:outline-none active:scale-95">Submit</button>
                        </form> */}


                    </div>

                </div>
            )}




        </>
    )
}

export default Header