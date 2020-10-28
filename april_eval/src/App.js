//import logo from './logo.svg';
import Nav from './components/Nav/Nav'
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import { fetchByUser, getFollowingbyUser } from './components/api/api';
import HomePageItem from './components/HomePage/HomePageItem';
import { USER } from './Model/USERFOLLOWER';
import FollowingItem from './components/FollowingPage/FollowingItem/FollowingItem';
import FollowingPage from './components/FollowingPage/FollowingPage';

export default class App extends React.Component{
  state = {
    login: "",
    errfree: false,
    user :{avatar_url: "", 
    numFollowers: 0, /*followers*/
    identity: "Github User", /*type: user*/
  },
    following: []
  }


  handleInputKeyUp = (e) => {
    if (e.key === 'Enter') {
      fetchByUser(e.target.value).then(res => {
        this.setState({
          login: res.data.login,
          errfree: true,
          user: USER(res.data.avatar_url,
            res.data.type,
            res.data.followers)
        })
      }).catch(err => {
        this.setState({
          errfree: false,
          login: e.target.value,
        })
        
        //getFollowingbyUser(e.target.value)
      });
      getFollowingbyUser(e.target.value).then(res => res.data)
      .then(data => data.map(item => [item.avatar_url,item.login]))
      .then(res => this.setState({
        following: res
      }))
      .catch(err => err);
    }}

  UserNotfound = (user_name) => {
    return (
    <h1>User "{user_name}" was not found...</h1>
    )
  }

  render(){
    let HomeContent; 
    let FollowingContent;
     if (this.state.errfree) {
        HomeContent = <HomePageItem userfetch={this.state}/>;
        const followingItems = this.state.following.map(item => <FollowingItem avatar_url={item[0]} login={item[1]}/>);
        FollowingContent = <FollowingPage>{followingItems}</FollowingPage>
    }
    else {
      if (this.state.login.length !== 0){
      HomeContent = this.UserNotfound(this.state.login);
      FollowingContent = HomeContent;}
    } 

    return (
    <div className="App">
      <BrowserRouter>
        <Header handleInputKeyUp = {this.handleInputKeyUp}/>
        <Switch>
          <Route exact path="/Home">
              { HomeContent }
          </Route>

          <Route path="/Following">
              { FollowingContent }
          </Route>

          <Route exact path="/">
              { HomeContent }
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
  }

}

/* { HomeContent }
      
 { FollowingContent } */
