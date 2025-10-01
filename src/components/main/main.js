import React from 'react'

import NavBar from '../Navbar/NavBar';
import Lyout from '../Lyout/Lyout';
import Content from '../Contant/Content';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const main = () => {
    return (
        <div>
            <NavBar />
            <Lyout />
            <Content />
            <Contact />
            <Footer />
        </div>
    )
}

export default main
