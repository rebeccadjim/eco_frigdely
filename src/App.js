import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import Research from './pages/Research';
import Fridge from './pages/Fridge';
import Messages from './pages/Messages';
import Map from './pages/Map';
import Wallet from './pages/Wallet';
import User from './pages/User';
import AboutUs from './pages/AboutUs';
import Orders from './pages/Cart';
import Register from './pages/Register';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='app-components'>
          <div className='navbar'>
            <NavBar />
          </div>
          <div className='web-page'>
            <div className='sidebar'>
              <SideBar />
            </div>
          </div>
          <div className='content'>
            <Routes>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/user" element={<User />} />
              <Route path="/fridge" element={<Fridge />} />
              <Route path="map" element="" />
              <Route path="/messages" element={<Messages />}></Route>
            </Routes>
          </div>
        </div>
      </Router >
    </div>
  );
}

export default App;
