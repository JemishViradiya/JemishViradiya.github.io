import React, { useState } from "react";
import "./Header.scss";

import { Link } from "react-scroll";

export const Header = ({ headerData }) => {
  const [isActive, setisActive] = useState("");
  const [toggle, settoggle] = useState(false);

  const handeleactive = (name) => {
    setisActive(name);
    settoggle(false);
  };

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
              {headerData?.map((link, index) => (
                <li
                  key={`key${index}-${link?.id}`}
                  className={isActive === link?.name ? "activeMenu" : null}
                >
                  <Link
                    onClick={() => handeleactive(link?.name)}
                    to={link?.component?.toLowerCase()}
                    spy={true}
                    smooth={true}
                  >
                    <span>{link?.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="smMenuList">
            <button onClick={() => settoggle(!toggle)}>
              <i className="fas fa-bars"></i>
            </button>
            <ul className={toggle ? "Show" : "Hide"}>
              {headerData?.map((link, index) => (
                <li
                  key={`key${index}-${link?.id}`}
                  className={isActive === link?.name ? "activeMenu" : null}
                >
                  <Link
                    onClick={() => handeleactive(link?.name)}
                    to={link?.component?.toLowerCase()}
                    spy={true}
                    smooth={true}
                  >
                    <span>{link?.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
