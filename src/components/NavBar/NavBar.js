import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import homeImage from './icons/home.svg';
import loopImage from './icons/loop.svg';
import mapLogo from './icons/map.svg';

const NavBar = () => {
    const [isVisible, setVisible] = useState(false)
    const navbarItems = [

    ]
    return (
        <div className='banner-container'>
            <nav>
                <div className='banner-content'>
                    <div className='home-item'>
                        <a href='#' className='home-items'>
                            <img src={homeImage} alt='' srcSet=''></img>
                            {isVisible && <h2 className='home-word'>Home</h2>}
                        </a>

                    </div>
                    <div className='search-bar-container'>
                        <div className='search-bar'>
                            <input className="search-bar-content" type='text' placeholder='What do you need in your fridge ?'>
                            </input>
                        </div>
                        <img className='loop-icon' src={loopImage} alt='' srcSet=''></img>
                    </div>
                    <button className={isVisible ?
                        "nav-bar-visible nav-bar-visible-in " : "nav-bar-visible nav-bar-visible-in"}

                        onClick={() => setVisible(!isVisible)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                    <div className='map-item'>
                        <a href='#' className='map-items'>
                            <img src={mapLogo} alt='' srcSet=''></img>
                            {isVisible && <h2 className='home-word'>Map</h2>}
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        /* <Link to="/homepage" className='link'>Home</Link>
        <Link to="/research" className='link'>Find an aliment</Link>
        <Link to="/ressources" className='link'>Ressources</Link> */

    );
}

export default NavBar;