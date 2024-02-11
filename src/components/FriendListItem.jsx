import css from './FriendListItem.module.css'

export const FriendListItem = ({avatar,name,status}) => {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
            <p><b>{name}</b></p>
            <p className={status === true ? css.online : css.offline}>{status === true ? 'Online' : 'Offline'}</p>
    </div>
  );
};
