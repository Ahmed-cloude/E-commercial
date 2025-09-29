import React from "react";
import './Register.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Register =()=>{
    const store = useSelector(state => state);
    const patcher = useDispatch()

    const clickHandler =()=>{
        let xx = document.querySelectorAll('.container input');
        xx[0].value === store.Admin.email ? 
            xx[1].value === store.Admin.password ?
                patcher({type:'Admin'}):window.alert("Your password not correct")
            :console.log("not Admin");
        
    }
    return (
        <div className="register">
            <div className="container">
                <p>Register</p>
                <legend>Email</legend>
                <input  type="email" /><br/>
                <legend>Password</legend>
                <input type="password" /><br/>
                <Link to="/" ><button onClick={clickHandler}>Create Account</button></Link>
            </div>
        </div>
    );
}

export default Register;