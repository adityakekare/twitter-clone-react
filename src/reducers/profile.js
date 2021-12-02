import profileData from './data/profile.json';

const profile = (state = profileData, action) => {
    switch (action.type) {
        case 'create-profileData':
            return state.map(data => {
                if (data.id === action.profileData.id) {
                    return data;
                } else {
                    return data;
                }
            });

        case 'fetch-profile':
            return action.profile;

        default:
            return (state);

    }
};

export default profile;

