import React from "react";
import {Route} from 'react-router-dom';
import Build from "./Build";
import Practice from "./Practice";
import HelloWorld from "./HelloWorld";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./Build/HomeScreen";


const A6 = () => {
    return (
        <>
            <Route path={["/a6/hello"]} exact={true}>
                <HelloWorld />
            </Route>
            <Route path={["/a6", "/a6/practice"]} exact={true}>
                <Practice />
            </Route>
            <Route path="/a6/twitter/home" component={HomeScreen}/>
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>

        </>
    )
};

export default A6;