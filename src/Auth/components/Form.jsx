import React, { useState } from 'react'
import { KeyRound, Mail, User } from "lucide-react";
import useLogin from '../Hooks/useLogin';
import { Link } from 'react-router-dom';
import { ValidateEmail,ValidateName,ValidatePassword } from '../../Share/Validation/Validation';
 import { Eye,EyeOff } from "lucide-react";

const Form = () => {

    
const {Name, Email, Password, ConfirmPassword, Radio, NameError, EmailError, PasswordError,
         ConfirmPassError, ExistEmailErr, signupError,SubmitHandler,setEmail,setPassword,setConfirmPassError,
         setConfirmPassword,setEmailError,setNameError,setPasswordError}  = useLogin()

          const [showPassword,setShowPassword] = useState(false);

    return (
        <>

            <form
                onSubmit={(e) => SubmitHandler(e)}
                className="flex flex-col gap-2 justify-center">

                {signupError && (
                    <p className="text-sm text-red-600 bg-red-50
                                  border border-red-100 rounded-lg p-3">
                        {signupError}
                    </p>
                )}

                {ExistEmailErr && (
                    <p className="text-sm text-red-600 bg-red-50
                                  border border-red-100 rounded-lg p-3">
                        {ExistEmailErr}
                    </p>
                )}

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                        Full name
                    </label>

                    <div className="relative">
                        <User color="gray"
                            className="absolute top-1 translate-y-1/2 translate-x-1/2" />

                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setNameError(ValidateName(Name))}
                            placeholder="Enter your full name"
                            required
                            className="w-full border border-gray-200 bg-gray-50
                                     rounded-xl px-5 py-3.5 text-sm text-gray-800
                                     placeholder:text-gray-400 outline-none
                                     transition-all focus:bg-white focus:border-[#56805d]
                                     focus:ring-4 focus:ring-[#56805d]/10"
                        />
                    </div>

                    {NameError && (
                        <p className="text-xs text-red-500">{NameError}</p>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                        Email address
                    </label>

                    <div className="relative">
                        <Mail color="gray"
                            className="absolute top-1 translate-y-1/2 translate-x-1/2" />
                        <input
                            type="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setEmailError(ValidateEmail(Email))}
                            placeholder="you@example.com"
                            required
                            className="w-full border border-gray-200 bg-gray-50
                                    rounded-xl px-5 py-3.5 text-sm text-gray-800
                                    placeholder:text-gray-400 outline-none
                                    transition-all focus:bg-white focus:border-[#56805d]
                                    focus:ring-4 focus:ring-[#56805d]/10"
                        />
                    </div>

                    {EmailError && (
                        <p className="text-xs text-red-500">{EmailError}</p>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                        Password
                    </label>

                    <div className="relative">
                        <KeyRound color="gray"
                            className="absolute top-1 translate-y-1/2 translate-x-1/2" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() =>
                                setPasswordError(ValidatePassword(Password))
                            }
                            placeholder="Create a strong password"
                            required
                            className="w-full border border-gray-200 bg-gray-50
                                    rounded-xl px-5 py-3.5 text-sm text-gray-800
                                    placeholder:text-gray-400 outline-none
                                    transition-all focus:bg-white focus:border-[#56805d]
                                    focus:ring-4 focus:ring-[#56805d]/10"
                        />
                         <button onClick={()=>setShowPassword(!showPassword)}
                         className='absolute top-0 right-0'>  
                             {showPassword ? <Eye/> : <EyeOff/>}
                         </button>
                    </div>

                    {PasswordError && (
                        <p className="text-xs text-red-500">
                            {PasswordError}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                        Confirm password
                    </label>

                    <input
                        type="password"
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter your password"
                        required
                        className="w-full border border-gray-200 bg-gray-50
                                     rounded-xl px-3 py-3.5 text-sm text-gray-800
                                    placeholder:text-gray-400 outline-none
                                     transition-all focus:bg-white focus:border-[#56805d]
                                     focus:ring-4 focus:ring-[#56805d]/10"
                    />

                    {ConfirmPassError && (
                        <p className="text-xs text-red-500">
                            {ConfirmPassError}
                        </p>
                    )}
                </div>

                {/* Terms and Conditions */}
                <label className="flex items-start gap-3 mt-1
                              text-sm text-gray-600 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={Radio}
                        onChange={(e) => setRadio(e.target.checked)}
                        required
                        className="mt-1 w-4 h-4 accent-[#245b3e]
                                    cursor-pointer shrink-0"
                    />

                    <span> I agree to the
                        <span className="text-[#245b3e] font-semibold">
                            {" "} Terms and Conditions
                        </span>
                    </span>
                </label>

                {/* Submit Button */}

                <button
                    type="submit"
                    className="w-full mt-3 bg-[#245b3e] text-white
                                rounded py-3.5 font-semibold text-sm
                                shadow-lg shadow-[#245b3e]/15
                                hover:bg-[#19452d] hover:shadow-xl
                               active:scale-[0.98] transition-all duration-200"
                >
                    Create Account
                    <span className="ml-2"></span>
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-500 mt-2">
                    Already have an account?
                    <Link
                        to="/login"
                        className="loginLink">
                        Log in
                    </Link>
                </p>
            </form>

        </>
    )
}

export default Form