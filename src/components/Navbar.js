import React from "react";
import { Link } from 'react-router-dom';


const Navbar = ({ path }) => {
    return (
        <div className="navbar-container">
            <nav>
                <div className="navbar-container-items">
                    <Link to='/' className={path === '/' ? 'selected': ''}> About </Link>
                    <Link to='/contact' className={path === '/contact' ? 'selected': ''}> Contact </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar