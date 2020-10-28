import React from 'react'; 
const HomePageItem = (props)=> {
    const { userfetch } = props;
    return (
        <div className="home-page-item">
            <img src={userfetch.user.avatar_url} alt=""/>
            <h2>{userfetch.login}</h2>
            <h3>{userfetch.user.identity}</h3>
            <h4>{userfetch.user.numFollowers}</h4>
        </div>
    )
}

export default HomePageItem;