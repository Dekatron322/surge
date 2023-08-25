"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={() => {
          handleClick;
        }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        data-aos-delay="550"
      >
        <span className="`flex-1">{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
