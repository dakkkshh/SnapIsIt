import React from "react";
import './login.css';

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Enter Your E-mail"></input>
            <input type="password" placeholder="Enter Your Password"></input>
            <div className="button">Login</div>            
            <div>or</div>
            <div className="button">Signup</div>
        </div>
    );
};
export default Login;