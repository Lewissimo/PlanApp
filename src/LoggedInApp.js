import { positions } from '@mui/system';
import './Logged.scss';
import FindFriends from './components/FindFriends/FindFriends';
import ActivFriendBoj from './components/FriendsList/ActivFriendBoj';
import FriendsList from './components/FriendsList/FriendsList';
import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/Messages/Messages';
import ShopApp from './components/shoapp/ShopApp';
import { Routes, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import CalendarApp from './components/calendarApp/CalendarApp';
import CaledarSpace from './components/calendarApp/CaledarSpace';

const LoggedInApp = () => {



  return (
    <div style={{position: 'relative'}}>
      <Header />
      <FriendsList />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/friends' element={<FindFriends />} />
        <Route path='/setting' element={<Settings />} />
        <Route path='/calendar_1' element={<CaledarSpace />} /> 
        
        
        <Route path='/shopapp' element={<ShopApp />} />
        <Route path='/calendar' element={<CalendarApp/>} />


      </Routes>

    </div>
  )
}

export default LoggedInApp
