import React, {useState} from 'react';
import useDarkMode from './hooks/darkmode';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <nav>
            <h1>World Cup</h1>
            <div>
                <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    )
}

export default Nav;