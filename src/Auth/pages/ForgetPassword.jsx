import React, { useState } from 'react'
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom'
import signUpBg from "/src/assets/img/ecomBg.png"
import { Mail } from 'lucide-react'
import Animation from '../components/Animation'

export default function ForgetPassword() {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")


    async function ResetHandler(e) {
        e.preventDefault();

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/resetpassword`,
        });

        if (error) {
            alert(error.message);
        } else {
            setEmailError("check your email inbox");
        }
    }

    return (
        <>

            <div className="relative min-h-screen w-full bg-[#f5f7f2] flex justify-center items-center
                          p-5">

                <Animation/>

                <div className="z-50 w-full lg:w-[40%] h-1/2 bg-white rounded-3xl 
                             shadow-xl overflow-hidden grid grid-cols-1">

                    {/*  SIGNUP FORM */}
                    <div className="flex flex-col justify-center p-6 sm:p-10">

                        {/* Mobile brand */}
                        <div className="lg:hidden mb-8">
                            <h1 className="text-3xl font-extrabold text-[#245b3e]">
                                Viva<span className="text-[#76a66b]">.</span>
                            </h1>
                            <p className="text-xs tracking-[0.25em] text-gray-500 mt-1">
                                LIVE BETTER
                            </p>
                        </div>

                        <div className="mb-3">
                            <p className="text-sm font-semibold text-[#56805d] mb-2">
                                JOIN THE VIVA COMMUNITY
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-bold
                                          tracking-tight text-gray-900">
                                Reset your Password
                            </h2>

                            <p className="text-gray-500 mt-3 text-sm leading-6">
                                Reset to avoid disturbance in Shopping.
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => SubmitHandler(e)}
                            className="flex flex-col gap-2">

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Email address
                                </label>

                                <div className='relative'>
                                    <Mail color='gray'
                                        className='absolute translate-y-1/2 translate-x-1/2 top-3' />
                                </div>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full border border-gray-200 bg-gray-50
                                    rounded-xl px-5 py-3.5 text-sm text-gray-800
                                    placeholder:text-gray-400 outline-none
                                    transition-all focus:bg-white focus:border-[#56805d]
                                    focus:ring-4 focus:ring-[#56805d]/10"
                                />

                                {emailError && <p className="text-left text-sm text-red-500 mb-0">
                                    {emailError}
                                </p>}

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#245b3e] text-white
                                            rounded py-3.5 font-semibold text-sm
                                            shadow-lg shadow-[#245b3e]/15
                                            hover:bg-[#19452d] hover:shadow-xl
                                           active:scale-[0.98] transition-all duration-200">
                                Reset
                                <span className="ml-2"></span>
                            </button>

                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

