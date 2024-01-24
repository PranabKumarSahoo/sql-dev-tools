import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./Lightmode.css"

const LightMode = () => {
    const [darkmode, setDarkMode] = useState(false);

    const setDarkModePreference = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setDarkMode(true);
    }
    const setLightModePreference = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setDarkMode(false);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkModePreference();

        } else {
            setLightModePreference();
        }
    }, []);

    const toggletheme = () => {
        if(darkmode)
        {
            setLightModePreference();
            localStorage.setItem('theme', 'light');
        }
        else{
            setDarkModePreference();
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={darkmode}
                onChange={toggletheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default LightMode;