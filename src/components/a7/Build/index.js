import React, {Component} from "react";
import {Link, BrowserRouter, Route} from "react-router-dom";
import NavigationSideBar from "./NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList"
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen"
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);
         // <Route path={["/a7/twitter/profile"]}
         //                exact={true} component={ProfileScreen}/>
         
const Build = () => {
    return(
    	<Provider store={store}>
    	<div>
    	<Route path={["/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
            <Route path={["/a7/twitter/explore"]}
                        exact={true} component={ExploreScreen}/>
        </div>
         </Provider>
    )
};

export default Build;