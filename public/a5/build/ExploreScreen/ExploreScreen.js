import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row">
        <div class="col-lg-2 col-md-1 col-2">
            ${NavigationSidebar("explore")}
        </div>
        <div class="col-lg-6 col-md-11 col-10">
            ${ExploreComponent()}
        </div>
        <div class="col-lg-4 d-none d-lg-block">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
