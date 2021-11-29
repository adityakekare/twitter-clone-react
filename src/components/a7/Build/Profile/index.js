import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";

const profileData = (state) => state.profile;
const Profile = () => {
	const data = useSelector(profileData);
    return(
            
				data.map(data=>{
         			return(<ProfileItem key={data.id} data={data} />
         				);
     })
 

    );
}
export default Profile;