import React from 'react';
import Header from '../Header/Header';
import Artists from '../Artists/Artists';
import { fetchAlbumns } from '../../apis/albumnAPI';
import { Route, Switch, withRouter } from 'react-router-dom';
import './Layout.css'; 
import ArtistRouterItem from '../Artists/ArtistRouterItem/ArtistRouterItem';

class Layout extends React.Component{
    state = {
        albumns: [],
        inputArtist: "", 
    }
    
      handleInputKeyUp = (event) => {
      if (event.key === 'Enter') {
        fetchAlbumns(event.target.value).then(data => this.setState({albumns : data.results,}));
        event.target.value = "";
      }

    };
   //albumns: fetchAlbumns(event.target.value).then(data => this.setState({: data.results}));
      
    render() {
        return (
            <>
            <div><Header handleInputKeyUp={this.handleInputKeyUp}></Header></div>
            <div>
              <Switch> 
                <Route
                  exact 
                  path={'/'}
                  render={(routerProps) => <Artists albumns={this.state.albumns}/>
                  }
                />
                <Route
                  path={'/albumn/:artistId'}
                  render={(routerProps) => {
                    //console.log('ok');
                    const artistId = routerProps.match.params.artistId;
                    return (
                      <ArtistRouterItem artistId={artistId} history={routerProps.history}/>
                    )
                  }
                  }
                />  
                <Route
                  component={NotFound}
                /> 
              </Switch>
            </div>
            </>
        )
    }
}

function NotFound() {
  return (
    <p>
      Not Found
    </p>
  )
}
export default Layout;