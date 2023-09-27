import classes from "./LeftMenu.module.css";
import React, { useState, useRef, useEffect } from "react";
import {
  FcCustomerSupport,
  FcBriefcase,
  FcPositiveDynamic,
  FcSalesPerformance,
  FcSms,
  FcRules,
  FcClock,
  FcManager,
  FcRating,
  FcApprove,
} from "react-icons/fc";
// import { Link, useLocation } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi";
import { encodeAndSendToChat } from "../../pages/_app";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const LeftMenuDisabled = (props) => {
  const [optionSelected, setOptionSelected] = useState();
  const [userId, setUserId] = useState("");

  const router = useRouter();
  const pathname = router.asPath;

  //   const { pathname } = useLocation();
  useEffect(() => {
    if (Cookies.get("userID")) {
      setUserId(Cookies.get("userID"));
    }
  }, [pathname]);
  const menuOptions = (menu) => {
    props.option(menu);
  };

  return (
    <div>
      <div className="w-full lg:w-[200px] bg-white border pt-2 lg:border border-gray-300 shadow-md  lg:py-2 flex lg:flex-col overflow-x-scroll lg:overflow-hidden">
        <a
          href="/freelancerworkplace"
          className="text-[#171717] pointer-events-none"
        >
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left pointer-events-none `}
          >
            {" "}
            <FcBriefcase className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div className="text-gray-400">Work Place</div>
          </div>
        </a>
        <a
          href="/workrequirementdashboard"
          className="text-[#171717] pointer-events-none"
        >
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left pointer-events-none `}
          >
            {" "}
            <FcRules className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div
              className="text-gray-400"
              onClick={() => {
                menuOptions("Revenue");
              }}
            >
              Find work
            </div>
          </div>
        </a>

        <a
          href="/myapplications"
          className="text-[#171717] pointer-events-none"
        >
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left pointer-events-none `}
          >
            {" "}
            <FcSalesPerformance className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div
              className="text-gray-400"
              onClick={() => {
                menuOptions("Revenue");
              }}
            >
              Applications
            </div>
          </div>
        </a>

        <a href="/income" className="text-[#171717] pointer-events-none">
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left pointer-events-none `}
          >
            {" "}
            <FcPositiveDynamic className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div
              className="text-gray-400"
              onClick={() => {
                menuOptions("Sales");
              }}
            >
              income
            </div>
          </div>
        </a>
        <a
          href={`${global.chatLink}/chat?senderId=${userId}`}
          onClick={(e) => {
            e.preventDefault();
            encodeAndSendToChat(userId);
          }}
          target="_blank"
          className="text-[#171717] pointer-events-none"
        >
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left pointer-events-none `}
          >
            {" "}
            <FcSms className="mx-auto lg:mx-0 lg:w-6 lg:h-6 mb-4 h-4 w-4  lg:mb-0" />
            <div
              className="text-gray-400"
              onClick={() => {
                menuOptions("Chat");
              }}
            >
              Chat
            </div>
          </div>
        </a>
        <a href="/notification" className="text-[#171717] pointer-events-none">
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left pointer-events-none `}
          >
            {" "}
            <FcClock className="mx-auto lg:mx-0 w-6 h-6 mb-2  lg:mb-0" />
            <div
              className="text-gray-400"
              onClick={() => {
                menuOptions("Notifications");
              }}
            >
              Notifications
            </div>
          </div>
        </a>
        <a href="/workprofile" className="text-[#171717] ">
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
              pathname === "/workprofiledd"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcManager className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div className="">Work Profile</div>{" "}
            <BiChevronDown className={classes.downIcon} size={20} />
          </div>
        </a>

        {(pathname === "/workprofile" ||
          pathname === "/personaldetails" ||
          pathname === "/professionandeducation" ||
          pathname === "/portfolio" ||
          pathname === "/companydetails") && (
          <div className={classes.subMenu}>
            <a href="/workprofile" className="text-[#171717] ">
              <div
                className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
                  pathname === "/workprofile"
                    ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                    : ""
                }`}
              >
                {" "}
                <div className="">Work Info</div>
              </div>
            </a>
            <a href="/personaldetails" className="text-[#171717] ">
              <div
                className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
                  pathname === "/personaldetails"
                    ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                    : ""
                }`}
              >
                {" "}
                <div className="">Personal Details</div>
              </div>
            </a>
            <a href="/professionandeducation" className="text-[#171717] ">
              <div
                className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
                  pathname === "/professionandeducation"
                    ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                    : ""
                }`}
              >
                {" "}
                <div className="">Profession & Education</div>
              </div>
            </a>

            <a href="/portfolio" className="text-[#171717] ">
              <div
                className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
                  pathname === "/portfolio"
                    ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                    : ""
                }`}
              >
                {" "}
                <div
                  className=""
                  onClick={() => {
                    menuOptions("portfolio");
                  }}
                >
                  Portfolio
                </div>
              </div>
            </a>
            <a href="/companydetails" className="text-[#171717] ">
              <div
                className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
                  pathname === "/companydetails"
                    ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                    : ""
                }`}
              >
                {" "}
                <div className="">Company Details</div>
              </div>
            </a>
          </div>
        )}

        <a href="/freelancerpackage" className="text-[#171717] ">
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
              pathname === "/freelancerpackage"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            {" "}
            <FcRating className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div
              className=""
              onClick={() => {
                menuOptions("Membership");
              }}
            >
              Membership
            </div>
          </div>
        </a>
        <a href="/kycform" className="text-[#171717] ">
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
              pathname === "/kycform"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            {" "}
            <FcApprove className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div
              className=""
              onClick={() => {
                menuOptions("KYC");
              }}
            >
              KYC
            </div>
          </div>
        </a>
        <a href="/dashboardcontact" className="text-[#171717] ">
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[140px] lg:w-full text-center lg:text-left  ${
              pathname === "/dashboardcontact"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            {" "}
            <FcCustomerSupport className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div className="/dashboardcontact">Contact support</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LeftMenuDisabled;
