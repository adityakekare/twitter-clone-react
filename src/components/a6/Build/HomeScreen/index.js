import NavigationSideBar from "../NavigationSideBar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList/PostList";

const Home = () => {
    return(
        <div className="row">
        <div className="col-lg-2 col-md-1 col-2">
            <NavigationSideBar active="home"/>
        </div>
        <div className="col-lg-6 col-md-11 col-10">
            <PostList />
        </div>
        <div className="col-lg-4 d-none d-lg-block">
            <PostSummaryList />
        </div>
        </div>
    );
};
export default Home;