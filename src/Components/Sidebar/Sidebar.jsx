import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar({ isOpen, closeSidebar }) {
    const handleLinkClick = () => {
        console.log("Link Clicked");
        closeSidebar();
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className='nav-link' onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li>
                        <a href='#drop-constraint' className='nav-link' onClick={handleLinkClick}>Drop Constraint</a>
                    </li>
                    <li>
                        <a href='#row-count' className='nav-link' onClick={handleLinkClick}>Count of Rows</a>
                    </li>
                    <li>
                        <a href='#select-statement' className='nav-link' onClick={handleLinkClick}>Custom Statement</a>
                    </li>
                    <li>
                        <a href='#nth-highest' className='nav-link' onClick={handleLinkClick}>Nth Highest</a>
                    </li>
                    <li>
                        <a href='#nth-minimum' className='nav-link' onClick={handleLinkClick}>Nth Minimum</a>
                    </li>
                </ul>
            </nav>
            <div className='author'>
                <p>Developed by <b><a href="https://github.com/PranabKumarSahoo">Pranab</a></b></p>
            </div>
        </div>
    )
}
