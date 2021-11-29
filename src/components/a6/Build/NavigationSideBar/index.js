import React from "react";
import ExploreScreen from "../ExploreScreen/ExploreScreen";
import Home from "../HomeScreen"
import {Link} from "react-router-dom";

const NavigationSidebar = (
        {
        active = 'explore'
    }
) => {
    if(active == 'explore'){
        return(
            <div>
            <nav className="wd-first-column">
                <Link to="/a6/" className="list-group-item list-group-item-action">
                    <i className="fa fa-twitter fa-2x"></i>
                </Link>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/a6/twitter/home"
                                  className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                            <i className="fa fa-home"/><span className="wd-menu-text">  Home</span>
                            </Link></li>
                        <li className="nav-item">
                            <Link to="/a6/twitter/explore"
                                  className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                        <i className="fa fa-hashtag"/><span className="wd-menu-text">Explore</span>
                            </Link></li>
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
                <Link to="/a6/" className="list-group-item list-group-item-action">
                    <i className="fa fa-twitter fa-2x"></i>
                </Link>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/a6/twitter/home"
                                  className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                                <i className="fa fa-home"/><span className="wd-menu-text">  Home</span>
                            </Link></li>
                        <li className="nav-item">
                            <Link to="/a6/twitter/explore"
                                  className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                                <i className="fa fa-hashtag"/><span className="wd-menu-text">Explore</span>
                            </Link></li>
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
                <Link to="/a6/" className="list-group-item list-group-item-action">
                    <i className="fa fa-twitter fa-2x"></i>
                </Link>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/a6/twitter/home"
                                  className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                                <i className="fa fa-home"/><span className="wd-menu-text">  Home</span>
                            </Link></li>
                        <li className="nav-item">
                            <Link to="/a6/twitter/explore"
                                  className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                                <i className="fa fa-hashtag"/><span className="wd-menu-text">Explore</span>
                            </Link></li>
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
