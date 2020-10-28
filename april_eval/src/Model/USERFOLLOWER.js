import React from 'react'; 
/* export class USER {
    constructor(errfree, avatar_url, identity, numFollowers){
        this.errfree = errfree;
        this.avatar_url = avatar_url;
        this.identity = identity; 
        this.numFollowers = numFollowers
    }
} */

export const USER = (avatar_url, identity, numFollowers) => {
    return {
        avatar_url: avatar_url,
        identity: "Github " + identity,
        numFollowers: numFollowers
        }
}



