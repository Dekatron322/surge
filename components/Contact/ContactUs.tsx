"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CustomButton } from "..";
import { MdForward } from "react-icons/md";

const ContactUs = () => {
  const [activeSection, setActiveSection] = useState("contact");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null); // Declare the type of hoveredSection
  const handleScroll = () => {
    // Add your scroll handling logic here
  };
  return (
    <div className="mt-40">
      <div className="max-w-[1200px] mx-auto flex relative z-0 mt-10 gap-20">
        <div
          className="w-[400px] sticky-section sticky hidden md:block xl-block"
          style={{ position: "sticky", top: "0" }}
        >
          <div
            className="flex gap-4 items-center"
            onClick={() => setActiveSection("contact")}
          >
            <a href="/contact/" className="text-primary-blue text-xl">
              Contact Us
            </a>

            {activeSection === "contact" && (
              <MdForward className="text-primary-blue text-xl" />
            )}
          </div>
          <div
            className="pt-6"
            style={{ borderBottom: "1px solid rgba(243, 243, 243, 0.1)" }}
          ></div>

          <div
            className="flex gap-4 items-center mt-6 "
            onClick={() => setActiveSection("privacy")}
            onMouseEnter={() => setHoveredSection("privacy")} // Set the hover state
            onMouseLeave={() => setHoveredSection(null)} // Reset the hover state
          >
            <a
              href="/privacy/"
              className={`text-black-100 text-xl transition ease-in-out delay-150 ${
                hoveredSection === "privacy"
                  ? "hover:text-primary-blue cursor-pointer"
                  : ""
              }`}
            >
              Privacy Policy
            </a>
            {activeSection === "privacy" || hoveredSection === "privacy" ? (
              <MdForward className="text-primary-blue text-xl" />
            ) : null}
          </div>
          <div
            className="pt-6"
            style={{ borderBottom: "1px solid rgba(243, 243, 243, 0.1)" }}
          ></div>

          <div
            className="flex gap-4 items-center mt-6 "
            onClick={() => setActiveSection("terms")}
            onMouseEnter={() => setHoveredSection("terms")} // Set the hover state
            onMouseLeave={() => setHoveredSection(null)} // Reset the hover state
          >
            <a
              href="terms"
              className={`text-black-100 text-xl transition ease-in-out delay-150 ${
                hoveredSection === "terms"
                  ? "hover:text-primary-blue cursor-pointer"
                  : ""
              }`}
            >
              Terms of Service
            </a>
            {activeSection === "terms" || hoveredSection === "terms" ? (
              <MdForward className="text-primary-blue text-xl" />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className="mb-14 pb-6 px-4 md:px-0 xl:px-0"
            style={{ borderBottom: "1px solid rgba(243, 243, 243, 0.1)" }}
          >
            <h2 className="text-black-100 text-3xl font-bold">
              Investment & Portfolio
            </h2>
            <p className="pt-4 pb-4 text-lg text-black-100 max-w-[1000px]">
              If you have general questions regarding investing in startups on
              Surge. Please note: questions relating to specific startups listed
              on Surge should be directed to startup founders directly, via the
              discussion section on the startup’s page.
            </p>
            <CustomButton
              title="Investor Contact"
              containerStyles="bg-primary-blue text-white rounded-md hover:bg-[#422f45] ease-in-out duration-500"
              handleClick={handleScroll}
            />
          </div>
          <div
            className="mb-14 pb-6 px-4 md:px-0 xl:px-0"
            style={{ borderBottom: "1px solid rgba(243, 243, 243, 0.1)" }}
          >
            <h2 className="text-black-100 text-3xl font-bold ">
              Issuers & Companies
            </h2>
            <p className="pt-4 pb-4 text-lg text-black-100 max-w-[1000px]">
              If you have questions regarding your company eligibility, the
              process of creating and publishing your offering on Surge,
              preparing or filing Form S:
            </p>
            <CustomButton
              title="Issuer Contact"
              containerStyles="bg-primary-blue text-white rounded-md hover:bg-[#422f45] ease-in-out duration-500"
              handleClick={handleScroll}
            />
          </div>

          <div className="mb-20 px-4 md:px-0 xl:px-0">
            <h2 className="text-black-100 text-3xl font-bold ">General</h2>
            <p className="pt-4 pb-4 text-lg text-black-100 max-w-[1000px]">
              If you have any other enquiry about Surge:
            </p>
            <CustomButton
              title="Issuer Contact"
              containerStyles="bg-primary-blue text-white rounded-md hover:bg-[#422f45] ease-in-out duration-500"
              handleClick={handleScroll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
