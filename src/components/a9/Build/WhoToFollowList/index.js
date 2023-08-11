import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {fetchAllWho} from "../../../../services/whoService";

const WhoToFollowList = () => {
	const who = useSelector((state) => state.who);
	// console.log(who);
	const dispatch = useDispatch();
	useEffect(() => fetchAllWho(dispatch), [])
    return(
            
				who.map(who=>{
         			return(<WhoToFollowListItem key= {who.id} who={who} />
         				);
     })
 

    );
}
export default WhoToFollowList;