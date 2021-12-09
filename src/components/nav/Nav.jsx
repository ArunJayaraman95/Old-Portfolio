import React from 'react';
import "./Nav.css"
import {Link} from 'react-router-dom';


const Nav = () => {

    const navStyle = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <div className = "n" >
            <nav>
                <Link style = {navStyle} to = "/Portfolio">
                <h3 id = "logo-nav">Home</h3>
                </Link>
                <ul className = "nav-links">
                    <Link style = {navStyle} to="/tools">
                        <li>Grade Calculator</li>
                    </Link>
                    <Link style = {navStyle} to = "/poker">
                        <li>Poker</li>
                    </Link>
                    <Link style = {navStyle} to = "/Portfolio" >
                        <li>Resume</li>
                    </Link>
                    <Link style = {navStyle} to = "/scheduler" >
                        <li>Scheduler</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
