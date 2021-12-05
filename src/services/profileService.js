// const PROFILE_API = 'http://localhost:4000/api/profile';
const PROFILE_API = 'https://heroku-node-app-2021.herokuapp.com/' + 'api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(`${PROFILE_API}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((profile) => {
            dispatch({
                         type: "fetch-profile",
                         profile,
                     });
        });

export const updateCurrentProfile = (dispatch, profile) => {
    fetch(`${PROFILE_API}`, {
        method: "PUT",
        body: JSON.stringify(profile),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((profile) =>
                  dispatch({
                               type: "edit-profile",
                               profile,
                           })
        );
};