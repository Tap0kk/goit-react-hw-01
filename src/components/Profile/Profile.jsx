import style from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperInfo}>
        <img
          className={style.profileImg}
          src={image}
          alt={name}
          width="120"
          height="120"
        />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.wrapperStats}>
        <li className={style.wrapperStatsItem}>
          <span className={style.wrapperStatsTitle}>Followers</span>
          <span className={style.wrapperStatsNumbers}>{followers}</span>
        </li>
        <li className={style.wrapperStatsItem}>
          <span className={style.wrapperStatsTitle}>Views</span>
          <span className={style.wrapperStatsNumbers}>{views}</span>
        </li>
        <li className={style.wrapperStatsItem}>
          <span className={style.wrapperStatsTitle}>Likes</span>
          <span className={style.wrapperStatsNumbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
