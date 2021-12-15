import React, { useState } from "react";
import "./Header.scss";

import { Link } from 'react-scroll'
export const Header = () => {
  const [isActive, setisActive] = useState('');
  console.log("active", isActive)
  const [toggle, settoggle] = useState(false);

  const handeleactive = (name) => {
    setisActive(name);
    settoggle(false)
    console.log("name", name)
  }
  return (
    <div className="MainHeader">
      <div className="container">
        <nav>
          <div className="logo">
            <h3>
              P<span>o</span>rtf<span>o</span>li<span>o</span>
            </h3>
          </div>
          <div className="MenuList">
            <ul>
              <li className={isActive === 'Home' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Home')} to="home" spy={true} smooth={true}><span>Home</span></Link>
              </li>
              <li className={isActive == 'Education' ? 'activeMenu' : null} >
                <Link onClick={e => handeleactive('Education')} to="Education" spy={true} smooth={true}><span >Education</span></Link>

              </li>
              <li className={isActive == 'Skills' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Skills')} to="skills" spy={true} smooth={true}><span >Skills</span></Link>

              </li>
              <li className={isActive === 'Experince' ? 'activeMenu' : null} >
                <Link onClick={e => handeleactive('Experince')} to="experince" spy={true} smooth={true}><span >Experince</span></Link>

              </li>
              <li className={isActive == 'Portfolio' ? 'activeMenu' : null} >
                <Link onClick={e => handeleactive('Portfolio')} to="Portfolio" spy={true} smooth={true}><span>Portfolio</span></Link>

              </li>
              <li className={isActive == 'Contact' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Contact')} to="Contact" spy={true} smooth={true}><span>Contact</span></Link>

              </li>
            </ul>
          </div>

          <div className="smMenuList">
            <button onClick={() => settoggle(!toggle)}>
              <i class="fas fa-bars"></i>
            </button>
            <ul className={toggle ? "Show" : "Hide"}>
              <li className={isActive === 'Home' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Home')} to="home" spy={true} smooth={true}>
                  <span className="activeMenu">Home</span>
                </Link>
              </li>
              <li className={isActive == 'Education' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Education')} to="Education" spy={true} smooth={true}>
                  <span >Education</span>
                </Link>
              </li>
              <li className={isActive == 'Skills' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Skills')} to="skills" spy={true} smooth={true}>
                  <span >Skills</span>
                </Link>
              </li>
              <li className={isActive === 'Experince' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Experince')} to="experince" spy={true} smooth={true}>
                  <span>Experince</span>
                </Link>
              </li>
              <li className={isActive == 'Portfolio' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Portfolio')} to="Portfolio" spy={true} smooth={true}>
                  <span>Portfolio</span>
                </Link>
              </li>
              <li className={isActive == 'Contact' ? 'activeMenu' : null}>
                <Link className={isActive == 'Contact' ? 'activeMenu' : null} to="Contact" spy={true} smooth={true}>
                  <span onClick={handeleactive}>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
