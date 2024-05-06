import { useState } from "react";
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import { validEmail, validPassword } from './Regex.js';
import Register from "./Register.jsx";
import './LoginSignUp.module.css';
function Login() {

    const [showSignUp, setShowSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    function handleSignUpClick() {
        setShowSignUp(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        if (email.trim() === "") {
            setEmailError(true);
            return;
        } else {
            setEmailError(false);
        }
    
        if (password.trim() === "") {
            setPasswordError(true);
            return;
        } else {
            setPasswordError(false);
        }
    
        if (!validEmail.test(email)) {
            setEmailInvalid(true);
            return;
        }
        if (!validPassword.test(password)) {
            setPasswordInvalid(true);
            return;
        }
    
    }
    

    function clearInput() {
        setUsername("");
        setEmail("");
        setPassword("");
    }

    const signUp = {
        "color": "#464ef0",
        "text-align": "center",
        "margin": "10px 0px",
        "cursor": "pointer",
        "font-weight": "600"
    }


    const value = "Login";

    return (
        <>
            <div className="container">
                {showSignUp ? (
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="header">
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">

                        <div className="input">
                            <img src={emailIcon} alt="" />
                            <input type="email" placeholder='Enter your email'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        {emailError && <div className="error-message">Please enter your email</div>}
                        {emailInvalid && <div className="error-message">Invalid email </div>}

                        <div className="input">
                            <img src={passwordIcon} alt="" />
                            <input type="password" placeholder='Enter your password'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {passwordError && <div className="error-message">
                            Please enter your password</div>}
                        {passwordInvalid && <div className="error-message">
                            Invalid password </div>}

                        <div className="creact-account" style={signUp}>Don't have an account? 
                        <button type="button" onClick={handleSignUpClick}> Sign Up</button></div>
                        <input type="submit" className="submit" value={value} />
                    </div>
                </form>
                ) : <Register />}
            </div>
        </>
    );

}

export default Login;