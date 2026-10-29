import { KeyRound, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ValidateEmail, ValidatePassword } from "../../Share/Validation/Validation";
import { supabase } from "../../supabaseClient";
import loginBg from "/src/assets/img/loginBg.png"
import Animation from "../components/Animation";

export const Login = () => {

    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Radio, setRadio] = useState(false)

    const [EmailError, setEmailError] = useState("")
    const [PasswordError, setPasswordError] = useState("")

    const [loginSuccess, setLoginSuccess] = useState("")
    const [loginError, setloginError] = useState("")


    const loginHandler = async (e) => {
        e.preventDefault();

        // ReValidate errors
        const emailError = ValidateEmail(Email);
        const passwdError = ValidatePassword(Password);

        setEmailError(emailError);
        setPasswordError(passwdError);

        if (emailError || passwdError) {
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email: Email,
            password: Password,
        });

        if (error) {
            setloginError("Invalid email or password");
            setloginError(error.message);
            return;
        }

        setLoginSuccess("Login successfully");
        setEmail("");
        setPassword("");
        setRadio(false);

        localStorage.setItem("isloggedIn", "true");
        navigate("/dashboard", { replace: true });
    }

    return (
        <>

            <div className="relative min-h-screen w-full bg-[#f5f7f2] flex justify-center
                         p-4 py-5 lg:py-4">

                            <Animation/>

                <div className="w-full z-40 lg:w-[80%] bg-white rounded-3xl 
                             shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT SIDE - BRAND & ILLUSTRATION */}
                    <div className="hidden lg:flex flex-col justify-between
                                 bg-[#e9f0e5] p-8 relative overflow-hidden">

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

                        <div className="flex flex-col">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d522e]
                            hover:text-[#347e58] cursor-pointer">
                                Better Products.
                                <br />
                                Brighter You.
                            </h2>

                            <p className=" text-[#617766] max-w-sm">
                                Discover everyday essentials, thoughtful finds,
                                and products that make life better.
                            </p>

                            <div className="mt-3 filter grayscale cursor-pointer
                                         hover:grayscale-0 transition-all duration-200">
                                <img
                                    src={loginBg}
                                    alt="Viva online shopping illustration"
                                    className="w-full h-64 lg:h-80 object-cover
                                               rounded"
                                />
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

                        <div className="mb-7">
                            <p className="text-sm font-semibold text-[#56805d] mb-2">
                                JOIN THE VIVA COMMUNITY
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-bold
                                          tracking-tight text-gray-900">
                                Login your Account
                            </h2>

                            <p className="text-gray-500 mt-3 text-sm leading-6">
                                Login to Continue your shopping.
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => SubmitHandler(e)}
                            className="flex flex-col gap-2">
                            {loginError && (
                                <p className="text-xs text-red-500">{loginError}</p>
                            )}

                            {loginSuccess && (
                                <p className="text-xs text-red-500">{loginSuccess}</p>
                            )}

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
                                    /></div>

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
                                        type="password"
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
                                </div>

                                {PasswordError && (
                                    <p className="text-xs text-red-500">
                                        {PasswordError}
                                    </p>
                                )}
                            </div>


                            {/* Terms and Conditions */}
                            <div className="flex items-center justify-between">
                                <label className="flex gap-3 mt-1
                                          text-sm text-gray-600 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={Radio}
                                        onChange={(e) => setRadio(e.target.checked)}
                                        required
                                        className="mt-1 w-4 h-4 accent-[#245b3e]
                                                cursor-pointer shrink-0"
                                    />     <span> Remember me</span>
                                </label>

                                <Link to="/forgetpassword" className="forgetLink">
                                    Forget password?</Link>
                            </div>

                            {/* Submit Button */}
                            <br />
                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#245b3e] text-white
                                            rounded py-3.5 font-semibold text-sm
                                            shadow-lg shadow-[#245b3e]/15
                                            hover:bg-[#19452d] hover:shadow-xl
                                           active:scale-[0.98] transition-all duration-200 
                                           ">
                                Login
                                <span className="ml-2"></span>
                            </button>

                            {/* Login Link */}
                            <p className="text-center text-sm text-gray-500 mt-2 mb-0">
                                Don't have an account?
                                <Link
                                    to="/"
                                    className="signupLink">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>


                </div >
            </div >

        </>
    )
}

export default Login;