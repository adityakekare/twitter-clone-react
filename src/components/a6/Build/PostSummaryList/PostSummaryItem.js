const PostSummaryItem = (
	        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png",
        }
) => {
    return(
            <li className="list-group-item">
		    	<img src={post.image} className="wd-topic-img"/>
	    	<a href="#" className="wd-topic-topicname">{post.topic}</a><br/>
		    	<a href="#" className="wd-topic-heading">{post.userName}  </a><i className="fa fa-check-circle"></i><span className="wd-topic-time"> - {post.time}</span><br/>
		    	<span className="wd-topic-description">{post.title}</span><br/>
		    	<span className="wd-topic-tweetcount">{post.tweets}</span>
		    </li>
    );
}
export default PostSummaryItem;