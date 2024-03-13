import { useState } from "react";
import { navItems } from "../contants";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <nav className="bg-theme-primary text-theme-text w-full relative z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Robbie Corcoran
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto text-white ${
              navOpen ? "block transition ease-in duration-250" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-2 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block md:py-2 md:px-3 md:p-0 text-right hover:underline hover:text-slate-200"
                    aria-current="page"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
