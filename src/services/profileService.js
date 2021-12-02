const PROFILE_API = 'http://localhost:4000/api/profile';
// const PROFILE_API = 'https://heroku-node-app-2021.herokuapp.com/' + 'api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
                  dispatch({
                               type: 'fetch-profile',
                               profile
                           })
        );