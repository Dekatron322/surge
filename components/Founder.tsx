"use client";

import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";

import { CustomButton } from ".";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Founder = () => {
  const [animate, setAnimate] = useState(false); // State to control animation

  // Function to trigger animation after a delay
  useEffect(() => {
    AOS.init();
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 1000); // Delay in milliseconds
    return () => clearTimeout(timeout);
  }, []);

  const fadeInAnimation = `
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-10 padding-x justify-between  flex xl:flex-row flex-col gap-x-40 relative z-0 max-w-[1300px] mx-auto">
      <div className="">
        <p
          className="text-gray-400 text-xl pb-1"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          For Founders
        </p>
        <h2
          className="text-black-100 xl:text-5xl md:text-5xl text-[28px] font-black"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="750"
        >
          Let's raise
          <br /> capital and build <br />
          the future together
        </h2>

        <CustomButton
          title="Raise Capital"
          containerStyles="bg-primary-blue hover:bg-[#422f45] ease-in-out duration-500 text-white rounded-md xl:mt-10 md:mt-10 mt-4"
          handleClick={handleScroll}
        />
        <div className="mt-10 relative">
          <Image
            height={300}
            width={500}
            src="/Africans.jpg"
            alt="hero"
            className="object-contain rounded-xl opacity-70"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="1000"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <BsPlayCircle
              className="w-16 h-16 secondary-orange"
              style={{ color: "#1C0F1F" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12l-6-6v12l6-6z"
              />
            </BsPlayCircle>
          </div>
        </div>
        <small
          className="flex justify-center pt-4 text-white"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          Hear from alumni founders about their campaigns.
        </small>
      </div>
      <div className="pt-10 flex-col max-w-[500px]">
        <div
          className="pb-10 fadeInAnimation"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="250"
        >
          <h5 className="text-black-100 xl:text-3xl md:text-3xl text-2xl md:pb-5 pb-3">
            Powerful fundraising tools
          </h5>
          <p className="text-black-100 md:text-lg">
            Make the most of your round through tools like: social capital,
            teasers, whitelist, sharedrops and more.
          </p>
        </div>
        <div
          className="pb-10"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h5 className="text-black-100 xl:text-3xl md:text-3xl text-2xl md:pb-5 pb-3">
            Engage your community
          </h5>
          <p className="text-black-100 md:text-lg">
            Turn your customers into owners and brand ambassadors who are bought
            in for the long haul.
          </p>
        </div>
        <div
          className="pb-10"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="750"
        >
          <h5 className="text-black-100 xl:text-3xl md:text-3xl text-2xl md:pb-5 pb-3">
            Dedicated team
          </h5>
          <p className="text-black-100 md:text-lg">
            From legal resources, to designing your campaign page, marketing
            your raise, and more - we’re invested in your success.
          </p>
        </div>
        <div
          className="pb-10"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <h5 className="text-black-100 xl:text-3xl md:text-3xl text-2xl md:pb-5 pb-3">
            Paper filing help
          </h5>
          <p className="text-black-100 md:text-lg">
            Our team will help you file all the paperwork to get started and
            launch your campaign.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
