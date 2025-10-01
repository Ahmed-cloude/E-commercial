import React from 'react';
import { Link } from 'react-router-dom';
import './list.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
const list = () => {
    return (
        <div className='mainContainer'>
            <div className='container'>
                <div className='iconContainer' > <FontAwesomeIcon icon={faCartShopping} /> </div>
                <div className='btn logBtn'><Link to='/login' >login</Link></div>
                <div className='btn regBtn'> <Link to='/register' >register</Link> </div>
                <div className='btn visBtn'> <Link to='/main' >Visit</Link> </div>
                <div className='iconsEnters'>
                    <div className='' > <Link to='/main' > <FontAwesomeIcon icon={faGoogle} />  </Link> </div>
                    <div className='' > <Link to='/main' > <FontAwesomeIcon icon={faFacebook} />  </Link> </div>
                    
                </div>
            </div>
        </div>
    )
}

export default list
