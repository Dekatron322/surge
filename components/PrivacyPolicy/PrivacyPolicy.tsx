"use client";
import React, { useState } from "react";
import { MdForward } from "react-icons/md";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("privacy");
  const [hoveredSection, setHoveredSection] = useState(null);
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
              className={`text-primary-blue text-xl transition ease-in-out delay-150 ${
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
              Privacy Policy
            </h2>
            <p className="pt-4 pb-4 text-black-100 max-w-[1000px]">
              Protecting your privacy is of the utmost importance to us at The
              Surge.tech. This Privacy Policy outlines how we collect, use,
              share, and safeguard your personal information when you engage
              with our website and services. By accessing our website and using
              our services, you agree to the practices described in this policy.
              Please take a moment to familiarize yourself with the following
              information:
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              1. Information We Collect:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              We collect information you provide directly to us, such as when
              you create an account, fill out forms, or interact with our
              services. This may include your name, email address, company
              information, and other relevant details. Additionally, we collect
              information automatically when you access or use our website,
              including IP address, browser type, and usage patterns.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              2. How We Use Your Information:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              We use the information we collect to provide and improve our
              services, personalize your experience, communicate with you,
              conduct research, and offer relevant content. We may also use your
              information to send you updates, newsletters, and marketing
              communications if you have opted to receive them.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              3. Sharing of Your Information:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes. However, we may share your
              information with trusted partners and service providers who assist
              us in delivering our services. We may also share your information
              in compliance with legal obligations or to protect our rights and
              the rights of others.
            </p>

            <h5 className="text-black-100 text-xl mt-10">4. Data Security:</h5>
            <p className="text-black-100 max-w-[1000px]">
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, loss,
              misuse, alteration, or disclosure. Despite our best efforts, no
              data transmission over the internet is completely secure, and we
              cannot guarantee the security of your information.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              5. Cookies and Tracking Technologies:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              We use cookies and similar tracking technologies to collect
              information about your interactions with our website. You can
              manage your cookie preferences through your browser settings, but
              please note that disabling cookies may limit your access to
              certain features of our website.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              6. Third-Party Links
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              Our website may contain links to third-party websites and
              resources. These third parties have their own privacy policies,
              and we are not responsible for their practices. We encourage you
              to review their privacy policies before providing any personal
              information.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              7. Children's Privacy:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we may have inadvertently collected information from a
              child, please contact us so that we can promptly delete it.
            </p>

            <h5 className="text-black-100 text-xl mt-10">8. Your Choices:</h5>
            <p className="text-black-100 max-w-[1000px]">
              You have the right to access, update, or delete your personal
              information. You can also choose to opt out of receiving marketing
              communications from us. Please note that even if you opt out of
              marketing communications, we may still send you transactional or
              administrative messages related to your account.
            </p>

            <h5 className="text-black-100 text-xl mt-10">
              9. Changes to this Privacy Policy:
            </h5>
            <p className="text-black-100 max-w-[1000px]">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes
              through prominent notices on our website or by email.
            </p>

            <h5 className="text-black-100 text-xl mt-10">10. Contact Us:</h5>
            <p className="text-black-100 max-w-[1000px]">
              If you have any questions, concerns, or requests related to your
              privacy, please contact us at{" "}
              <a href="mailto:info@thesurge.tech">info@thesurge.tech.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
