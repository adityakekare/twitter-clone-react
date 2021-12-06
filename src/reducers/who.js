// import whoJson from './data/who.json';

const who = (state = [], action) => {
    return(action.whoList || state);
};

export default who;
