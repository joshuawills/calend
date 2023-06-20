import '../styling/Navbar.css'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

function PublicNavbar() {

  const isDarkMode = useSelector((state: any) => state.isDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.style.setProperty('--bar-color', "#f5f5f5");
    else root.style.setProperty('--bar-color', "#2d2d2d")
  }, [isDarkMode]);

  return (
    <>
    <div className="navigationHeader">
      <Link to = "/" className="text-link">
        <div className="navigationLogo"> 
          {(isDarkMode) ? <img src="https://i.ibb.co/CWz68jy/darkmode.png" alt="darkmode"/> : <img src="https://i.ibb.co/5s7SjK5/lightmode.png" alt="lightmode" />}
        </div>
      </Link>
      <div className="navigationUserInteraction">
          <ul>
            <li><Link to = "/login" className="text-link">log in</Link></li>
            <li><Link to = "/signup" className="text-link">sign up</Link></li>
          </ul>
      </div>
    </div>
    <div className="neon-line"></div>
    </>
  )
}

export default PublicNavbar