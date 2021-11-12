import React from "react";
import {Link, BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "../ExploreScreen/ExploreScreen";
import Home from "../HomeScreen"
import '../HomeScreen/home.css'

const NavigationSidebar = (
        {
        active = 'explore'
    }
) => {
    if(active == 'explore'){
        return(
            <div>
            <nav className="wd-first-column">
                    // <a href="#" className="list-group-item list-group-item-action">
                    // <i className="fa fa-twitter fa-2x"></i>
                    // </a>
                      <Link to="/a7" className="list-group-item">
                            <i className="fab fa-twitter"></i>
                        </Link>

                    <ul className="nav flex-column">
                        <li className="nav-item">
                        // <a href={Home} className="list-group-item list-group-item-action" aria-current="true">
                        //     <i className="fa fa-home"></i><span className="wd-menu-text">  Home</span>
                        // </a>
                         <Link to="/a7/twitter/home">
                            <i className="fa fa-home"></i>
                        <span className="d-none d-xl-inline">Home</span>
                            </Link>

                        </li>
                        <li className="nav-item">
                        // <a href={ExploreScreen} className="list-group-item list-group-item-action active">
                        // <i className="fa fa-hashtag"></i><span className="wd-menu-text">Explore</span></a>
                        <Link to="/a7/twitter/explore">
                            <i className="fa fa-hashtag"></i>
                        <span className="d-none d-xl-inline">Explore</span>
                        </Link>

                        </li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-bell"></i><span className="wd-menu-text">Notifications</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-envelope"></i><span className="wd-menu-text">Messages</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-bookmark"></i><span className="wd-menu-text">Bookmarks</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-list"></i><span className="wd-menu-text">Lists</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-user"></i><span className="wd-menu-text">Profile</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-ellipsis-h"></i><span className="wd-menu-text">More</span></a></li>
                    </ul>
                    <button className="btn btn-primary btn-sm tweetBtn" type="button">
                        Tweet
                    </button>
                </nav>
            </div>
    );
    }
    else if(active == 'home'){
        return(
            <div>
            <nav className="wd-first-column">
                    <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-twitter fa-2x"></i>
                    </a>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="../HomeScreen/home.html" className="list-group-item list-group-item-action active" aria-current="true">
                            <i className="fa fa-home"></i><span className="wd-menu-text">  Home</span>
                        </a></li>
                        <li className="nav-item"><a href="../ExploreScreen/explore.html" className="list-group-item list-group-item-action">
                        <i className="fa fa-hashtag"></i><span className="wd-menu-text">Explore</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-bell"></i><span className="wd-menu-text">Notifications</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-envelope"></i><span className="wd-menu-text">Messages</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-bookmark"></i><span className="wd-menu-text">Bookmarks</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-list"></i><span className="wd-menu-text">Lists</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-user"></i><span className="wd-menu-text">Profile</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-ellipsis-h"></i><span className="wd-menu-text">More</span></a></li>
                    </ul>
                    <button className="btn btn-primary btn-sm tweetBtn" type="button">
                        Tweet
                    </button>
                </nav>
            </div>
    );
    }
    else{
        return(
            <div>
            <nav className="wd-first-column">
                    <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-twitter fa-2x"></i>
                    </a>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="../HomeScreen/home.html" className="list-group-item list-group-item-action active" aria-current="true">
                            <i className="fa fa-home"></i><span className="wd-menu-text">  Home</span>
                        </a></li>
                        <li className="nav-item"><a href="../ExploreScreen/explore.html" className="list-group-item list-group-item-action">
                        <i className="fa fa-hashtag"></i><span className="wd-menu-text">Explore</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-bell"></i><span className="wd-menu-text">Notifications</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-envelope"></i><span className="wd-menu-text">Messages</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-bookmark"></i><span className="wd-menu-text">Bookmarks</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-list"></i><span className="wd-menu-text">Lists</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-user"></i><span className="wd-menu-text">Profile</span></a></li>
                        <li className="nav-item"><a href="#" className="list-group-item list-group-item-action">
                        <i className="fa fa-ellipsis-h"></i><span className="wd-menu-text">More</span></a></li>
                    </ul>
                    <button className="btn btn-primary btn-sm tweetBtn" type="button">
                        Tweet
                    </button>
                </nav>
            </div>
    );
    }
    
}
export default NavigationSidebar;
