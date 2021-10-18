const WhoToFollowListItem = (who) => {
    return(`
            <li class="list-group-item"><img src="${who.avatarIcon}" class="wd-follow-img">${who.userName}  <i class="fa fa-check-circle"></i><br>
				    <a href="#" class="wd-follow-handle">@${who.handle}</a><button class="btn btn-primary btn-sm followBtn" type="button">Follow</button></li>
    `);
}
export default WhoToFollowListItem;