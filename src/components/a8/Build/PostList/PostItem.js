import React, {useState} from "react";
import {useDispatch} from "react-redux";

const PostItem = (
		post
) => {
	// console.log(post);

	const dispatch = useDispatch();
	const deleteTweetClickHandler = () => {
		dispatch({type: 'delete-tweet', post})
	};
	const likeClickHandler = () => {
		dispatch({type: 'like-tweet', post});
	};

	post = post.posts;

	return(
    	<>
            <li className="list-group-item">
		    	<img src={post.image} className="wd-display-img"/>
		    	<a href="#" className="wd-topic-heading">{post.author}  </a><i className="fa fa-check-circle"/><a href="#" className="wd-follow-handle">@{post.handle}</a>
		    	<span className="wd-topic-time"> - {post.time}</span>
				<i onClick={deleteTweetClickHandler}
	className="fa fa-remove fa-pull-right"/>
				<br/>
		    	<span className="wd-topic-description">{post.tweet}</span><br/>
		    	<div className="wd-head-image">
              		<img src={post.postImage} className="wd-topic-heading-image"/>
		    	<span className="wd-topic-description">{post.caption}</span><br/>
		    	<span className="wd-topic-topicname">{post.text}</span>
		    	<div className="wd-icon-links">
					<a href="#" className="wd-icon-link"><i className='fa fa-comment'/>  22</a>
					<a href="#" className="wd-icon-link"><i className="fa fa-retweet"/>   34</a>
					<a className="wd-icon-link"
						 onClick={likeClickHandler}>
						{
							post.liked && <i className="fas fa-heart me-2"
	style={{color: post.liked ? "red" : "white"}}/>
						}
						{
							!post.liked && <i className="far fa-heart me-2"/>
						}
						{post.likes}
					</a>
					{/*<a href="#" className="wd-icon-link-heart">	&#10084;  2</a>*/}
					<a href="#" className="wd-icon-link"><i className="fa fa-upload" aria-hidden="true"/></a>
				</div>
				</div>
		    </li>
		</>
    );
}
export default PostItem;