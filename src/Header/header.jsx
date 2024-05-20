
import './header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
// import OutsideClickHandler from "react-outside-click-handler"

function Header(){

    const [menuOpen, setMenuOpen] = useState(false);
  
    function getMenuStyles(menuOpen){
      if(document.documentElement.clientWidth <= 1200)
        return{
            right: !menuOpen && "-100%"
        }
    }

  return(
    <header className="h-container">
      <div className="h-wrapper">
        <div className="logo">
          <span>Jeremiah Sami</span>
        </div>
        <ul className="h-list" style={getMenuStyles(menuOpen)}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Achievements</a></li>
          <li><a href="#">Contact Me</a></li>
          <li><button href="#" id='download'>Download Resume</button></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(((m) => !m
        ))}>
              <span className="hamburger-icon"><GiHamburgerMenu/></span>
        </button>
      </div>
    </header>
  )
}

export default Header