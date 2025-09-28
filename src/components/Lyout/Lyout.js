import React from "react";
import "./Lyout.css"
import myImage from "../../image/Screenshot 2025-04-25 152919.png"
import { Link } from "react-router-dom";

const Lyout =()=>{
    
    
    return (
        <div className="lyout"> 
            <div>
                <h2>welcome to you in our clothes store where <br/>
                you found everything and you <br/>
                can ask for anything simply </h2>
                <Link to='/aboutapplication' ><button>learn more about our Application</button></Link>
            </div>
            <div className="imageContainer" ><img src={myImage} alt="img " /></div>
        </div>
    );
}

export default Lyout