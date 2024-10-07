import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Header = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  // Change the navbar background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setNavbarBg("bg-base-100 shadow-lg top-0");
      } else {
        setNavbarBg("bg-transparent top-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`z-10 fixed w-full ${navbarBg} bg-opacity-90 bg-blur-md`}>
        <div className="navbar w-[70%] mx-auto py-2">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow"
          >
            <li>
              <Link>Statistic</Link>
            </li>
            <li>
              <Link to="/applied-jobs">Applied Jobs</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <Link className="text-black font-extrabold text-3xl">CareerHunt</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1">
          <li>
            <Link>Statistic</Link>
          </li>
          <li>
            <Link to="/applied-jobs">Applied Jobs</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/all-jobs" className="px-6 py-4 rounded-lg cursor-pointer gradient-btn-bg hover:bg-[#7E90FE] text-white text-lg">Start Applying</Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
