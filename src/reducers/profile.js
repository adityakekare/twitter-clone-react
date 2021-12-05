import profileData from './data/profile.json';
import moment from "moment";

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

        case 'edit-profile':
            // console.log(action.profile);
            const newProfile = {};
            if (action.profile.name) {
                newProfile["firstName"] = action.profile["name"].split(" ")[0];
                newProfile["lastName"] = action.profile["name"].split(" ")[1];
            }

            if(action.profile.bio){
                newProfile["bio"] = action.profile["bio"];
            }

            if(action.profile.location){
                newProfile["location"] = action.profile["location"];
            }

            if(action.profile.website){
                newProfile["website"] = action.profile["website"];
            }

            if(action.profile.dateOfBirth){
                console.log(action.profile["dateOfBirth"]);
                newProfile["dateOfBirth"] = moment(action.profile["dateOfBirth"], 'Y/M/D').format('M/D/Y').toString();
                console.log(newProfile["dateOfBirth"]);
            }

            return [
                {
                    ...state[0],
                    // ...action.profile,
                    ...newProfile,
                }
            ];

        default:
            return (state);

    }
};

export default profile;

