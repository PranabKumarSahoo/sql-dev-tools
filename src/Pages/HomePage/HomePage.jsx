import React, { useState, useEffect } from "react";
import "./HomePage.css";
import DropConstraintSec from "../../Sections/DropConstraintSec/DropConstraintSec";
import CountOfRows from "../../Sections/CountOfRows/CountOfRows";
import SelectStatement from "../../Sections/SelectStatement/SelectStatement";
import NthHighest from "../../Sections/NthHighest/NthHighest";
import NthMinimum from "../../Sections/NthMinimum/NthMinimum";
import { FaArrowUp } from "react-icons/fa";

// import Footer from "../../Components/Footer/Footer";

import Lightmode from "../../Components/Lightmode/Lightmode";


export default function HomePage() {
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButtonThreshold = 200;

      // Show the scroll-up button when the user scrolls down
      setShowScrollUpButton(scrollY > showButtonThreshold);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="home-page">
      <h1 className="home-page-title">SQL Tools for Developers</h1>
      <h1 className="home-page-title"><Lightmode /></h1>
      <div id="drop-constraint" className="sections">
        <h2 className="drop-const-title">Drop Constraint</h2>
        <DropConstraintSec />
      </div>
      <div id="row-count" className="sections">
        <h2 className="section-2-title">Count of Rows</h2>
        <CountOfRows />
      </div>
      <div id="select-statement" className="sections">
        <h2 className="section-3-title">Custom Statement</h2>
        <SelectStatement />
      </div>
      <div id="nth-highest" className="sections">
        <h2 className="section-4-title">Nth Highest</h2>
        <NthHighest />
      </div>
      <div id="nth-minimum" className="sections">
        <h2 className="section-5-title">Nth Minimum</h2>
        <NthMinimum />
      </div>
      <div id="section-6" className="sections">
        <h2 className="section-6-title">Coming Soon...</h2>
      </div>
      {showScrollUpButton && (
        <button className='scroll-up-button' onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}