import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className='banner'> 
            <Link to="/homepage" className='link'>Home</Link>
            <Link to="/research" className='link'>Find an aliment</Link>
            <Link to="/ressources" className='link'>Ressources</Link>
        </div>
    );
}

export default NavBar;