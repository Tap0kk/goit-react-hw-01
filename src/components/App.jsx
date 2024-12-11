import style from './App.module.css';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile';
import FriendList from './FreindList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div className={style.bodyWrapper}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
