import NavigationSidebar from "../NavigationSideBar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";
import './explore.css';

const ExploreScreen = () =>{
    return(
        <div className="row">
        <div className="col-lg-2 col-md-1 col-2">
            <NavigationSidebar active="explore"/>
        </div>
        <div className="col-lg-6 col-md-11 col-10">
            <ExploreComponent/>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
            <WhoToFollowList/>
        </div>
    </div>
    );
};
export default ExploreScreen;
