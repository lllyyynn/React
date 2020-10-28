import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="Nav">
           <Link to="/About">About</Link>
           <Link to="/Shop">Shop</Link>
        </div>
    )
}

export default Nav; 
