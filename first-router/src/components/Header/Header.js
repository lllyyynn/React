import React from 'react'; 
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-list">
                <Logo />
                <Nav />
            </div>
        )
    }
}