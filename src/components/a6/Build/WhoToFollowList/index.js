import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return(
            
				who.map(who=>{
         			return(<WhoToFollowListItem who={who}/>
         				);
     })
 

    );
}
export default WhoToFollowList;