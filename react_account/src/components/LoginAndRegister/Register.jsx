import { useState, userEffect } from "react";
import userIcon from '../Assets/person.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import { validEmail, validPassword } from './Regex.js';
import Login from "./Login.jsx";
import './LoginSignUp.module.css';
import AccountService from "../../service/AccountService.js";


function Register() {

    const [showSignUp, setShowSignUp] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [usernameInvalid, setUsernameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);

   async function handleRegisterSubmit(event) {
        event.preventDefault();
        if (username.trim() === "") {
            setUserError(true);
            return;
        }

        if (email.trim() === "") {
            setEmailError(true);
            return;
        }

        if (password.trim() === "") {
            setPasswordError(true);
            return;
        }

        if (!validEmail.test(email)) {
            setEmailInvalid(true);
            return;
        }
        if (!validPassword.test(password)) {
            setPasswordInvalid(true);
            return;
        }

        const accountService = new AccountService();
        try{

           await accountService.register(username, email, password);

        }catch(error){
            throw new Error(error);
        }

    }


    function clearInput() {
        setUsername("");
        setEmail("");
        setPassword("");
    }
    const login = {
        "color": "#464ef0",
        "text-align": "center",
        "margin": "20px 0px",
        "cursor": "pointer",
        "font-weight": "600"
    }

    const value = "Sign Up";

    function handleSignUpClick() {
        setShowSignUp(true);
    }


    return (
        <>
            <div className="container">
                {!showSignUp ? (
                    <form className="login-form" onSubmit={handleRegisterSubmit}>
                        <div className="header">
                            <div className="text">Sign Up</div>
                            <div className="underline"></div>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <img src={userIcon} alt="" />
                                <input type="text" placeholder='Enter your username'
                                    value={username} onChange={(e) => setUsername(e.target.value)}
                                    />
                                {userError && <div className="error-message">Please enter your username</div>}
                            </div>
                            <div className="input">
                                <img src={emailIcon} alt="" />
                                <input type="email" placeholder='Enter your email'
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                            {emailError && <div className="error-message">Please enter your email</div>}
                            {emailInvalid && <div className="error-message">Invalid email format</div>}

                            <div className="input">
                                <img src={passwordIcon} alt="" />
                                <input type="password" placeholder='Enter your password'
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                   />
                            </div>
                            {passwordError && <div className="error-message">
                                Please enter your password</div>}
                            {passwordInvalid && <div className="error-message">
                                Password must be at least 6 characters</div>}
                            <div className="creact-account" style={login}>Already have an account?
                                <button type="button" onClick={handleSignUpClick}>Login</button>
                            </div>
                            <div className="submit-container">
                                <input type="submit" className="submit" value={value} />
                            </div>
                        </div>
                    </form>
                ) : <Login />}
            </div>
        </>
    );

}


export default Register;