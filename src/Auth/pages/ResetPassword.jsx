import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { KeyRound } from "lucide-react";
import Animation from "../components/Animation";

export const ResetPassword = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [passwordError, setPasswordError] = useState("")
    const [passwordSuccess, setPasswordSuccess] = useState("")

    const navigate = useNavigate()

    async function HandleReset(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }

        const { error } = await supabase.auth.updateUser({
            password: password
        })

        if (error) {
            alert(error.message);
        } else {
            setPasswordSuccess("password updated successfully");
            navigate("/login", { replace: true });
        }
    }

    return (
        <>


            <div className="relative min-h-screen w-full bg-[#f5f7f2] flex justify-center items-center
                          p-5">

                <Animation/>

                <div className="z-50 w-full lg:w-[40%] h-1/2 bg-white rounded-3xl 
                             shadow-xl overflow-hidden grid grid-cols-1">

                    {/* RIGHT SIDE - SIGNUP FORM */}
                    <div className="flex flex-col justify-center p-6 sm:p-10">

                        {/* Mobile brand */}
                        <div className="lg:hidden mb-3">
                            <h1 className="text-3xl font-extrabold text-[#245b3e]">
                                Viva<span className="text-[#76a66b]">.</span>
                            </h1>
                            <p className="text-xs tracking-[0.25em] text-gray-500 mt-1">
                                LIVE BETTER
                            </p>
                        </div>

                        <div className="mb-4">

                            <h2 className="text-3xl sm:text-4xl font-bold
                                          tracking-tight text-gray-900">
                                Reset your Password
                            </h2>

                            <p className="text-gray-500 mt-3 text-sm leading-6 mb-0">
                                Reset to avoid disturbance in Shopping.
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => SubmitHandler(e)}
                            className="flex flex-col gap-2">

                            {passwordError && <p className="text-left text-red-500 mb-0">
                                {passwordError}
                            </p>}

                            {passwordSuccess && <p className="text-left text-green-500 mb-0">
                                {passwordSuccess}
                            </p>}

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full border border-gray-200 bg-gray-50
                                     rounded-xl px-2 py-3.5 text-sm text-gray-800
                                    placeholder:text-gray-400 outline-none
                                     transition-all focus:bg-white focus:border-[#56805d]
                                     focus:ring-4 focus:ring-[#56805d]/10"
                                />

                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Confirm password
                                </label>

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Re-enter your password"
                                    required
                                    className="w-full border border-gray-200 bg-gray-50
                                     rounded-xl px-2 py-3.5 text-sm text-gray-800
                                    placeholder:text-gray-400 outline-none
                                     transition-all focus:bg-white focus:border-[#56805d]
                                     focus:ring-4 focus:ring-[#56805d]/10"
                                />

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#245b3e] text-white
                                            rounded py-3.5 font-semibold text-sm
                                            shadow-lg shadow-[#245b3e]/15
                                            hover:bg-[#19452d] hover:shadow-xl
                                           active:scale-[0.98] transition-all duration-200">
                                Change Password
                                <span className="ml-2"></span>
                            </button>

                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}
export default ResetPassword;