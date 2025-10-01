import React from 'react'
import { Link } from 'react-router-dom'
import "./sideNav.css"
import { faTimes, faList,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const sideNav = () => {
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
    const backHandler = ()=>{
        document.querySelector('.linkList').style.transitionDuration ='.5s'
        document.querySelector('.linkList').style.right='-270px'
    }
    const showHandler = ()=>{
        document.querySelector('.linkList').style.transitionDuration ='.5s'
        document.querySelector('.linkList').style.right='0px'
    }
    const style={
        'padding':'15px',
        'cursor':'pointer'
    }
    return (
        <div>
            <li onClick={showHandler} className="listIcon">
                <FontAwesomeIcon icon={faList} />
            </li>
            <div className="linkList">
                    <ul className="linkListContainer">
                        <p onClick={backHandler} style={{'padding':"0px", 'margin':'0px', 'cursor':'pointer'}}><FontAwesomeIcon icon={faTimes}/></p>
                        <li onClick={ppp} style={style}>Home </li>
                        <li onClick={ppp1} style={style}>Contant</li>
                        <li onClick={ppp2} style={style}>Contect</li>
                        <li style={style}><Link to="/allitems" >items </Link></li>
                        {/* <li className="">
                            <Link className='carttt' to="/cart">
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </Link> 
                        </li> */}
                        {
                            window.localStorage.getItem('loged')=== 'true'?
                                <li className="">
                                    <Link className='carttt' to="/cart">
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </Link> 
                                </li>
                                :""
                        }
                    </ul>
            </div>
        </div>
    )
}

export default sideNav
