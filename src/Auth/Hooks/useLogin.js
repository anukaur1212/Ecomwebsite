import { useState } from "react";
import { Navigate } from "react-router-dom";


const useLogin = () => {

// const navigate = useNavigate();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Radio, setRadio] = useState(false)


    // Validations
    const [NameError, setNameError] = useState("")
    const [EmailError, setEmailError] = useState("")
    const [PasswordError, setPasswordError] = useState("")
    const [ConfirmPassError, setConfirmPassError] = useState("")

    const [ExistEmailErr, setExistEmailErr] = useState("")
    const [signupError, setSignupError] = useState("")

  
  
    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (Password !== ConfirmPassword) {
            setConfirmPassError("Password didnt matched");
            return;
        }
        setConfirmPassError("");

        // ReValidate errors
        const nameError = ValidateName(Name);
        const emailError = ValidateEmail(Email);
        const passwdError = ValidatePassword(Password);

        setNameError(nameError);
        setEmailError(emailError);
        setPasswordError(passwdError);

        if (nameError || emailError || passwdError) {
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: Email,
            password: Password,
            options: {
                data: { name: Name }
            }
        });

        if (error) {
            setSignupError(error.message);
            return;
        }

        // Clearing input fields
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")
        setRadio(false);

        // navigate("/dashboard", { replace: true });

    }



    return ({ Name, Email, Password, ConfirmPassword, Radio, NameError, EmailError, PasswordError,
         ConfirmPassError, ExistEmailErr, signupError,SubmitHandler,setEmail,setConfirmPassError,
         setConfirmPassword,setEmailError,setNameError,setPasswordError })
}

export default useLogin;