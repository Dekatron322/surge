import React from "react";
import Image from "next/image";
import { CustomButton } from "..";

const AboutContent = () => {
  return (
    <div className=" mt-10 ">
      <div className="max-w-[1300px] mx-auto justify-between flex xl:flex-row flex-col gap-x-20 px-6 relative z-0">
        <div>
          <h2 className="text-black-100 xl:text-5xl md:text-5xl text-[32px] font-black">
            What We Do
          </h2>
          <p className="xl:pt-10 pt-4 text-lg text-black-100">
            Most SMEs cannot afford the cost of comprehensive marketing to
            increase brand awareness, audience, and sales due to the rising cost
            of doing business. Building and maintaining a website to assist with
            business operations is now either too expensive or not sustainable.
            Importantly, lacking a digital identity and presence is detrimental
            to conducting business in the modern day.
          </p>

          <p className="xl:pt-10 pt-4 text-lg text-black-100">
            In order to provide comprehensive digital marketing solutions to
            SMEs for the aim of simply and artistically interacting with a
            larger audience, ultimately for business growth, the Purple Pages
            concept was established with a creative, problem-solving objective.
          </p>

          <p className="xl:pt-10 pt-4 text-lg text-black-100">
            Purple Pages is, to put it simply, a one-stop shop for SMEs' digital
            marketing needs.
          </p>
          <p className="xl:pt-10 pt-4 pb-4 text-lg text-black-100">
            Most SMEs cannot afford the cost of comprehensive marketing to
            increase brand awareness, audience, and sales due to the rising cost
            of doing business. Building and maintaining a website to assist with
            business operations is now either too expensive or not sustainable.
            Importantly, lacking a digital identity and presence is detrimental
            to conducting business in the modern day.
          </p>
        </div>
        <Image
          height={300}
          width={500}
          src="/AboutProperty.jpg"
          alt="hero"
          className="object-contain rounded-xl opacity-70"
        />
      </div>
      <div>
        <div
          className="max-w-[1300px] mx-auto flex xl:flex-col flex-col justify-center relative z-0 mt-16"
          style={{ borderTop: "1px solid rgba(243, 243, 243, 0.2)" }}
        >
          <h2 className="text-black-100 xl:text-5xl md:text-5xl text-[32px] font-black text-center mt-6">
            Invest with the best
          </h2>
          <p className="pt-4 text-lg text-black-100 text-center ">
            Republic curates private investing opportunities with high-growth
            potential <br /> across startups, gaming, real estate, and crypto.
          </p>
        </div>
        <div className="pt-10  flex gap-6 marquee-container flex-nowrap mb-20">
          <div
            className="border border-chatgpt-100 rounded-md p-6 marquee-content"
            style={{ height: "100%", width: "500px" }}
          >
            <p className="text-black-100 text-md">
              Search and filter by sectors, highlights, top deals and more. Want
              to support climate-tech or Black founders? Set your preferences to
              be notified when those deals launch.
            </p>
            <div className="pt-10 flex gap-5 items-center">
              <Image
                height={100}
                width={100}
                src="/AboutProperty.jpg"
                alt="hero"
                className="about__img-obj object-cover rounded-full"
              />
              <div>
                <h6 className="text-black-100 text-xl pb-2">Benedict Omodia</h6>
                <p className="text-black-100">
                  Chief Operation Officer, Mkobo Microfinance Bank
                </p>
              </div>
            </div>
          </div>
          <div
            className="border border-chatgpt-100 rounded-md p-6 marquee-content"
            style={{ height: "100%", width: "500px" }}
          >
            <p className="text-black-100 text-md">
              Search and filter by sectors, highlights, top deals and more. Want
              to support climate-tech or Black founders? Set your preferences to
              be notified when those deals launch.
            </p>
            <div className="pt-10 flex gap-5 items-center">
              <Image
                height={100}
                width={100}
                src="/AboutProperty.jpg"
                alt="hero"
                className="about__img-obj object-cover rounded-full"
              />
              <div>
                <h6 className="text-black-100 text-xl pb-2">Benedict Omodia</h6>
                <p className="text-black-100">
                  Chief Operation Officer, Mkobo Microfinance Bank
                </p>
              </div>
            </div>
          </div>
          <div
            className="border border-chatgpt-100 rounded-md p-6 marquee-content"
            style={{ height: "100%", width: "500px" }}
          >
            <p className="text-black-100 text-md">
              Search and filter by sectors, highlights, top deals and more. Want
              to support climate-tech or Black founders? Set your preferences to
              be notified when those deals launch.
            </p>
            <div className="pt-10 flex gap-5 items-center">
              <Image
                height={100}
                width={100}
                src="/AboutProperty.jpg"
                alt="hero"
                className="about__img-obj object-cover rounded-full"
              />
              <div>
                <h6 className="text-black-100 text-xl pb-2">Benedict Omodia</h6>
                <p className="text-black-100">
                  Chief Operation Officer, Mkobo Microfinance Bank
                </p>
              </div>
            </div>
          </div>
          <div
            className="border border-chatgpt-100 rounded-md p-6 marquee-content"
            style={{ height: "100%", width: "500px" }}
          >
            <p className="text-black-100 text-md">
              Search and filter by sectors, highlights, top deals and more. Want
              to support climate-tech or Black founders? Set your preferences to
              be notified when those deals launch.
            </p>
            <div className="pt-10 flex gap-5 items-center">
              <Image
                height={100}
                width={100}
                src="/AboutProperty.jpg"
                alt="hero"
                className="about__img-obj object-cover rounded-full"
              />
              <div>
                <h6 className="text-black-100 text-xl pb-2">Benedict Omodia</h6>
                <p className="text-black-100">
                  Chief Operation Officer, Mkobo Microfinance Bank
                </p>
              </div>
            </div>
          </div>
          <div
            className="border border-chatgpt-100 rounded-md p-6 marquee-content"
            style={{ height: "100%", width: "500px" }}
          >
            <p className="text-black-100 text-md">
              Search and filter by sectors, highlights, top deals and more. Want
              to support climate-tech or Black founders? Set your preferences to
              be notified when those deals launch.
            </p>
            <div className="pt-10 flex gap-5 items-center">
              <Image
                height={100}
                width={100}
                src="/AboutProperty.jpg"
                alt="hero"
                className="about__img-obj object-cover rounded-full"
              />
              <div>
                <h6 className="text-black-100 text-xl pb-2">Benedict Omodia</h6>
                <p className="text-black-100">
                  Chief Operation Officer, Mkobo Microfinance Bank
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col max-w-[1300px] mx-auto bg-[#422f45] rounded-2xl h-[400px] items-center overflow-hidden">
          <div className="relative">
            <h2 className="text-black-100 xl:text-5xl md:text-5xl text-3xl xl:text-center md:text-center px-6 font-black xl:mt-20 md:mt-20 mt-10">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-black-100 max-w-[800px] text-md xl:text-center md:text-center  px-6 pt-4">
              Apart from a man tripping down the different crypto dips, there's
              a lot to explore in the Crypto space and we'd love to share that
              with you. Be it our product update, a new crypto fact, or a random
              recipe we pasted by accident.
            </p>
            <div className="flex mt-10 gap-5 justify-center self-center">
              <input
                type="text"
                placeholder="Enter your email..."
                className="px-4 py-2 border xl:w-[600px] w-[300px] border-gray-300 rounded-md bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="flex max-w-[800px] pt-10 items-center mx-auto flex-col">
          <h2 className="text-black-100 text-xl xl:text-3xl md:text-3xl px-6 text-center">
            The best venture capital firms, family offices, and high net worth
            individuals already invest in Republic companies.
          </h2>
        </div>
        <div className="pt-10 flex gap-5 items-center justify-center max-w-[1300px] mx-auto">
          <Image
            src="/1.29fa28b6.webp"
            alt="logo"
            width={250}
            height={38}
            className="object-contain"
          />
          <Image
            src="/2.6c23e285.webp"
            alt="logo"
            width={250}
            height={38}
            className="object-contain"
          />
          <Image
            src="/3.527c6779.webp"
            alt="logo"
            width={250}
            height={38}
            className="object-contain"
          />
          <Image
            src="/8.f6e79674.webp"
            alt="logo"
            width={250}
            height={38}
            className="object-contain"
          />
        </div>
        <div
          className="max-w-[1300px] mx-auto mt-10"
          style={{ borderTop: "1px solid rgba(243, 243, 243, 0.2)" }}
        >
          <div className="flex max-w-[800px] pt-10 items-center mx-auto flex-col">
            <h2 className="text-black-100 md:text-3xl text-2xl font-extrabold px-6 text-center">
              Built by a diverse team with deep expertise in private investing
            </h2>
            <p className="text-black-100 px-6  mt-2 text-center">
              Republic was founded by alumni from AngelList, the largest online
              platform for private investing. Since then, we have built a team
              and a network of the top people from the startup, venture capital,
              and investment worlds.
            </p>
          </div>
          <div className="pt-10 flex xl:flex-row md:flex-row flex-col gap-5 xl:justify-between md:justify-between justify-center items-center max-w-[1200px] mx-auto mb-20">
            <div className="flex flex-col justify-center items-center max-w-[250px]">
              <Image
                src="/team1.jpg"
                alt="logo"
                width={250}
                height={250}
                className="about__img-objx object-cover rounded-full"
              />
              <h5 className="pt-2 text-black-100">Ibrahim Muritala</h5>
              <small className="pt-2 text-black-100">Tech</small>
              <p className="pt-2 text-black-100 text-center">
                Senior Engineering Manager. Founder & CEO at Hoodies company.
                Co-founder of Checky, a health startup.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[250px]">
              <Image
                src="/team0.jpg"
                alt="logo"
                width={250}
                height={250}
                className="about__img-objx object-cover rounded-full"
              />
              <h5 className="pt-2 text-black-100">Ibrahim Muritala</h5>
              <small className="pt-2 text-black-100">Tech</small>
              <p className="pt-2 text-black-100 text-center">
                Senior Engineering Manager. Founder & CEO at Hoodies company.
                Co-founder of Checky, a health startup.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[250px]">
              <Image
                src="/team2.jpg"
                alt="logo"
                width={250}
                height={250}
                className="about__img-objx object-cover rounded-full"
              />
              <h5 className="pt-2 text-black-100">Ibrahim Muritala</h5>
              <small className="pt-2 text-black-100">Marketing</small>
              <p className="pt-2 text-black-100 text-center">
                Senior Engineering Manager. Founder & CEO at Hoodies company.
                Co-founder of Checky, a health startup.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[250px]">
              <Image
                src="/team3.jpg"
                alt="logo"
                width={250}
                height={250}
                className="about__img-objx object-cover rounded-full"
              />
              <h5 className="pt-2 text-black-100">Ibrahim Muritala</h5>
              <small className="pt-2 text-black-100">Marketing</small>
              <p className="pt-2 text-black-100 text-center">
                Senior Engineering Manager. Founder & CEO at Hoodies company.
                Co-founder of Checky, a health startup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
