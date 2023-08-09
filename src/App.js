import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import Research from './pages/Research';
import Ressources from './pages/Ressources';
import Messages from './pages/Messages';
import Map from './pages/Map';
import Wallet from './pages/Wallet';
import User from './pages/User';
import AboutUs from './pages/AboutUs';
import Orders from './pages/Cart';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='navigation-bar'>
          <NavBar />
        </div>
        <Router>
          <div className='content'>
          <SideBar />
            <Routes>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/user" element={<User />} />
              <Route path="/ressources" element={<Ressources />} />
            </Routes>
          </div>
        </Router >
      </div>
    </div >
  );
}

export default App;
