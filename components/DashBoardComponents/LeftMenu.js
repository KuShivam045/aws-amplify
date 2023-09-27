import { useState, useRef, useEffect } from "react";
import {
  FcCustomerSupport,
  FcBriefcase,
  FcSms,
  FcRules,
  FcClock,
  FcManager,
  FcRating,
  FcApprove,
  FcViewDetails,
} from "react-icons/fc";
import { encodeAndSendToChat } from "../../pages/_app";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const LeftMenu = (props) => {
  const [optionSelected, setOptionSelected] = useState();
  const [userId, setUserId] = useState("");

  const refLocaction = useRef(null);
  const router = useRouter();
  const pathname = router.asPath;

  useEffect(() => {
    executeScroll();
    if (Cookies.get("userID")) {
      setUserId(Cookies.get("userID"));
    }
  }, [pathname]);
  const menuOptions = (menu) => {
    setOptionSelected(menu);
    props.option(menu);
  };
  const executeScroll = () => scrollToRef(refLocaction);
  const scrollToRef = (ref) =>
    window.scrollTo(
      0,
      pathname === "/employer-workplace" ||
        pathname === "/workrequirementdashboard" ||
        pathname === "/myapplications" ||
        pathname === "/income"
        ? 0
        : ref.current.scrollIntoView()
    );

  return (
    <div>
      <div className="w-full lg:w-[200px] bg-white border pt-2 lg:border border-gray-300 shadow-md rounded-lg lg:py-2 flex lg:flex-col hide-scroll-bar overflow-x-scroll lg:overflow-hidden">
        <a href="/employer-workplace" className="text-[#171717]">
          <div
            ref={refLocaction}
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center  w-[120px] lg:w-full text-center lg:text-left ${
              pathname === "/employer-workplace"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcBriefcase className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div className="">Work Place</div>
          </div>
        </a>
        <a href="/employer-workplace/my-job-posting" className="text-[#171717]">
          <div
            ref={refLocaction}
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center  w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/employer-workplace/my-job-posting"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcRules className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div
              className=""
              onClick={() => {
                menuOptions("Revenue");
              }}
            >
              Requirements
            </div>
          </div>
        </a>

        <a
          href={`${process.env.CHAT_URL}/chat?senderId=${userId}`}
          onClick={(e) => {
            e.preventDefault();
            encodeAndSendToChat(userId);
          }}
          target="_blank"
          className="text-[#171717]"
        >
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center  w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/chat"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcSms className="mx-auto lg:mx-0 lg:w-6 lg:h-6 mb-4 h-4 w-4  lg:mb-0" />
            <div
              className=""
              onClick={() => {
                menuOptions("Chat");
              }}
            >
              Chat
            </div>
          </div>
        </a>

        <a href="/employer-workplace/my-trasaction" className="text-[#171717]">
          <div
            ref={refLocaction}
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center  w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/employer-workplace/my-trasaction"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcViewDetails className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div
              className=""
              onClick={() => {
                menuOptions("Sales");
              }}
            >
              Transactions
            </div>
          </div>
        </a>

        <a href="/employer-workplace/notification" className="text-[#171717]">
          <div
            ref={refLocaction}
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center  w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/employer-workplace/notification"
                ? "text-[#1678f2] border-b-4 border-[#1678f2]  lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcClock className="mx-auto lg:mx-0 w-6 h-6 mb-2  lg:mb-0" />
            <div
              className=""
              onClick={() => {
                menuOptions("Notifications");
              }}
            >
              Notifications
            </div>
          </div>
        </a>
        <a href="/employer-workplace/my-profile" className="text-[#171717]">
          <div
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center  w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/employer-workplace/my-profile" || pathname === "/employer-workplace/company-information"
                ? "text-[#1678f2] border-b-4 border-[#1678f2] lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcManager className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div className="">Profile</div>
          </div>
        </a>

        <a href="/employer-workplace/hire-assistant" className="text-[#171717] border-t">
          <div
            ref={refLocaction}
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/employer-workplace/hire-assistant"
                ? "text-[#1678f2] border-b-4 border-[#1678f2] lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              height="18px"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0"
            >
              <path
                fill="#1565C0"
                d="M25,22h13l6,6V11c0-2.2-1.8-4-4-4H25c-2.2,0-4,1.8-4,4v7C21,20.2,22.8,22,25,22z"
              ></path>
              <path
                fill="#2196F3"
                d="M23,19H10l-6,6V8c0-2.2,1.8-4,4-4h15c2.2,0,4,1.8,4,4v7C27,17.2,25.2,19,23,19z"
              ></path>
              <g fill="#FFA726">
                <circle cx="12" cy="31" r="5"></circle>
                <circle cx="36" cy="31" r="5"></circle>
              </g>
              <g fill="#607D8B">
                <path d="M20,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z"></path>
                <path d="M44,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z"></path>
              </g>
            </svg>
            <div
              className=""
              onClick={() => {
                menuOptions("Membership");
              }}
            >
              Hire Assisstant
            </div>
          </div>
        </a>

        <a
          href="/employer-workplace/customer-support"
          className="text-[#171717]"
        >
          <div
            ref={refLocaction}
            className={`lg:px-4 lg:py-4 lg:flex lg:gap-2 items-center w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/employer-workplace/customer-support"
                ? "text-[#1678f2] border-b-4 border-[#1678f2] lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <FcCustomerSupport className="mx-auto lg:mx-0 w-6 h-6 mb-2 lg:mb-0" />
            <div>Contact support</div>
          </div>
        </a>
        <a
          href="/employer-workplace/how-to-hire-freelancer"
          className="text-[#171717]"
        >
          <div
            ref={refLocaction}
            className={`lg:px-4 lg:py-4 flex flex-col lg:flex-row gap-2 items-center w-[120px] lg:w-full text-center lg:text-left  ${
              pathname === "/employer-workplace/how-to-hire-freelancer"
                ? "text-[#1678f2] border-b-4 border-[#1678f2] lg:border-r-4 rounded-sm lg:border-b-0"
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#38bdf8"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <div
              className=""
              onClick={() => {
                menuOptions("KYC");
              }}
            >
              How to Hire
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LeftMenu;
