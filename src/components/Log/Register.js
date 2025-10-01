import React from "react";
import './Register.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
const Register =()=>{
    const [info, setInfo] = useState({
        email:false,
        password:false
    })
    const store = useSelector(state => state);
    const patcher = useDispatch()

    const changeHandler =(ele)=>{
        if((ele.target.value).length !== 0)
            setInfo({...info , email:true})
        else 
            setInfo({...info , email:false})
    }
    const changeHandler1 =(ele)=>{
        if((ele.target.value).length !== 0)
            setInfo({...info , password:true})
        else 
            setInfo({...info , password:false})
    }

    const clickHandler =()=>{
        window.localStorage.setItem('loged',true);
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
                <input onChange={changeHandler} type="email" /><br/>
                <legend>Password</legend>
                <input onChange={changeHandler1} type="password" /><br/>
                {
                    info.email ?
                        info.password ?
                            <Link to="/main" ><button onClick={clickHandler}>Create Account</button></Link>
                        :"plaese enter your password"
                    :"please enter your email"
                }
            </div>
        </div>
    );
}

export default Register;