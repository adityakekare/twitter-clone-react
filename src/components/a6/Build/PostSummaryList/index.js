import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";

const WhoToFollowList = () => {
    return(
    	<ul className="list-group">
    		<li className="list-group-item">
            <div className="wd-head-image">
              <img src="starship.jpg" className="wd-topic-heading-image"/>
            <div className="wd-img-text">SpaceXs Starship</div>
            </div>
            </li>
            {
                posts.map(posts => {
                    return(PostSummaryItem(posts));
                })
            }
        </ul>
    );
}
export default WhoToFollowList;