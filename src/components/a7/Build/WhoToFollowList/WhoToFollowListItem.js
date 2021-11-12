const WhoToFollowListItem = (
        who
) => {
    who = who.who;
    return(
    	<div>
            <li className="list-group-item"><img src={who.avatarIcon} className="wd-follow-img"/>{who.userName}<i className="fa fa-check-circle"></i><br/>
			<a href="#" className="wd-follow-handle">@{who.handle}</a><button className="btn btn-primary btn-sm followBtn" type="button">Follow</button></li>
		</div>
    );
}
export default WhoToFollowListItem;