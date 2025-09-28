import React from "react";
import './AboutApplication.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const AboutApplication =()=>{
    return(
        <div className="aboutapplication">
            <Link to="/" ><button> <FontAwesomeIcon icon={faArrowLeft}/> </button></Link>
            <h1>about application</h1>
            <p></p>
        </div>
    );
}
export default AboutApplication;