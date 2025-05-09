import './index.css';
import { TransactionHistory } from './transactions'; 
import transactions from './transactions.json'; 
import { Statistics } from './statistics';
import  data from './statistics.json'
import {FriendList} from './friends'
import friends from './friends.json'
import { Profile } from './user';
import user from './user.json'
import InfoShow from './homeworks/homework1';
import HomeworkTwo from './homeworks/homework2';
const myFavouriteWebs = [
  { title: "React Native", url: "https://reactnative.dev/" },
  { title: "Node.js", url: "https://nodejs.org/en" }
]
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
<h1>Homework 1</h1>
<InfoShow web={myFavouriteWebs} />
<h2>Нomework2</h2>
<HomeworkTwo />
    </div>
  );
}

export default App;
