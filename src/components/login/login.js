import React from "react";
import './login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
            <h1>Login</h1>
            <p>Welcome Back!&#9889;</p>
            <input type="text" id="emailText" placeholder="Enter Your E-mail"></input>
            <input type="password" placeholder="Enter Your Password"></input>
            <div className="login-button">Login</div>            
            <div>or</div>
            <div className="signup-button">Signup</div>
            </div>
        </div>
    );
};
export default Login;