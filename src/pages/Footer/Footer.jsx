import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import footerLogo from "../../assets/logoBitcoinnano.png";

import FooterButton from "./FooterButton.jsx";

export default function Footer() {
  // const year = new Date().getFullYear();

  return (
    <div>
      <div className="w-full flex  gap-x-4 sm:flex-row sm:gap-0     items-end bg-[#454545] min-h-32">
        <div className=" sm:flex justify-between  items-center w-full px-12  py-8">
          <div className=" flex flex-col gap-2">
            {/*  <img
            src={footerLogo}
            className="max-w-32 min-w-32"
            alt="footer_logo"
            title="footer-logo"
          /> */}

            <img
              className="text-white font-bold text-xl w-[200px]  min-w-32 "
              alt="logo"
              src={footerLogo}></img>
            <p className="flex items-center text-white gap-x-1  text-sm ">
              <FaRegCopyright />
              2024-2043 Bitcoinnano. All Rights Reserved
            </p>
          </div>

          <div className="mt-4">
            <FooterButton></FooterButton>
          </div>
        </div>
      </div>
      {/* <NewsLetter></NewsLetter> */}
    </div>
  );
}
