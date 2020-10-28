import React from 'react';
import { fetchAlbumnsByArtistId } from '../../../apis/albumnLookUp';
import { Link } from 'react-router-dom';
import './ArtistRouterItem.css'



export default class ArtistRouterItem extends React.Component{
    state = {
        item: {}
    }
    componentDidMount() {
        const {artistId} = this.props;
        fetchAlbumnsByArtistId(artistId)
        .then(res => {this.setState({item: res.results[0]})})
        .catch(err => console.log('error'));
    }

    render(){
        const { history } = this.props;
        // console.log(itemId);
        const { item } = this.state;
        // console.log(item);
        return (
            <div className="artist-router-item">
            <p>{item.artistName}</p>
            <a href={`${item.artistLinkUrl}`} target="_blank"> Artist Link </a>
            <br/>
            <button onClick={() => history.push('/')}> Go Back</button>
        </div>
        );
    }
}