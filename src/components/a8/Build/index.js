import React, {Component} from "react";
import {Link, BrowserRouter, Route} from "react-router-dom";
import NavigationSideBar from "./NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList"
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen"
import ProfileScreen from "./ProfileScreen";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import summary from "../../../reducers/summary";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import '../../../vendors/bootstrap/bootstrap.min.css';

const reducer = combineReducers({tweets: tweets, who, profile, summary})
const store = createStore(reducer);
const Build = () => {
    return(
    	<Provider store={store}>
    	<div>
    	    <Route path={["/", "/a8/twitter/home"]} exact={true} component={HomeScreen}/>
            <Route path={["/a8/twitter/explore"]} exact={true} component={ExploreScreen}/>
            <Route path={["/a8/twitter/profile"]} exact={true} component={ProfileScreen}/>
        </div>
         </Provider>
    )
};

export default Build;