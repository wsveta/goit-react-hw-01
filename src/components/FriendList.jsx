import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.friendCard} key={id}>
            <img src={avatar} alt="Avatar" width="48" />
            <p><b>{name}</b></p>
            <p className={isOnline === true ? css.online : css.offline}>{isOnline === true ? 'Online' : 'Offline'}</p>
          </li>
        );
      })}{" "}
    </ul>
  );
};
