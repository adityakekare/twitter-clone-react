const PostItem = (
		post
) => {
	console.log(post);
    return(
    	<>
            <li className="list-group-item">
		    	<img src={post.image} className="wd-display-img"/>
		    	<a href="#" className="wd-topic-heading">{post.author}  </a><i className="fa fa-check-circle"></i><a href="#" className="wd-follow-handle">@{post.handle}</a>
		    	<span className="wd-topic-time"> - {post.time}</span><br/>
		    	<span className="wd-topic-description">{post.tweet}</span><br/>
		    	<div className="wd-head-image">
              		<img src={post.postImage} className="wd-topic-heading-image"/>
		    	<span className="wd-topic-description">{post.caption}</span><br/>
		    	<span className="wd-topic-topicname">{post.text}</span>
		    	<div className="wd-icon-links">
					<a href="#" className="wd-icon-link"><i className='fa fa-comment'></i>  22</a>
					<a href="#" className="wd-icon-link"><i className="fa fa-retweet"></i>   34</a>
					<a href="#" className="wd-icon-link-heart">	&#10084;  2</a>
					<a href="#" className="wd-icon-link"><i className="fa fa-upload" aria-hidden="true"></i></a>
				</div>
				</div>
		    </li>
		</>
    );
}
export default PostItem;