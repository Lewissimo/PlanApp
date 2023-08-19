import './Logged.scss';
import Header from './components/Header';
import Home from './components/Home';
import ShopApp from './components/shoapp/ShopApp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const LoggedInApp = () => {
  return (
    <Router>
    <div className="App">
      <Header />
     
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/zakupyApp' element={<ShopApp />} />
      <Route path='/calendarApp' element={<div></div>} />
    </Routes> 
    </div>
  </Router>
  )
}

export default LoggedInApp
