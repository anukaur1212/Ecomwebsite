import React, { useState } from 'react'
import { Search, UserRound, Heart, ShoppingCart, X } from 'lucide-react'

import { ValidateEmail, ValidatePassword } from '../../Validation/Validation'


const LoginModel = ({loginModel,setloginModel}) => {

 
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

             const data = localStorage.getItem("login-data") || [] ;
     
             const emailMsg = ValidateEmail(email);
             const passwordMsg = ValidatePassword(password); 
     
             setEmailError(emailMsg);
             setPasswordError(passwordMsg);
     
             if (emailMsg || passwordMsg)
                 return
     
            //  console.log("form submitted");
     
             setEmail("");
             setPassword("");
             setCheckBox(false);

             localStorage.setItem("login-data",JSON.stringify({email,password}))

         }
 
    return (
        <>

            {/* Div appears on clicking icon using useState*/}
            {loginModel && (
                <div className='fixed inset-0 z-50 p-4 flex justify-center lg:items-center  bg-white/20 backdrop-blur-sm  '>

                    <div className="relative z-20 w-full sm:max-w-md md:max-w-lg bg-white
                     shadow-lg p-4 sm:p-6 rounded-lg  max-h-120">

                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-xl text-gray-400 font-semibold'>Login</h2>
                            <X onClick={() => closeModel()} color='red' className='cursor-pointer' />
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
                                className="text-white shadow-xs bg-green-800 font-semibold leading-5 text-sm px-3 py-2.5 focus:outline-none active:scale-95">
                                    Submit</button>
                        </form>

                    </div>

                </div>
            )}
        </>
    )
}

export default LoginModel