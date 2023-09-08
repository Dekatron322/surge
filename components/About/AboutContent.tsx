"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CustomButton } from "..";
import AOS from "aos";
import "aos/dist/aos.css";
import { team, testimonials, partners } from "@/contants";

const AboutContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-10">
      <div className="max-w-[1300px] mx-auto justify-between flex xl:flex-row flex-col gap-x-20 px-6 relative z-0">
        <div>
          <h2
            className="text-black-100 xl:text-5xl md:text-5xl text-[32px]  font-black"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="250"
          >
            What We Do
          </h2>
          <p
            className="xl:pt-10 pt-4 md:text-lg text text-black-100"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            At TheSurge.tech, we are passionate advocates for Africa's tech
            startups, driven by a collective belief in the transformative power
            of innovation. Founded by a team of seasoned professionals with
            extensive experience in technology, business development, and
            venture capital, we are dedicated to bridging the gap between
            promising tech startups and the resources they need to succeed.
          </p>

          <p
            className="xl:pt-10 pt-4 md:text-lg text text-black-100"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            Our commitment to nurturing innovation and fostering a collaborative
            ecosystem sets us apart. We understand the unique challenges faced
            by tech startups and are relentless in our pursuit of solutions. As
            a forward-thinking and impact-driven company, we strive to build
            lasting connections, facilitate partnerships, and empower startups
            with the support they need to scale their ventures.
          </p>

          <p
            className="xl:pt-10 pt-4 md:text-lg text text-black-100"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            From investor outreach and strategic business partnerships to
            financial modeling, technical support, and digital marketing
            strategies, we offer a comprehensive suite of services tailored
            exclusively for tech startups.
          </p>
          <p
            className="xl:pt-10 pt-4 pb-4 md:text-lg text text-black-100"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            Our dedication to impact measurement and reporting ensures that
            startups can communicate their social contributions effectively,
            attracting like-minded partners and investors aligned with their
            vision. Join us at TheSurge.tech as we embark on this transformative
            journey, igniting innovation in tech startups, and powering progress
            across Africa. Together, let's propel the future of tech innovation
            on the continent.
          </p>
        </div>
        <Image
          height={300}
          width={500}
          src="/AboutProperty.jpg"
          alt="hero"
          className="object-contain rounded-xl opacity-70"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="500"
        />
      </div>
      <div>
        <div
          className="max-w-[1300px] mx-auto flex xl:flex-col flex-col justify-center relative z-0 mt-16"
          style={{ borderTop: "1px solid rgba(243, 243, 243, 0.2)" }}
        >
          <h2
            className="text-black-100 xl:text-5xl md:text-5xl text-[32px] font-black text-center mt-6"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="250"
          >
            Invest with the best
          </h2>
          <p
            className="pt-4 text-lg text-black-100 text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            Surge curates private investing opportunities with high-growth
            <br />
            potential across startups in Tech.
          </p>
        </div>
        <div className="pt-10  flex gap-6 marquee-container flex-nowrap mb-20">
          {testimonials.map((item) => (
            <div
              className="border border-chatgpt-100 rounded-md p-6 marquee-content"
              style={{ height: "100%", width: "500px" }}
            >
              <p className="text-black-100 text-md">{item.review}</p>
              <div className="pt-10 flex gap-5 items-center">
                <Image
                  height={100}
                  width={100}
                  src={item.profile}
                  alt="hero"
                  className="about__img-obj object-cover rounded-full"
                />
                <div>
                  <h6 className="text-black-100 text-xl pb-2">{item.name}</h6>
                  <p className="text-black-100">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="relative flex flex-col bg-subscribe bg-cover bg-center max-w-[1300px] mx-auto bg-[#422f45] rounded-2xl h-auto items-center overflow-hidden"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="250"
        >
          <div className="relative">
            <h2 className="text-black-100 xl:text-5xl md:text-5xl text-3xl xl:text-center md:text-center px-6 font-black xl:mt-20 md:mt-20 mt-10">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-black-100 max-w-[800px] text-md xl:text-center md:text-center  px-6 pt-4">
              Don't miss out on exclusive content, insider updates, and exciting
              surprises – subscribe now and join our newsletter community!
            </p>
            <div className="flex mt-10 gap-5 justify-center self-center">
              <input
                type="text"
                placeholder="Enter your email..."
                className="px-4 py-2 border xl:w-[600px] w-[300px] border-gray-300 rounded-md bg-transparent mb-20"
              />
            </div>
          </div>
        </div>
        {/*
        <div
          className="flex max-w-[800px] pt-10 items-center mx-auto flex-col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h2 className="text-black-100 text-xl xl:text-3xl md:text-3xl px-6 text-center">
            The best venture capital firms, family offices, and high net worth
            individuals already invest in Surge companies.
          </h2>
        </div>
          */}
        {/*
        <div className="pt-10 flex gap-5 marquee-container items-center justify-center max-w-[1300px] mx-auto">
          <div className="marquee-content flex">
            {partners.map((item) => (
              <Image
                src={item.image}
                alt="logo"
                width={250}
                height={38}
                className="object-contain"
              />
            ))}
          </div>
        </div>
        */}
        <div
          className="max-w-[1300px] mx-auto mt-10"
          style={{ borderTop: "1px solid rgba(243, 243, 243, 0.2)" }}
        >
          <div className="flex max-w-[700px] pt-10 items-center mx-auto flex-col">
            <h2
              className="text-black-100 md:text-3xl text-2xl font-extrabold px-6 text-center"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Built by a diverse team with deep expertise in private investing
            </h2>
            <p
              className="text-black-100 px-6  mt-2 text-center"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Surge was founded by alumni from different sectors, with depths of
              experience. Since then, we have built a team and a network of the
              top people from the startup, venture capital, and investment
              worlds.
            </p>
          </div>
          <div className="pt-10 flex xl:flex-row md:flex-row flex-col gap-5 xl:justify-between md:justify-between justify-center items-center max-w-[1200px] mx-auto mb-20">
            {team.map((item) => (
              <div
                className="flex flex-col justify-center items-center max-w-[250px]"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1500"
                data-aos-delay="250"
              >
                <Image
                  src={item.profile}
                  alt="logo"
                  width={250}
                  height={250}
                  className="about__img-objx object-cover rounded"
                />
                <h5 className="pt-2 text-black-100">{item.name}</h5>
                <small className="pt-2 text-black-100">{item.department}</small>
                <p className="pt-2 text-black-100 text-center">
                  {item.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
