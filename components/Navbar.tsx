"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsLinkedin, BsList, BsX } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const styles = {
  navLinks:
    "cursor-pointer ml-10 capitalize flex hover:text-primary-blue items-center text-sm ease-in-out duration-500",
  fixedHeader: "fixed top-0 left-0 right-0",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header
      className={`w-full  z-10 ${styles.fixedHeader}`}
      style={{
        backgroundColor: "#1C0F1F",
        borderBottom: "1px solid rgba(243, 243, 243, 0.2)",
      }}
    >
      <nav className="max-w-[1440px] mx-auto h-24 shadow-xl">
        <div className="flex justify-between items-center h-full sm:px-16 px-6 w-full">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/2.png"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>

          <div className="text-white hidden sm:flex">
            <ul className="hidden sm:flex">
              <li className={styles.navLinks}>
                <Link href="/about">About</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="flex items-center space-x-5 text-white ml-10 border border-white px-4 py-1 rounded-md hover:bg-primary-blue hover:text-white ease-in-out duration-500">
                <Link href="">Sign In</Link>
              </li>
            </ul>
          </div>
          {/* mobile Menu*/}
          <div className="sm:hidden cursor-pointer pl-24">
            <BsList
              onClick={() => setMenuOpen(true)}
              className="h8 w-8 text-white"
            />
          </div>
          <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#1C0F1F] p-10 ease-in-out duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
            }
          >
            <div className="flex w-full items-center justify-between">
              <Image
                src="/2.png"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
                onClick={() => setMenuOpen(false)}
              />
              <div className="cursor-pointer">
                <BsX
                  className="h-8 w-8 text-white"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
            </div>
            {/* mobile Menu Links*/}
            <div className="flex-col py-4">
              <ul>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-white text-white"
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-white text-white"
                >
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center text-[#857e75] py-4"
                >
                  <p className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition ease-in-out delay-300">
                    Sign In
                  </p>
                </li>
              </ul>
            </div>
            {/* Social Media Links */}
            <div className="flex flex-row gap-10 pt-10 items-center">
              <Link href="">
                <FaTwitterSquare
                  size={30}
                  className="cursor-pointer text-black-100 hover:text-[#857e75] ease-in-out duration-300"
                />
              </Link>
              <Link href="">
                <BsLinkedin
                  size={30}
                  className="cursor-pointer text-black-100 hover:text-[#857e75] ease-in-out duration-300"
                />
              </Link>
              <Link href="">
                <SiDiscord
                  size={30}
                  className="cursor-pointer text-black-100 hover:text-[#857e75] ease-in-out duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
