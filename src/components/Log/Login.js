import React from "react";
import './Login.css'
const Login =()=>{
    const clickHandler =()=>{

    }
    return(
        <div className="login">
            <div className='container'>
                <form >
                    <p>Login</p>
                    <input type="text" placeholder="Username" required/><br/>
                    <input type="password" required placeholder="password"/>
                    <input type="email" required placeholder="Email"/><br/>
                    <button onClick={clickHandler}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;