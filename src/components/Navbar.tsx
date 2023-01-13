import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import NavLink from "./NavLink";

type Props = {};

function Navbar({}: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className=" my-6 px-3 w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex gap-3">
          <img src={logo} alt="" />
          <span className="font-bold text-xl">NFT Market</span>
        </Link>
        <div className="flex md:order-2">
          <ul className="flex gap-2">
            <button
              type="button"
              className="rounded-xl text-sm border border-gray-500 py-2 px-4 hidden md:block"
            >
              Contact
            </button>
            <button
              type="button"
              className="rounded-xl text-sm border border-gray-500 py-2 px-4 bg-gradient-to-r text-white to-purple-dark from-purple-light"
            >
              My account
            </button>
          </ul>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-0"
            aria-controls="navbar-sticky"
            aria-expanded={openMenu}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <span className="sr-only">Open main menu</span>
            {!openMenu && (
              <svg
                className="w-6 h-6 transition-all ease-linear duration-250"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
            {openMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 transition-all ease-linear duration-250"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            openMenu ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex space-y-4 md:space-y-0 flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-10 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <NavLink to="">Auctions</NavLink>
            </li>
            <li>
              <NavLink to="">Roadmap</NavLink>
            </li>
            <li>
              <NavLink to="">Discover</NavLink>
            </li>
            <li>
              <NavLink to="">Community</NavLink>
            </li>
            <li>
              <button
                type="button"
                className="rounded-xl text-sm border border-gray-500 py-2 px-4 md:hidden"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
