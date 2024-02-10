import css from './FriendListItem.module.css'

export const FriendListItem = ({friends:{avatar,name,isOnline}}) => {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
            <p><b>{name}</b></p>
            <p className={isOnline === true ? css.online : css.offline}>{isOnline === true ? 'Online' : 'Offline'}</p>
    </div>
  );
};
