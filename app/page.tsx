"use client";

import { Footer, Founder, Investors, Navbar } from "@/components";
import Hero from "@/components/Hero";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <div
          className="mt-20 padding-x hidden md:flex gap-10 relative z-0 max-w-[1200px] mx-auto"
          id="discover"
        >
          <div
            className="home__text-container hidden md:flex justify-center items-center w-full md:w-1/4"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="250"
          >
            {/* Add flex styles */}
            <h1 className="md:text-5xl text-3xl font-extrabold self-center">
              100+
            </h1>
            <p className="self-center">Community members</p>
          </div>
          <div
            className="home__text-container hidden md:flex justify-center items-center w-full md:w-1/4"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            {/* Add flex styles */}
            <h1 className="md:text-5xl text-3xl font-extrabold self-center">
              $0.00
            </h1>
            <p className="self-center">Funds deployed</p>
          </div>
          <div
            className="home__text-container hidden md:flex justify-center items-center w-full md:w-1/4"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="750"
          >
            {/* Add flex styles */}
            <h1 className="md:text-5xl text-3xl font-extrabold self-center">
              000
            </h1>
            <p className="self-center">Funded ventures</p>
          </div>
          <div
            className="home__text-container hidden md:flex justify-center items-center w-full md:w-1/4"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            {/* Add flex styles */}
            <h1 className="md:text-5xl text-3xl font-extrabold self-center">
              003+
            </h1>
            <p className="self-center">Countries</p>
          </div>
        </div>
        <div className="relative z-0 max-w-[1200px] mx-auto" id="discover">
          <div className="md:hidden flex mt-10 padding-x ">
            <div
              className="home__text-container flex flex-col justify-center items-center w-full md:w-1/4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="250"
            >
              {/* Add flex styles */}
              <h1 className="md:text-5xl text-3xl font-extrabold self-center">
                100+
              </h1>
              <p className="self-center">Community members</p>
            </div>
            <div
              className="home__text-container flex flex-col justify-center items-center w-full md:w-1/4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              {/* Add flex styles */}
              <h1 className="md:text-5xl text-3xl font-extrabold self-center">
                0.00+
              </h1>
              <p className="self-center">Funds deployed</p>
            </div>
          </div>
          <div className="md:hidden flex mt-10 padding-x  gap-10">
            <div
              className="home__text-container flex flex-col justify-center items-center w-full md:w-1/4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="750"
            >
              {/* Add flex styles */}
              <h1 className="md:text-5xl text-3xl font-extrabold self-center">
                000
              </h1>
              <p className="self-center">Funded ventures</p>
            </div>
            <div
              className="home__text-container flex flex-col justify-center items-center w-full md:w-1/4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              {/* Add flex styles */}
              <h1 className="md:text-5xl text-3xl font-extrabold self-center">
                003+
              </h1>
              <p className="self-center">Countries</p>
            </div>
          </div>
        </div>
        <div
          className="mt-6 px-6 padding-x justify-center  flex xl:flex-row flex-row gap-10 relative z-0 max-w-[1300px] mx-auto"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="250"
        >
          <small className="text-gray-400 text-center">
            The testimonials, statements, and opinions presented here are
            applicable to the individuals depicted. Unique experiences and past
            performances do not guarantee future results.
          </small>
        </div>
      </main>
      <Founder />
      <Investors />
    </>
  );
}
