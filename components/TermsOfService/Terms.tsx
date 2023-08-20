"use client";
import React, { useState } from "react";
import { MdForward } from "react-icons/md";

const Terms = () => {
  const [activeSection, setActiveSection] = useState("terms");
  const [hoveredSection, setHoveredSection] = useState(null);
  const handleScroll = () => {
    // Add your scroll handling logic here
  };
  return (
    <div className="mt-40">
      <div className="max-w-[1200px] mx-auto flex relative z-0 mt-10 gap-20">
        <div className="w-[400px] sticky-section sticky hidden md:block xl-block">
          <div
            className="flex gap-4 items-center "
            onClick={() => setActiveSection("contact")}
            onMouseEnter={() => setHoveredSection("contact")} // Set the hover state
            onMouseLeave={() => setHoveredSection(null)} // Reset the hover state
          >
            <a
              href="/contact/"
              className={`text-black-100 text-xl transition ease-in-out delay-150 ${
                hoveredSection === "contact"
                  ? "hover:text-primary-blue cursor-pointer"
                  : ""
              }`}
            >
              Contact Us
            </a>
            {activeSection === "contact" || hoveredSection === "contact" ? (
              <MdForward className="text-primary-blue text-xl" />
            ) : null}
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
              className={`text-primary-blue text-xl transition ease-in-out delay-150 ${
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
          <div
            className="pt-6"
            style={{ borderBottom: "1px solid rgba(243, 243, 243, 0.1)" }}
          ></div>

          <div
            className="flex gap-4 items-center mt-6 "
            onClick={() => setActiveSection("market")}
            onMouseEnter={() => setHoveredSection("market")} // Set the hover state
            onMouseLeave={() => setHoveredSection(null)} // Reset the hover state
          >
            <a
              href="market"
              className={`text-black-100 text-xl transition ease-in-out delay-150 ${
                hoveredSection === "market"
                  ? "hover:text-primary-blue cursor-pointer"
                  : ""
              }`}
            >
              Secondary Market Terms
            </a>
            {activeSection === "market" || hoveredSection === "market" ? (
              <MdForward className="text-primary-blue text-xl" />
            ) : null}
          </div>
          <div
            className="pt-6"
            style={{ borderBottom: "1px solid rgba(243, 243, 243, 0.1)" }}
          ></div>

          <div
            className="flex gap-4 items-center mt-6 "
            onClick={() => setActiveSection("cookie")}
            onMouseEnter={() => setHoveredSection("cookie")} // Set the hover state
            onMouseLeave={() => setHoveredSection(null)} // Reset the hover state
          >
            <a
              href="cookie"
              className={`text-black-100 text-xl transition ease-in-out delay-150 ${
                hoveredSection === "cookie"
                  ? "hover:text-primary-blue cursor-pointer"
                  : ""
              }`}
            >
              Cookie Disclosure
            </a>
            {activeSection === "cookie" || hoveredSection === "cookie" ? (
              <MdForward className="text-primary-blue text-xl" />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-14 pb-6 px-4 md:px-0 xl:px-0">
            <h2 className="text-black-100 text-3xl font-bold">
              Terms and Conditions
            </h2>
            <p className="pt-4 pb-4 text-black-100 max-w-[1000px]">
              Welcome to The Surge.tech! We are excited to have you join our
              pioneering force dedicated to empowering tech startups across
              Africa. By accessing our website, utilizing our resources, and
              engaging with our services, you agree to comply with the following
              Terms and Conditions. Please read them attentively before
              proceeding:
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              1. Acceptance of Terms:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              Your usage of any of The Surge.tech's services constitutes an
              acknowledgment that you have carefully read, understood, and
              agreed to these Terms and Conditions. Should you disagree with any
              part of these terms, we kindly request that you refrain from using
              our services.
            </p>

            <h5 className="text-black-100 text-xl mt-10">2. Services:</h5>
            <p className="text-black-100 max-w-[1000px]">
              The Surge.tech is committed to revolutionizing the tech startup
              ecosystem in Africa by providing comprehensive support and
              resources. These include but are not limited to mentoring,
              networking events, workshops, access to industry experts, and
              online resources. Our services are primarily aimed at tech
              startups, entrepreneurs, and individuals contributing to the
              growth of the tech startup landscape in Africa.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              3. User Eligibility:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              By engaging with our services, you affirm that you are at least 18
              years old and possess the legal capacity to enter into a binding
              agreement. Our services are designed for users within Africa,
              particularly Nigeria.
            </p>

            <h5 className="text-black-100 text-xl mt-10">4. User Account:</h5>
            <p className="text-black-100 max-w-[1000px]">
              When creating an account with The Surge.tech, you are solely
              responsible for safeguarding the confidentiality of your account
              information and password. You agree to accept full responsibility
              for any activities occurring under your account.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              5. Code of Conduct:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              We hold all users to a high standard of professionalism and
              respect in their interactions within The Surge.tech ecosystem. Any
              form of harassment, discrimination, or inappropriate behavior
              towards other users or our team will not be tolerated.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              6. Intellectual Property:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              All content, resources, and materials provided by The Surge.tech
              are protected by intellectual property laws. Users are prohibited
              from reproducing, distributing, or utilizing these materials
              without prior written consent from The Surge.tech.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              7. Third-Party Links:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              Our website may contain links to third-party websites and
              resources for your convenience. However, The Surge.tech does not
              endorse or take responsibility for the content, accuracy, or
              availability of these external sites.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              8. Disclaimer of Warranties:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              While The Surge.tech strives for accuracy, we do not guarantee the
              completeness, reliability, or accuracy of any content or
              information on our website. Your usage of our services is entirely
              at your own risk.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              9. Limitation of Liability:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              In no event shall The Surge.tech or its affiliates be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising out of or connected to the use of our services.
            </p>

            <h5 className="text-black-100 text-xl mt-10">11. Governing Law:</h5>
            <p className="text-black-100 max-w-[1000px]">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of Nigeria. Any disputes arising from or
              relating to these terms will be subject to the exclusive
              jurisdiction of the Nigerian courts
            </p>

            <h5 className="text-black-100 text-xl mt-10">12. Contact Us:</h5>
            <p className="text-black-100 max-w-[1000px]">
              For any inquiries or concerns regarding these Terms and
              Conditions, please reach out to us at{" "}
              <a href="mailto:info@thesurge.tech">info@thesurge.tech.</a>
            </p>

            <h5 className="text-black-100 text-xl mt-10">12. Contact Us:</h5>
            <p className="text-black-100 max-w-[1000px]">
              For any inquiries or concerns regarding these Terms and
              Conditions, please reach out to us at{" "}
              <a href="mailto:info@thesurge.tech">info@thesurge.tech.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
