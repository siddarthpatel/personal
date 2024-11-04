import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Navbar = ({ path }) => {
    return (
        <div className="navbar-container sm:flex">
            <nav>
                <div className="navbar-container-items">
                    <Link to='/' className={path === '/' ? 'selected': ''}> 
                        <motion.div whileHover={{ scale: 1.1 }} /*whileTap={{ scale: 1.0 }}*/>
                            About
                        </motion.div>
                     </Link>
                    <Link to='/contact' className={path === '/contact' ? 'selected': ''}> 
                        <motion.div whileHover={{ scale: 1.1 }} /*whileTap={{ scale: 1.0 }}*/>
                            Contact
                        </motion.div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar