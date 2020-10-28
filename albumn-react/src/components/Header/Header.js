import React from 'react';
import "./Header.css";
import { fetchAlbumns } from '../../apis/albumnAPI';

export default class Header extends React.Component {
    render() {
        const { handleInputKeyUp } = this.props;
        return (
        <header className="page-header">
            <div className="input-container">
            <input className="input-filed" 
            type="text" 
            placeholder="Artist Name" 
            onKeyUp={handleInputKeyUp} 
            name="inputField"
            />
            </div>
        </header>);
    }
}