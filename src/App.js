import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Research from './pages/Research';
import Ressources from './pages/Ressources';
import Messages from './pages/Messages';
import Map from './pages/Map';
import Wallet from './pages/Wallet';
import AboutUs from './pages/AboutUs';
import Orders from './pages/Orders';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <SideBar/>
      {/* <Router>
        <div className='content'>
          <NavBar />
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/research" element={<Research />} />
            <Route path="/ressources" element={<Ressources/>} />
        </Routes>
    </div>
    </Router > */}
    </div >
  );
}

export default App;
