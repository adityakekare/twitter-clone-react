import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
    	<>
            <span className="wd-search-glass"><i className="fa fa-search"></i></span>
            <div className="input-group">
          <input type="search" className="form-control" placeholder="Search Twitter" aria-label="Search"
            aria-describedby="search-addon" />
            <i className="fa fa-cog fa-2x"></i>
        </div>

      <ul className="nav nav-tabs">
          <li className="nav-item">
              <a className="nav-link active" href="#"><span className="wd-nav-text-selected">For you</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text">Trending</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text">News</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text">Sports</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text-vanish">Entertainment</span></a>
          </li>
      </ul>
           <PostSummaryList />

           </>
    );
}
export default ExploreComponent;
