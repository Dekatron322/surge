"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { FiSearch } from "react-icons/fi";
import SplitType from "split-type";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS styles
import SubscribeModal from "./SubscribeModal";

const Hero = () => {
  const handleScroll = () => {};
  useEffect(() => {
    AOS.init();
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero flex-col padding-x justify-center self-center items-center">
      <div className="flex-col  pt-40 justify-center self-center">
        <h1
          id="text"
          className="xl:text-5xl md:text-5xl text-[28px] font-black self-center text-center max-w-[1000px] text-black-100 ease-in-out duration-500 slide-in-from-top"
        >
          A pioneering force dedicated solely to empowering tech startups across
          Africa
        </h1>

        <p
          className="hero__subtitle text-center"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="1500"
        >
          Access curated investments in tech startups accross africa
        </p>

        <div className="flex mt-10 gap-5 justify-center self-center">
          <input
            type="text"
            placeholder="Enter your email..."
            className="px-4 py-2 border border-gray-300 rounded-md bg-transparent hidden md:block xl:block"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="250"
          />
          <CustomButton
            title="Get started"
            containerStyles="bg-primary-blue text-white rounded-md hover:bg-[#422f45] ease-in-out duration-500"
            handleClick={() => setIsOpen(true)}
          />
        </div>
        <small className="text-xs flex text-gray-400 pt-4 text-center justify-center">
          Private investments are highly risky, illiquid and may result in total
          loss of capital.
        </small>
      </div>
      <SubscribeModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default Hero;
