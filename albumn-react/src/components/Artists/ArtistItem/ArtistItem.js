import React from 'react';
import './ArtistItem.css';
import { Link } from 'react-router-dom';
export default function ArtistItem(props){
        const { item, itemId } = props; 
        // console.log(itemId);
        return (
        <li className="artist-item"> 
        <Link to= {`/albumn/${item.artistId}`}>
        <img src={item.artworkUrl100} alt="" />
        </Link>
        <p>{item.collectionName}</p></li>
        );
}