import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icons: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icons: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icons: faCog,
    },
  ];

  const closeSidebar = () => {
    setShowSideBar(false);
  };
  return (
    <>
      <div className="navBar container">
        <Link to="/" className="logo">
          R<span>e</span>c<span>e</span>pies
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
};

export default Navbar;
