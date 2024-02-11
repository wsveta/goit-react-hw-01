import css from "./FriendList.module.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <li className={css.friendCard} key={friend.id}>
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline} />
          </li>
        );
      })}
    </ul>
  );
};
