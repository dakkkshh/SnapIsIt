import React from "react";
import './signup.css';

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-container">
            <h1>Signup</h1>
            <p>Let's Begin You with a Snap!&#9889;</p>
            <input type="text" placeholder="Enter Your Name"></input>
            <input type="email" id = "emailText" placeholder="Enter Your E-mail"></input>
            <input type="password" id = "passwordText" placeholder="Enter Your Password"></input>
            <input type="password" id = "rePasswordText" placeholder="Re-Enter Your Password"></input>
            <div className="signup-button">Signup</div>            
            <div>or</div>
            <div className="login-button">Login</div>
            </div>
        </div>
    );
};
export default Signup;