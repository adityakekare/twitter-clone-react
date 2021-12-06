// const WHO_API = 'http://localhost:4000/rest/who';
const WHO_API = 'https://heroku-node-app-2021.herokuapp.com/' + 'rest/who';

export const fetchAllWho = (dispatch) =>
    fetch(WHO_API)
        .then(response => response.json())
        .then(whoList =>
                  dispatch({
                               type: "fetch-all-who",
                               whoList
                           })
        );



