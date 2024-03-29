const PostItem = (
		post = {   "image": "../../images/elon.jpg",
        "author": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "tweet": "Amazing show about @inspiration4x mission",
        "":"astronaut.jpg",
        "caption":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "text":"From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all civlian orbital space.."
    }
) => {
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