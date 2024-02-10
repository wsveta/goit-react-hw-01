import css from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats: {followers, views, likes} }) => {
  return (
    <div className={css.profileCard}>
      <div>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.user}>{name}</p>
        <p className={css.userName}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span><b>{followers}</b></span>
        </li>
        <li>
          <span>Views</span>
          <span><b>{views}</b></span>
        </li>
        <li>
          <span>Likes</span>
          <span><b>{likes}</b></span>
        </li>
      </ul>
    </div>
  );
};
