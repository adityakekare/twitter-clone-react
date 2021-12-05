import NavigationSidebar from "../NavigationSideBar";
import PostSummaryList from "../PostSummaryList";
import EditProfileItem from "./EditProfileItem";
import '../ProfileScreen/profile.css';
// import '../../../../vendors/bootstrap/bootstrap.min.css';

const EditProfile = () => {
    return(
        <div className="row">
            <div className="col-lg-2 col-md-1 col-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-lg-6 col-md-11 col-10">
                <EditProfileItem />
            </div>
            <div className="col-lg-4 d-none d-lg-block">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default EditProfile;