import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
            ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
        </ul>
    `);
}
export default WhoToFollowList;