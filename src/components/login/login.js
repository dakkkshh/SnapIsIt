import React,{useState} from "react";
import './login.css';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <div className="login">
            <div className="login-container">
            <h1>Login</h1>
            <p>Welcome Back!&#9889;</p>
            <input type="text" name="email" value={user.email} placeholder="Enter Your E-mail" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <div className="login-button">Login</div>            
            <div>or</div>
            <div className="signup-button">Signup</div>
            </div>
        </div>
    );
};
export default Login;