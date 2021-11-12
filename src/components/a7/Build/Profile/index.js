import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";

const Profile = () => {
	const profileData = useSelector((state) => state.profile);
	
    return(
            
				who.map(who=>{
         			return(<WhoToFollowListItem who={who}/>
         				);
     })
 

    );
}
export default Profile;