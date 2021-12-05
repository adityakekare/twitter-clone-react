import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {getCurrentProfile} from "../../../../services/profileService";

const profileData = (state) => state.profile;
const Profile = () => {
	const data = useSelector(profileData);
	// console.log(data);
	const dispatch = useDispatch();
	useEffect(() => getCurrentProfile(dispatch), []);
    return(
				data.map(data=>{
         			return(<ProfileItem key={data.id} data={data} />
         				);
     })
 

    );
}
export default Profile;