import React, { Component } from 'react';
import ArtistItem from './ArtistItem/ArtistItem';
//import { eachArtists } from "../model/eachArtist";
import "./Artists.css";

export default class Artists extends React.Component {
    
    render() {
        const { albumns } = this.props;
        let i = 1; 
        //this.state.albumns.map(item => console.log(item.artistId));
        return (<ul className="Artists__content">
            {albumns.map(item => <ArtistItem item={item} key={i++} itemId={i}/>)}
        </ul>)
    }

}



