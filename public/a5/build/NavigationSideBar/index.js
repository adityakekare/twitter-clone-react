const NavigationSidebar = (active) => {
    if(active == 'explore'){
        return(`
            <nav class="wd-first-column">
                    <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-twitter fa-2x"></i>
                    </a>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a href="../HomeScreen/home.html" class="list-group-item list-group-item-action" aria-current="true">
                            <i class="fa fa-home"></i><span class="wd-menu-text">  Home</span>
                        </a></li>
                        <li class="nav-item"><a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action active">
                        <i class="fa fa-hashtag"></i><span class="wd-menu-text">Explore</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-bell"></i><span class="wd-menu-text">Notifications</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-envelope"></i><span class="wd-menu-text">Messages</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-bookmark"></i><span class="wd-menu-text">Bookmarks</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-list"></i><span class="wd-menu-text">Lists</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-user"></i><span class="wd-menu-text">Profile</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-ellipsis-h"></i><span class="wd-menu-text">More</span></a></li>
                    </ul>
                    <button class="btn btn-primary btn-sm tweetBtn" type="button">
                        Tweet
                    </button>
                </nav>
    `);
    }
    else if(active == 'home'){
        return(`
            <nav class="wd-first-column">
                    <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-twitter fa-2x"></i>
                    </a>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a href="../HomeScreen/home.html" class="list-group-item list-group-item-action active" aria-current="true">
                            <i class="fa fa-home"></i><span class="wd-menu-text">  Home</span>
                        </a></li>
                        <li class="nav-item"><a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action">
                        <i class="fa fa-hashtag"></i><span class="wd-menu-text">Explore</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-bell"></i><span class="wd-menu-text">Notifications</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-envelope"></i><span class="wd-menu-text">Messages</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-bookmark"></i><span class="wd-menu-text">Bookmarks</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-list"></i><span class="wd-menu-text">Lists</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-user"></i><span class="wd-menu-text">Profile</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-ellipsis-h"></i><span class="wd-menu-text">More</span></a></li>
                    </ul>
                    <button class="btn btn-primary btn-sm tweetBtn" type="button">
                        Tweet
                    </button>
                </nav>
    `);
    }
    else{
        return(`
            <nav class="wd-first-column">
                    <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-twitter fa-2x"></i>
                    </a>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a href="../HomeScreen/home.html" class="list-group-item list-group-item-action active" aria-current="true">
                            <i class="fa fa-home"></i><span class="wd-menu-text">  Home</span>
                        </a></li>
                        <li class="nav-item"><a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action">
                        <i class="fa fa-hashtag"></i><span class="wd-menu-text">Explore</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-bell"></i><span class="wd-menu-text">Notifications</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-envelope"></i><span class="wd-menu-text">Messages</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-bookmark"></i><span class="wd-menu-text">Bookmarks</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-list"></i><span class="wd-menu-text">Lists</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-user"></i><span class="wd-menu-text">Profile</span></a></li>
                        <li class="nav-item"><a href="#" class="list-group-item list-group-item-action">
                        <i class="fa fa-ellipsis-h"></i><span class="wd-menu-text">More</span></a></li>
                    </ul>
                    <button class="btn btn-primary btn-sm tweetBtn" type="button">
                        Tweet
                    </button>
                </nav>
    `);
    }
    
}
export default NavigationSidebar;
