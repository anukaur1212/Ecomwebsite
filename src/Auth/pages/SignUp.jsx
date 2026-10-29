import { useState } from "react";
import { supabase } from "../../supabaseClient";
import Animation from "../components/Animation";
import signUpBg from "/src/assets/img/ecomBg.png"
import Form from "../components/Form";



export const SignUp = () => {
   

    return (
        <>

            <div className="relative min-h-screen w-full bg-[#f5f7f2] 
            flex justify-center items-center p-4">
              <Animation/>

                <div className="z-40 w-full lg:w-[80%]
                 bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT SIDE - BRAND & ILLUSTRATION */}
                    <div className="hidden lg:flex flex-col justify-between
                     bg-[#e9f0e5] p-10 relative overflow-hidden">

                <div className="relative">
                    <h1 className="text-4xl font-extrabold
                            text-[#245b3e]">
                        Viva<span className="text-[#76a66b]">.</span>
                    </h1>

                    <p className="text-xs text-[#52745b]
                             font-semibold mt-1">
                        LIVE BETTER
                    </p>
                </div>

                <div className="my-3">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0d522e]">
                        Better Products.
                        <br />
                        Brighter You.
                    </h2>

                    <p className="mt-4 text-[#617766] max-w-sm">
                        Discover everyday essentials, thoughtful finds,
                        and products that make life better.
                    </p>


                    <div className="mt-8 filter grayscale cursor-pointer
                             hover:grayscale-0 transition-all duration-200">
                        <img
                            src={signUpBg}
                            alt="Viva online shopping illustration"
                            className="w-full h-64 lg:h-83 object-contain
                                   rounded"
                        />
                    </div>
                </div>

                <div className=" flex gap-3
                           text-sm text-[#52745b]">
                    <span className="flex items-center justify-center
                            w-10 h-10 rounded-full bg-white text-[#245b3e]">
                        ✓
                    </span>
                    <div className="">
                        <p className="font-semibold text-[#245b3e] mb-0">
                            Shopping made simple
                        </p>
                        <p className="text-xs mt-1">
                            Quality finds, delivered with care.
                        </p>
                    </div>
                </div>
                     </div>

                    {/* RIGHT SIDE - SIGNUP FORM */}
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

                        <div className="mb-4">
                            <p className="text-sm font-semibold text-[#56805d] mb-2">
                                JOIN THE VIVA COMMUNITY
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-bold
                              tracking-tight text-gray-900">
                                Create your account
                            </h2>

                            <p className="text-gray-500 mt-3 text-sm mb-0">
                                Sign up to discover products you'll love.
                            </p>
                        </div>

                     <Form/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SignUp;