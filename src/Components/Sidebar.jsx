import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ links, close }) => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar" onClick={close}>
        {links.map((link) => (
          <Link
            to={link.path}
            className={
              location.pathname === link.path
                ? "sidebar-link active"
                : "sidebar-link"
            }
            key={link.name}>
            <FontAwesomeIcon icon={link.icons} />
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
