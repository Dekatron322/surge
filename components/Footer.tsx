import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/contants";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const Footer = () => (
  <footer
    className="flex flex-col text-black-100  mt-5"
    style={{
      backgroundColor: "#1C0F1F",
      borderTop: "1px solid rgba(243, 243, 243, 0.2)",
    }}
  >
    <div className="flex max-md:flex-col flex-wrap justify-between md:gap-20 gap-16 sm:px-16 px-6 py-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/surgetech.png"
          alt="logo"
          width={150}
          height={24}
          className="object-contain"
        />
        <p className="object-base text-white-600">
          TheSurge.tech - Igniting <br /> Innovation in Tech Startups
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://x.com/thesurgetech?s=11&t=E5TjXTKMkglILrH7PNnVAQ"
            target="_blank"
          >
            <FaTwitterSquare className="text-white hover:text-[#9b7d9e] ease-in-out duration-500 text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/posts/the-surge-tech_surge-linkedin-activity-7105477137255575552-rz3f?utm_source=share&utm_medium=member_ios"
          >
            <BsLinkedin className="text-white hover:text-[#9b7d9e] ease-in-out duration-500 text-2xl" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <SiDiscord className="text-white hover:text-[#9b7d9e] ease-in-out duration-500 text-2xl" />
          </a>
        </div>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link key={link.title} href={link.url} className="text-white ">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div
      className="flex justify-center text-center items-center flex-wrap mt-10 sm:px-16 px-6 py-10"
      style={{
        backgroundColor: "#1C0F1F",
        borderTop: "1px solid rgba(243, 243, 243, 0.2)",
      }}
    >
      <p className="text-[#9b7d9e]">@2023 TheSurge. All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
