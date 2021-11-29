import React, {Component} from "react";
import {Link} from "react-router-dom";
import NavigationSideBar from "./NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList"
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen";

const Build = () => {
    return(
    	<div>
            <ExploreScreen />
        </div>
    )
};

export default Build;