import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav>
                <div className="navbar-container-items">
                    <Link to='/'> About </Link>
                    <Link to='/contact'> Contact </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar