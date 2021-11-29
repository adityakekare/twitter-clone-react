import React from "react";
import {useSelector} from "react-redux";
import PostItem from "./PostItem";

const selectAllTweets = (state) => state.tweets;

const PostList = () => {
    // console.log(selectAllTweets);
    const tweets = useSelector(selectAllTweets);
    // console.log(tweets);
    // tweets.map(posts => console.log(posts));
    return(
    	<ul className="list-group">
            {
                tweets.map(posts => {
                    return(<PostItem key={posts._id} posts={posts} />);
                })
            }
        </ul>
    );
}
export default PostList;