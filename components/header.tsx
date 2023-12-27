"use client";

import HamburgerIcon from "@assets/icons/hamburger.svg";
import Logo from "@assets/icons/hulu-logo.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="absolute top-0 text-arcticGlow w-full min-w-[320px]">
      <nav className="h-[74px] flex relative">
        <div className="flex items-center pl-6 text-primary">
          <span className="h-6">
            <Logo />
          </span>
        </div>
        <div className="flex justify-end items-center pr-6 absolute right-0 top-1/2 -translate-y-1/2"></div>
        <div className="flex justify-end items-center pr-6 absolute right-0 top-1/2 -translate-y-1/2">
          <a
            href=""
            className="hidden lg:flex px-4 h-10 items-center justify-center rounded-lg cursor-pointer text-arcticGlow uppercase font-semibold"
          >
            Login
          </a>
          <div className="lg:hidden">
            <button
              className="flex justify-center items-center rounded-lg bg-[#323843] text-white cursor-pointer py-3 px-4"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <HamburgerIcon />
            </button>
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } flex-col whitespace-nowrap text-sm w-72 absolute top-[50px] bg-[#272c34] rounded-lg shadow-medium right-5 py-1`}
            >
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center rounded-[4px] px-3 my-1 mx-2 w-menuButton h-10"
                >
                  Get the Hulu app
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex uppercase font-semibold justify-center items-center rounded-[4px] px-3 my-1 mx-2 w-menuButton h-10"
                >
                  Login
                </a>
              </li>
              <li>
                <button className="mx-1 font-semibold leading-none uppercase inline-flex items-center justify-center cursor-pointer h-12 w-ctaButton px-6 bg-[#0b0c0f] rounded-md">
                  <span className="w-full ">GET ALL THREE</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
