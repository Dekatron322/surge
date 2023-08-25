"use client";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS styles

import { CustomButton } from ".";
import { useEffect } from "react";
const Investors = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="mt-10 max-w-[1300px] mx-auto"
      style={{ borderTop: "1px solid rgba(243, 243, 243, 0.2)" }}
    >
      <div className="mt-10 padding-x flex xl:flex-col flex-col relative z-0 ">
        <div className="flex flex-col justify-center items-center">
          <p
            className="text-gray-400 text-xl pb-5"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="750"
          >
            For Investors
          </p>
          <h2
            className="text-black-100 xl:text-5xl md:text-5xl text-[28px] font-black text-center"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            Simple, transparent, <br />
            and accessible
          </h2>
        </div>
        <div className="pt-10 md:flex-row xl:flex-row flex flex-col justify-between gap-6 mb-6">
          <div
            className="bg-[#422f45] rounded-md p-6"
            style={{ flex: 1, height: "100%" }}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="250"
          >
            <h5 className="text-black-100 text-2xl pb-5 b">
              1. Find companies
            </h5>
            <p className="text-black-100 text-md">
              Search and filter by sectors, highlights, top deals and more. Want
              to support climate-tech or Black founders? Set your preferences to
              be notified when those deals launch.
            </p>
          </div>
          <div
            className="bg-[#422f45] rounded-md p-6"
            style={{ flex: 1, height: "100%" }}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h5 className="text-black-100 text-2xl pb-5 b">
              2. Invest on your terms
            </h5>
            <p className="text-black-100 text-md">
              Do your own research on every page. Review financials, valuation,
              and read reviews from other investors. Become an owner for as
              little as $50.
            </p>
          </div>
          <div
            className="bg-[#422f45] rounded-md p-6"
            style={{ flex: 1, height: "100%" }}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="750"
          >
            <h5 className="text-black-100 text-2xl pb-5 b">
              3. Build and diversify your portfolio
            </h5>
            <p className="text-black-100 text-md">
              View your investments on the app or web and track your
              diversification. Get live updates about your investments from
              founders too.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <CustomButton
          title="Get Started"
          containerStyles="bg-primary-blue text-white rounded-md hover:bg-[#422f45] ease-in-out duration-500"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Investors;
