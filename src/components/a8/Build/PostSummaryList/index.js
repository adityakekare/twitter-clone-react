// import posts from "./posts.json";
import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";

const summPosts = (state) => state.summary;

const PostSummaryList = () => {
    // console.log(summPosts);
    const summaryPosts = useSelector(summPosts);
    // console.log(summaryPosts);

    return(
        <ul className="list-group">
            <li className="list-group-item">
                <div className="wd-head-image">
                    <img src="../../images/starship.jpg" className="wd-topic-heading-image"/>
                    <div className="wd-img-text">SpaceXs Starship</div>
                </div>
            </li>
            {
                summaryPosts.map(posts => {
                    return(<PostSummaryItem key={posts.id} post={posts} />);
                })
            }
        </ul>
    );
}
export default PostSummaryList;