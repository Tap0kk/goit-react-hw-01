import style from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={clsx(style.image)} src={avatar} alt="Avatar" width="48" />
      <p className={clsx(style.name)}>{name}</p>
      <p
        className={clsx(
          style.status,
          isOnline ? style.statusGreen : style.statusRed
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
