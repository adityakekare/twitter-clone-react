import React from "react";
import {useSelector} from "react-redux";
import PostItem from "./PostItem";

const selectAllTweets = (state) => state.tweets;

const PostList = () => {
    const tweets = useSelector(selectAllTweets);
    // console.log(tweets);
    tweets.map(posts => console.log(posts));
    return(
    	<ul class="list-group">
    		<li class="list-group-item">
            {
                tweets.map(posts => {
                    return(PostItem(posts));
                })
            }
            </li>
        </ul>
    );
}
export default PostList;