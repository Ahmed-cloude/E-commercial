import React from "react";
import './Register.css'

const Register =()=>{
    const clickHandler =()=>{
        
    }
    return (
        <div className="register">
            <div className="container">
                <p>Register</p>
                <legend>Name</legend>
                <input type="text" /><br/>

                <legend>Email</legend>
                <input type="email" /><br/>

                <legend>Password</legend>
                <input type="password" /><br/>

                <button onClick={clickHandler}>Create Account</button>
            </div>
        </div>
    );
}

export default Register;