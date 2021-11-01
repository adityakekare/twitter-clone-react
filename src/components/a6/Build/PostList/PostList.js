import posts from "./posts.json";
import PostItem from "./PostItem";

const PostList = () => {
    return(
    	<ul class="list-group">
    		<li class="list-group-item">
            {
                posts.map(posts => {
                    return(PostItem(posts));
                })
            }
            </li>
        </ul>
    );
}
export default PostList;