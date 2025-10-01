import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from "react";
const Login =()=>{
    const [info , setInfo] = useState({
        name:false,
        password:false,
        email:false,
    })
    const changeHandler =(ele)=>{
        console.log(ele.target.value)
        if((ele.target.value).length !== 0)
            setInfo({...info,name:true})
        else
        setInfo({...info,name:false})
    }
    const changeHandler1 =(ele)=>{
        console.log(ele.target.value)
        if((ele.target.value).length !== 0)
            setInfo({...info,password:true})
        else
            setInfo({...info,second:false})
    }
    const changeHandler2 =(ele)=>{
        console.log(ele.target.value)
        if((ele.target.value).length !== 0)
            setInfo({...info,email:true})
        else
            setInfo({...info,email:false})
    }
    const clickHandler =()=>{
        window.localStorage.setItem('loged',true);
    }
    return(
        <div className="login">
            <div className='container'>
                <form >
                    <p>Login</p>
                    <input onChange={(ele)=>changeHandler(ele)} type="text" placeholder="Username" required/><br/>
                    <input onChange={(ele)=>changeHandler1(ele)} type="password" required placeholder="password"/>
                    <input onChange={(ele)=>changeHandler2(ele)} type="email" required placeholder="Email"/><br/>
                    {
                        info.name? 
                            info.password? 
                                info.email?
                                    <Link to='/main'><button onClick={clickHandler}>Log in </button></Link>
                                    :"please enter your email"
                                :"please enter password"
                            :"please Enter your name"
                    }
                    {/* <Link to='/main'><button onClick={clickHandler}>Log in </button></Link> */}
                </form>
            </div>
        </div>
    );
}

export default Login;