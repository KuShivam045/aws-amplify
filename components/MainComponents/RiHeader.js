import { useState } from "react";
import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BellIcon, ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  FolderIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { FcSearch } from "react-icons/fc";
import { AiFillHome, AiOutlinePoweroff, AiOutlineSearch } from "react-icons/ai";
import { MdDashboard, MdOutlineNotifications, MdListAlt } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import LogoutModal from "../ModalComponents/LogoutModal";
import { useRouter } from "next/router";
import RedirectFreelancer from "../ModalComponents/RedirectFreelancer";
import { encodeAndSendToChat } from "../DashBoardComponents/ProposalDetails";
import Cookies from "js-cookie";

const RiHeader = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "How to Hire", href: "/how-to-hire-freelancer" },
    { name: "Explore Skills", href: "/skills" },
    { name: "Post a requirement", href: "/par-stepfirst" },
    { name: "Join as Freelancer", href: "#" }
  ];
  const AfterLoginnavigation = [
    { name: "Explore Skills", href: "/skills" },
    { name: "Post a requirement", href: "/par-stepfirst" },
  ];
  const AfterLoginnavigationMobile = [
    { name: "Home", href: "/" },
    { name: "Workplace", href: "/employer-workplace" },
    // { name: "Chat", href: "#" },
    { name: "Requirements", href: "/employer-workplace/my-job-posting" },
    { name: "Explore Skills", href: "/skills" },
    { name: "Profile", href: "/employer-workplace/my-profile" },
    { name: "Post a requirement", href: "/par-stepfirst" },
  ];
  const BeforeLoginnavigation = [
    { name: "Home", href: "/" },
    { name: "How to Hire", href: "/how-to-hire-freelancer" },
    { name: "Workplace", href: "/employer-workplace" },
    { name: "Explore Skills", href: "/skills" },
    { name: "Post a requirement", href: "/par-stepfirst" }
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className=" bg-white z-20 sticky top-0 drop-shadow-md">
      {showModal && (
        <LogoutModal showModal={showModal} setShowModal={setShowModal} />
      )}

      <RedirectFreelancer modalOpen={openModal} setModalOpen={setOpenModal} href="https://freelancer.rozgaarindia.com/signup"/>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-2 lg:px-6 lg:py-4 bg-white"
        aria-label="Global"
      >
        <div className="flex items-center gap-2">
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <a href="/" className="">
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 lg:h-10 mt-1 w-auto mr-6"
              src="/assets/IPassets/Rozgaar_Black_Logo.svg"
              alt="Rozgaar_India_Logo"
              width={150}
              height={60}
              loading="lazy"
              title="Rozgaar_India_Logo"
            />
          </a>
          {props.userLoggedIn ? (
            <div className="hidden lg:flex lg:gap-x-6">
              {AfterLoginnavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={()=>item.name==="Post a requirement"&&Cookies.set("RedirectUrl","/par-stepfirst")}
                  className="text-base font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          ) : (
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e)=> {item.name === "Join as Freelancer" && (e.preventDefault(), setOpenModal(true));item.name==="Post a requirement"&&Cookies.set("RedirectUrl","/par-stepfirst")}}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* {!props.UserLoggedIn &&<div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>} */}
        <div className="border-l lg:border-slate-900/15 pl-3">
        {!props.userLoggedIn ? (
          <div className="flex items-center lg:px-6"
          >
          <a href="/login">Sign in</a>
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-2 lg:px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-4 lg:ml-8"
            href="/join"
          >
            <span>
              Sign Up 
              {/* <span aria-hidden="true">→</span> */}
            </span>
          </a>
        </div>
        ) : (
          <div className="relative">
            <div className="flex lg:flex items-center gap-5 pl-8">
              <ChatBubbleLeftIcon
                className="hidden lg:block h-5 w-5 text-gray-500 cursor-pointer"
                aria-hidden="true"
                onClick={() => {
                  encodeAndSendToChat(Cookies.get("Client_userID"));
                }}
              />
              <a
              href="/employer-workplace/notification"
              >
                <BellIcon
                className="hidden lg:block h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
                </a>
              <div>
                <button
                  type="button"
                  class="flex items-center"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full">
                    {props.profile === undefined ||
                      props.profile === "" ||
                      props.profile === null ? (
                      <span className="bg-gray-200 h-10 w-10 border border-gray-300 rounded-full font-medium leading-none text-black flex items-center justify-center">
                        {props.firstName?.charAt(0).toUpperCase() +
                          " " +
                          props.lastName?.charAt(0).toUpperCase()}
                      </span>
                    ) : (
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full border border-gray-300"
                          src={props.profile}
                          alt={props.firstName + " " + props.lastName}
                          title={props.firstName + " " + props.lastName}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </span>

                  <svg
                    className="mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {showMenu && (
              <div
                className="absolute right-0 z-30 mt-1 w-56 origin-top-right rounded-md  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <nav className="mt-1 flex-1 space-y-1 px-2">
                  <div>
                    <a
                      href="/employer-workplace"
                      className={classNames(
                        "text-black hover:text-gray-700 hover:bg-gray-200  hover:bg-opacity-75 text-sm",
                        "group flex items-center px-2 py-2 text-sm  hover:rounded-md mb-1 border-1 border-b"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <MdDashboard />
                        <div>Work Place </div>
                      </div>
                    </a>
                    <a
                      href="/employer-workplace/my-job-posting"
                      className={classNames(
                        "text-black hover:text-gray-700 hover:bg-gray-200 hover:bg-opacity-75 text-sm",
                        "group flex items-center px-2 py-2 text-sm  hover:rounded-md mb-1 border-1 border-b"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <MdListAlt />
                        <div>Requirements</div>
                      </div>
                    </a>
                    <a
                      href="/employer-workplace/my-profile"
                      className={classNames(
                        "text-black hover:text-gray-700 hover:bg-gray-200 font-normal hover:bg-opacity-75",
                        "group flex items-center px-2 py-2 text-sm font-medium hover:rounded-md mb-1 border-1 border-b"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <IoIosPerson />
                        <div>Profile</div>
                      </div>
                    </a>

                    <div
                      onClick={() => {
                        setShowMenu(false);
                        setShowModal(true);
                      }}
                      className={classNames(
                        "cursor-pointer text-black hover:text-gray-700 hover:bg-gray-200 font-normal hover:bg-opacity-75",
                        "group flex items-center px-2 py-2 text-sm font-medium hover:rounded-md mb-1 border-1 border-b"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <AiOutlinePoweroff />
                        <div>Logout</div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-30  overflow-y-auto bg-white shadow-lg w-[80%]   sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
         {!props.userLoggedIn&& <div className="flex justify-between bg-blue-500 py-4 px-4">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/assets/IPassets/Rozgaar_Black_Logo.svg"
                alt="Rozgaar_India_Logo"
                width={150}
                height={60}
                loading="lazy"
                title="Rozgaar_India_Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white cursor-pointer" aria-hidden="true" />
            </button>
          </div>}
          <div className="flow-root ">
            <div className="">
              {props.userLoggedIn ? (
                <>
                  <div className="">
                    <div className="bg-blue-500 py-6 px-6">
                      <div
                        className="flex justify-end"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </div>
                      <div
                        class="flex items-center gap-4"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        <span className="inline-flex h-20 w-20 items-center justify-center rounded-full">
                          {props.profile === undefined ||
                            props.profile === "" ||
                            props.profile === null ? (
                            <span className="bg-gray-200 h-20 w-20 border border-gray-300 rounded-full font-medium leading-none text-black flex items-center justify-center">
                              {props.firstName?.charAt(0).toUpperCase() +
                                " " +
                                props.lastName?.charAt(0).toUpperCase()}
                            </span>
                          ) : (
                            <div>
                              <img
                                className="inline-block h-20 w-20 rounded-full border border-gray-300"
                                src={props.profile}
                                alt={props.firstName + " " + props.lastName}
                                title={props.firstName + " " + props.lastName}
                                loading="lazy"
                              />
                            </div>
                          )}
                        </span>
                        <div className="">
                          <div className="text-base font-semibold text-white">
                            {props.firstName.toUpperCase() +
                              " " +
                              props.lastName.toUpperCase()}
                          </div>
                          <a
                            className="text-sm font-semibold text-black hover:text-blue-600 border-b-2 "
                            href="/employer-workplace/my-profile"
                          >
                            Update Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 py-6 px-6">
                    {AfterLoginnavigationMobile.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={()=>item.name==="Post a requirement"&&Cookies.set("RedirectUrl","/par-stepfirst")}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  {/* <div
                    className="flex justify-end mt-4 mr-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </div> */}
                  <div className="space-y-2 px-3">
                    {BeforeLoginnavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={()=>item.name==="Post a requirement"&&Cookies.set("RedirectUrl","/par-stepfirst")}
                        className="-mx-3 block rounded-lg px-6 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {props.userLoggedIn ? (
                <div
                  className="px-6 border-t pt-8 text-base font-semibold"
                  onClick={() => setShowModal(true)}
                >
                  Logout
                </div>
              ) : (
                <div className="mt-8 border-t py-8 px-6">
                  <div className="">
                    <a
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log In
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="/join"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default RiHeader;
