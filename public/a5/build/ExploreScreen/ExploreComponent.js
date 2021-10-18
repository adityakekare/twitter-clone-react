import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <span class="wd-search-glass"><i class="fa fa-search"></i></span>
            <div class="input-group">
          <input type="search" class="form-control" placeholder="Search Twitter" aria-label="Search"
            aria-describedby="search-addon" />
            <i class="fa fa-cog fa-2x"></i>
        </div>

      <ul class="nav nav-tabs">
          <li class="nav-item">
              <a class="nav-link active" href="#"><span class="wd-nav-text-selected">For you</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"><span class="wd-nav-text">Trending</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"><span class="wd-nav-text">News</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"><span class="wd-nav-text">Sports</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"><span class="wd-nav-text-vanish">Entertainment</span></a>
          </li>
      </ul>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
