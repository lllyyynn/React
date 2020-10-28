import axios from 'axios';

export const fetchByUser = (userName) => {
    const endPoint = `https://api.github.com/users/${userName}`;
     return axios(endPoint);
}


export const getFollowingbyUser = (USERNAME,pageIndex=1,pageSize=10) => {
    const endPoint = `https://api.github.com/users/${USERNAME}/following?page=${pageIndex}&per_page=${pageSize}`;
    return axios(endPoint);
}
