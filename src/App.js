import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Pages/HomePage/HomePage';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(<FiChevronsRight />);
  const newRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', closeSidebar);
    return () => {
      document.removeEventListener('mousedown', closeSidebar);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setButtonIcon(isSidebarOpen ? <FiChevronsRight /> : <FiChevronsLeft />);
  };

  const closeSidebar = (event) => {
    if (newRef.current && !newRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
      setButtonIcon(<FiChevronsRight />);
    }
  };

  return (
    <div className="App" ref={newRef}>
      <BrowserRouter>
        <button className={`toggle-button ${isSidebarOpen ? 'open-btn' : ''}`} onClick={toggleSidebar}>
          {buttonIcon}
        </button>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
