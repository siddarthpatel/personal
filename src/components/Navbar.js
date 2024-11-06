import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    return isMobile
 }


const Navbar = ({ path }) => {
    const isMobile = useIsMobile()
    console.log(isMobile)
    return (
        <div className={ isMobile ? "navbar-container-mobile" : "navbar-container"}>
            <nav>
                <div className={ isMobile ? "navbar-container-mobile-items" : "navbar-container-items"}>
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