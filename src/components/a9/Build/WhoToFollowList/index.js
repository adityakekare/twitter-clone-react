import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
	const who = useSelector((state) => state.who);
	// console.log(who);
    return(
            
				who.map(who=>{
         			return(<WhoToFollowListItem key= {who.id} who={who} />
         				);
     })
 

    );
}
export default WhoToFollowList;