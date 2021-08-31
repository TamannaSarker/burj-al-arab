import React  from 'react';
import {Link} from "react-router-dom";
import image from '../../images/logo.png'

import './Menu.css'


function Menu ()  {
    return (
        <>
            <nav>  
                <img src={image} alt="" />
                <form action="">
                    <input type="text"  placeholder="Search your Destination"/>
                </form>
                <Link to="/">Home</Link>
                <Link to="/form">Booking</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login/Logout</Link>
            </nav>

        </>
    )
};

export default Menu;