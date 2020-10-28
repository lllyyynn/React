import React from 'react';
import Nav from '../Nav/Nav'
import "./Header.css";

const Header= (props) => {
    const { handleInputKeyUp } = props;

    return (
        <header className="header-list"><Nav handleInputKeyUp = {handleInputKeyUp}/></header>
    )
}

export default Header;