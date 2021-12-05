const PostSummaryItem = (
	        post
) => {
	post = post.post;
    return(
        <>
            <li className="list-group-item">
		    	<img src={post.image} className="wd-topic-img"/>
	    	<a href="#" className="wd-topic-topicname">{post.topic}</a><br/>
		    	<a href="#" className="wd-topic-heading">{post.userName}  </a><i className="fa fa-check-circle"/><span className="wd-topic-time"> - {post.time}</span><br/>
		    	<span className="wd-topic-description">{post.title}</span><br/>
		    	<span className="wd-topic-tweetcount">{post.tweets}</span>
		    </li>
        </>
    );
}
export default PostSummaryItem;