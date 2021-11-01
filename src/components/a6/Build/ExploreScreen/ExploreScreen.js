import NavigationSidebar from "../NavigationSideBar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () =>{
    return(
        <div class="row">
        <div class="col-lg-2 col-md-1 col-2">
            <NavigationSidebar active="explore"/>
        </div>
        <div class="col-lg-6 col-md-11 col-10">
            <ExploreComponent/>
        </div>
        <div class="col-lg-4 d-none d-lg-block">
            <WhoToFollowList/>
        </div>
    </div>
    );
};
export default ExploreScreen;
