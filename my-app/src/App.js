import './index.css';
import { TransactionHistory } from './transactions'; 
import transactions from './transactions.json'; 
import { Statistics } from './statistics';
import  data from './statistics.json'
import {FriendList} from './friends'
import friends from './friends.json'
import { Profile } from './user';
import user from './user.json'
function App() {
  return (
    <div className="App">
      <h1>Transaction History</h1>
      <TransactionHistory items={transactions} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
}

export default App;
