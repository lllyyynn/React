import React from 'react';
import { Link } from 'react-router-dom';
 const Nav = (props) => {
    const {handleInputKeyUp} = props;
    return (
        <div className="navbar">
            <Link  to="/Home" >Home</Link>
            <Link  to="/Following">Following</Link>
            <input className="inputfield" type="text" placeholder="github user" onKeyUp={handleInputKeyUp}/>
        </div>
    )
}

export default Nav; 