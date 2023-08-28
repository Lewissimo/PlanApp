import './Logged.scss';
import FindFriends from './components/FindFriends/FindFriends';
import FriendsList from './components/FriendsList/FriendsList';
import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/Messages/Messages';
import ShopApp from './components/shoapp/ShopApp';
import { Routes, Route} from 'react-router-dom';
const LoggedInApp = () => {



  return (
    <>
      <Header />
      <FriendsList />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/friends' element={<FindFriends />} />
        
        
        
        
        <Route path='/shopapp' element={<ShopApp />} />



      </Routes>     
    </>
  )
}

export default LoggedInApp
