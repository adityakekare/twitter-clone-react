import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem from "./PostItem";
import {fetchAllTweets} from "../../../../services/twitterService";

// const selectAllTweets = (state) => state.tweets;
// console.log(selectAllTweets);

const PostList = () => {
    // console.log(selectAllTweets);
    const tweets = useSelector((state) => state.tweets);
    // console.log(tweets);
    // const tweets = useSelector(selectAllTweets);
    // console.log(tweets);
    // tweets.map(posts => console.log(posts));
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
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