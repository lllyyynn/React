import React from 'react';

 const FollowingItem = (props) => {
     
    const { avatar_url, login } = props;
    return (
        <li className="following-item">
            <img src={avatar_url} alt=""/><span>{login}</span>
        </li>
    )
}

export default FollowingItem;