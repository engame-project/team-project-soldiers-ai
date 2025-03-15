import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navoptions = <>
    <Link to="/">Home</Link>
    <li>About</li>
    <Link to="/contact-us">
      <li>Contact</li>
    </Link>
    <Link to="/pricing">
      <li>Pricing</li>
    </Link>

  </>
  return (
    <div className="navbar py-4 px-8 max-w-screen-xl mx-auto">
      <div className="navbar-start  flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg z-10 mt-3 w-52 p-4 shadow-lg"
          >
            {navoptions}

          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Soldiers AI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 font-bold">
          {navoptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
