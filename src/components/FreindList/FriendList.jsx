import FriendListItem from './FriendListItem/FriendListItem';
import clsx from 'clsx';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(style.list)}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={clsx(style.item)} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
