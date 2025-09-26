import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Dashboard Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
