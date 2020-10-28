import React from 'react';

 const FollowingPage = (props) => {
     const { children } = props; 
    return (
        <ul className="following-content">
            {children}
        </ul>
    )
}

export default FollowingPage;