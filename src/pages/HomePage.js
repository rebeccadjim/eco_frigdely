import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function HomePage(){
    return(
        <div>
            <h1> 
                Ceci est la page d'accueil de ce site dédié à l'échange de denrées alimentaires sur le campus de l'INSA, 
                nous espérons qu'il vous sera utile ! 
            </h1>
        </div>
    );
}

export default HomePage;