import React,{useState} from "react";
import axios from "axios";
import Signup from "../signup/signup";
import './login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
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
    const LoginUser = ()=>{
        const {email,password} = user
        if(!email || !password){
            alert('Enter your details!')
        }else if(email.substring(email.length-4) !== '.com'){
            alert('Enter correct email!')
        }else {
            axios.post('http://localhost:9002/login', {
                email,
                password
            }).then(res => {
                alert(res.data)
                console.log(res)
            }).catch(err => {
                alert('Error Encounterd!')
            })
        }
    }
    const SignUp = ()=>{
        navigate('/SnapIsIt/signup')
    }
    return (
        <div className="login">
            <div className="login-container">
            <h1>Login</h1>
            <p>Welcome Back!&#9889;</p>
            <input type="text" name="email" value={user.email} placeholder="Enter Your E-mail" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <div className="login-button" onClick = {LoginUser}>Login</div>            
            <div>or</div>
            <div className="signup-button" onClick={SignUp}>Signup</div>
            </div>
        </div>
    );
};
export default Login;