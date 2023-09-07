"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { FiSearch } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SubscribeModal from "../SubscribeModal";

const AboutHeader = () => {
  const handleScroll = () => {
    // Add your scroll handling logic here
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="about flex-col justify-center self-center items-center">
      <div className="flex-col justify-center self-center items-center h-full">
        <div className="image-container flex flex-col justify-center items-center h-full relative">
          <Image
            className="opacity-30"
            width={0}
            height={0}
            src="/About.jpg"
            alt="about"
            layout="responsive"
          />
          <div className="image-text xl:text-center">
            <h1
              className="xl:text-5xl md:text-5xl text-3xl font-extrabold text-black-100 pb-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="250"
            >
              The future of private investing
            </h1>
            <p
              className="text-black-100 pb-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Surge is the private investing platform for investors seeking high
              growth potential.
            </p>
            <div className="w-full flex justify-center items-center">
              <CustomButton
                title="Get started"
                containerStyles="bg-primary-blue text-white rounded-md hover:bg-[#422f45] ease-in-out duration-500"
                handleClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <SubscribeModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </header>
  );
};

export default AboutHeader;
