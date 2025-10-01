import React from "react";
import "./NavBar.css";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload,faCartArrowDown,faTimes,faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import SideNav from "./sideNavBar/sideNav";
const NavBar =()=>{

    const ppp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    const ppp1=()=>{
        window.scrollTo({
            top:document.querySelector(".lyout").clientHeight +100,
            behavior:"smooth"
        })
    }
    const ppp2=()=>{
        
        window.scrollTo({
            top:document.querySelector(".conatnt").clientHeight + document.querySelector(".lyout").clientHeight +100,
            behavior:"smooth"
        })
    }
    const loginHandler =(e)=>{
        console.log(e.target)
    }
    const logoutHandler =()=>{
        localStorage.clear();
        sessionStorage.clear();
        window.location.href='/'
    }
    return (
        <div className="navbar">
            {/* <ul>
                <li className="btn"> 
                    <Link to="/login">
                        <button className="login" onClick={(e)=> loginHandler(e)}> login</button>
                    </Link>

                    <Link to='/register' ><button className="register">register</button></Link>
                </li>
            </ul> */}
            {
                window.localStorage.getItem('loged')=== 'false' ?
                    <ul>
                        <li className="btn"> 
                            <Link to="/login">
                                <button className="login" onClick={(e)=> loginHandler(e)}> login</button>
                            </Link>

                            <Link to='/register' ><button className="register">register</button></Link>
                        </li>
                    </ul>
                    :
                    <div className="logout" onClick={logoutHandler} >
                        log out
                    </div>
                    
            }
            <ul>
                <div className="linkContainer">
                    <li onClick={ppp} >Home </li>
                    <li onClick={ppp1} >Contant</li>
                    <li onClick={ppp2} >Contect</li>
                    <li><Link to="/allitems">items </Link></li>
                </div>
                {/* <li className="cartIcon">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartArrowDown} />
                    </Link> 
                </li> */}
                {
                    window.localStorage.getItem('loged')=== 'true'?
                        <li className="cartIcon">
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </Link> 
                        </li>
                        :""
                }
                <SideNav />
            </ul>
            
        </div>
    );
}
export default NavBar;