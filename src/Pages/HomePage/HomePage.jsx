import React, { useState, useEffect } from "react";
import "./HomePage.css";
import DropConstraintSec from "../../Sections/DropConstraintSec/DropConstraintSec";
import CountOfRows from "../../Sections/CountOfRows/CountOfRows";
import SelectStatement from "../../Sections/SelectStatement/SelectStatement";
import NthHighest from "../../Sections/NthHighest/NthHighest";
import NthMinimum from "../../Sections/NthMinimum/NthMinimum";

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
      <div  className="sections">
        <h2 className="section-title">Drop Constraint</h2>
        <DropConstraintSec />
      </div>
      <div className="sections">
        <h2 className="section-title">Count of Rows</h2>
        <CountOfRows />
      </div>
      <div className="sections">
        <h2 className="section-title">Custom Statement</h2>
        <SelectStatement />
      </div>
      <div  className="sections">
        <h2 className="section-title">Nth Highest</h2>
        <NthHighest />
      </div>
      <div  className="sections">
        <h2 className="section-title">Nth Minimum</h2>
        <NthMinimum />
      </div>
      <div  className="sections">
        <h2 className="section-title">Coming Soon...</h2>
      </div>
      {showScrollUpButton && (
        <button className='scroll-up-button' onClick={scrollToTop}>
          Scroll Up
        </button>
      )}
    </div>
  );
}