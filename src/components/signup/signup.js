import React,{useState} from "react";
import axios from 'axios';
import './signup.css';

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });
    const handleChange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const SingupUser = ()=>{
        const {name,email,password,rePassword} = user
        if(password !== rePassword){
            alert('Password Missmatch')   
        }else if(!name || !email || !password || !rePassword){
            alert('Enter your details!')
        }else if(email.substring(email.length-4) !== '.com'){
            alert('Enter correct email!')
        }else {
            // alert('Successfully Signed Up!')
            axios.post('http://localhost:9002/signup', {
                name,
                email,
                password
            }).then(res => {
                console.log(res)
            })
        }
    }
    return (
        <div className="signup">
            <div className="signup-container">
            <h1>Signup</h1>
            <p>Let's Begin You with a Snap!&#9889;</p>
            <input type="text" name ="name" value = {user.name} placeholder="Enter Your Name" onChange={handleChange}></input>
            <input type="email" name = "email" value = {user.email} placeholder="Enter Your E-mail" onChange={handleChange}></input>
            <input type="password" name = "password" value = {user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <input type="password" name = "rePassword" value = {user.rePassword} placeholder="Re-Enter Your Password" onChange={handleChange}></input>
            <div className="signup-button" onClick ={SingupUser}>Signup</div>            
            <div>or</div>
            <div className="login-button">Login</div>
            </div>
        </div>
    );
};
export default Signup;