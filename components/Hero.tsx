"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { FiSearch } from "react-icons/fi";
import SplitType from "split-type";
import { gsap } from "gsap";

const Hero = () => {
  const handleScroll = () => {};
  useEffect(() => {
    // Initialize SplitType and manipulate element classes
    let text = new SplitType("#text");
    let characters = document.querySelectorAll(".char");
    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add("translate-y-full");
    }
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
    });
  }, []);

  return (
    <div className="hero flex-col padding-x justify-center self-center items-center">
      <div className="flex-col pt-40 padding-x justify-center self-center">
        <h1
          id="text"
          className="xl:text-5xl md:text-5xl text-[28px] font-black self-center text-center text-black-100 ease-in-out duration-500 slide-in-from-top px-20"
        >
          A pioneering force dedicated solely to empowering tech startups across
          Africa
        </h1>

        <p className="hero__subtitle text-center">
          Access curated investments in tech startups accross africa
        </p>

        <div className="flex mt-10 gap-5 justify-center self-center">
          <input
            type="text"
            placeholder="Enter your email..."
            className="px-4 py-2 border border-gray-300 rounded-md bg-transparent hidden md:block xl:block"
          />
          <CustomButton
            title="Get started"
            containerStyles="bg-primary-blue text-white rounded-md hover:bg-[#422f45] ease-in-out duration-500"
            handleClick={handleScroll}
          />
        </div>
        <small className="text-xs flex text-gray-400 pt-4 text-center justify-center typewriter">
          Private investments are highly risky, illiquid and may result in total
          loss of capital. Learn more
        </small>
      </div>
    </div>
  );
};

export default Hero;
