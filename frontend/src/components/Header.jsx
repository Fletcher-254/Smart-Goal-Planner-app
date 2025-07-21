import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold underline"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-md px-4 py-3 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          SmartGoal
        </Link>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
