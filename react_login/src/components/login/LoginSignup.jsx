
import userIcon from '../Assets/person.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import { useState } from 'react';
import React from 'react';
import { validEmail, validPassword } from './Regex.js';

function LoginSignup() {

    const [action, setAction] = useState("Sign Up");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefautl();
        if (!validEmail.test(email)) {
            setEmailError(true);
            return;
        }
        if (!validPassword.test(password)) {
            setPasswordError(true);
            return;
        }

    }

    function clearInput() {
        setUsername("");
        setEmail("");
        setPassword("");
    }

    const style = {
        "margin-bottom": "10px",
    }

    return (
        <div className={mainStyle}>
            <div className="container">
                <form className="login-form" onClick={handleSubmit}>
                    <div className="header">
                        <div className="text">{action}</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        {action === "Sign Up" ? (
                            <div className="input">
                                <img src={userIcon} alt="" />
                                <input type="text" placeholder='Enter your username'
                                    value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        ) : null}
                    </div>

                    <div className="input" style={style}>
                        <img src={emailIcon} alt="" />
                        <input type="email" placeholder='Enter your email'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {emailError && <div className="error-message">Invalid email format</div>}

                    <div className="input">
                        <img src={passwordIcon} alt="" />
                        <input type="password" placeholder='Enter your password'
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {passwordError && <div className="error-message">
                        Password must be at least 6 characters</div>}

                    {action === "Login" ? (
                        <div className="create-account">Forgot password?</div>
                    ) : null}
                    <div className="submit-container">
                        <button type="button" className={action === "Login" ? "submit gray" : "submit"}
                            onClick={() => { setAction("Sign Up") }}>Sign Up</button>
                        <button type="button" className={action === "Sign Up" ? "submit gray" : "submit"}
                            onClick={() => { setAction("Login") }}>Login</button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default LoginSignup;