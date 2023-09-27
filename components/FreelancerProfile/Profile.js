import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { FaEdit, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiFolderMusicFill, RiVideoFill, RiFolderFill } from "react-icons/ri";
import {
  Bars3Icon,
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import countryjsonwithflag from "../../JsonFiles/countryjsonwithflag.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const user = {
  name: "Tom Cook",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Teams", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "Directory",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: true,
  },
  { name: "Announcements", href: "#", icon: MegaphoneIcon, current: false },
  { name: "Office Map", href: "#", icon: MapIcon, current: false },
];
const secondaryNavigation = [
  { name: "Apps", href: "#", icon: SquaresPlusIcon },
  { name: "Settings", href: "#", icon: CogIcon },
];
const tabs = [
  // { name: "About", href: "#", current: true },
  { name: "Portfolio", href: "#", current: true },
  { name: "Certification", href: "#", current: false },
  { name: "Experience", href: "#", current: false },
  { name: "Education", href: "#", current: false },
];
const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl: "/assets/banners/FreelancerProfile.webp",
  about: `
      <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
      <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
    `,
  fields: {
    Phone: "(555) 123-4567",
    Email: "ricardocooper@example.com",
    Title: "Senior Front-End Developer",
    Team: "Product Development",
    Location: "San Francisco",
    Sits: "Oasis, 4th floor",
    Salary: "$145,000",
    Birthday: "June 8, 1990",
  },
};

const Profile = (props) => {
  const policy = props.workDetailData.isAvailable.split(",");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tab, setTab] = useState("Portfolio");

  const [countryFlag, setCountryFlag] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  useEffect(() => {
    countryjsonwithflag.forEach((item) => {
      if (item.country === props.profile.Country) setCountryFlag(item.flag);
    });
    {
      props.profile.SocialMedia &&
        props.profile.SocialMedia.forEach((obj) => {
          switch (obj.Name) {
            case "Website":
              setWebsite(obj.URL);
              break;
            case "Twitter":
              setTwitter(obj.URL);
              break;
            case "LinkedIn":
              setLinkedIn(obj.URL);
              break;
            default:
              break;
          }
        });
    }
  }, [props]);

  const MicLogo = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    );
  };

  const PortfolioFileView = (item) => {
    if (item.PortfolioType === "Image") {
      return (
        <div className="w-24 h-24 rounded-lg">
          <img
            src={
              typeof item.PortfolioURL === "object"
                ? URL.createObjectURL(item.PortfolioURL)
                : item.PortfolioURL
            }
            className="w-full h-full object-cover rounded-lg"
            alt="Portfolio_Image"
            title="Portfolio_Image"
            loading="lazy"
            width={100}
            height={100}
          />
        </div>
      );
    }
    if (item.PortfolioType === "Audio/Video") {
      return (
        <div className="p-5 rounded-lg bg-gray-200">
          <RiFolderMusicFill className="w-12 h-12" />
        </div>
      );
    }
    if (item.PortfolioType === "video") {
      return (
        <div className="">
          <RiVideoFill className="" size={30} />
        </div>
      );
    }
    if (item.PortfolioType === "Document") {
      return (
        <div className="p-5 rounded-lg bg-gray-200">
          <RiFolderFill className="w-12 h-12" />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-4 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <hr
                        className="my-5 border-t border-gray-200"
                        aria-hidden="true"
                      />
                      <div className="space-y-1 px-2">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="">
            <main className="relative z-0 flex-1 pb-8 focus:outline-none xl:order-last">
              <article>
                <div>
                  <div>
                    <img
                      className="h-32 w-full object-cover lg:h-auto max-h-52"
                      src={profile.coverImageUrl}
                      alt=""
                    />
                  </div>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-10 sm:-mt-20 sm:flex sm:items-end sm:space-x-5">
                      <div className="flex">
                        {props?.profile?.profilePicture ? (
                          <img
                            className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                            src={props?.profile.profilePicture}
                            alt={
                              props?.profile?.firstName +
                              " " +
                              props?.profile?.lastName
                            }
                          />
                        ) : (
                          <div className="h-32 w-32 bg-gray-100 rounded-full flex justify-center items-center text-2xl font-semibold">
                            {props?.profile?.firstName.charAt(0).toUpperCase() +
                              " " +
                              props?.profile?.lastName.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="lg:mt-10 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-4 lg:mt-10 min-w-0 flex-1 sm:hidden 2xl:block pl-2 ">
                          <h1 className="truncate text-2xl font-bold text-gray-900">
                            {props?.profile?.firstName +
                              " " +
                              props?.profile?.lastName}
                          </h1>
                          <div className="">
                          {props.aboutFreelancerData.skills.slice(0,1).map((item,index)=>{
                            return(
                              <div key={index} className="  text-base ">{item.Skills}</div>
                            )
                          })}
                        </div>
                          <div>
                            <div className="">
                              <div className="flex flex-shrink-0 space-x-3 mt-1">
                                <a target="_blank" href={website}>
                                  <FaGlobe
                                    size={22}
                                    className=""
                                    color="#0e76a8"
                                  />
                                </a>
                                <a target="_blank" href={twitter}>
                                  <FaTwitter
                                    size={22}
                                    className=""
                                    color="#00acee "
                                  />
                                </a>
                                <a target="_blank" href={linkedIn}>
                                  <FaLinkedin
                                    size={22}
                                    className=""
                                    color="#0e76a8"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                         

                          <div>
                            <button
                              type="button"
                              className="inline-flex justify-center items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              <img
                                className="mr-2"
                                src={countryFlag}
                                alt="Country_Flag"
                                title="Country_Flag"
                                loading="lazy"
                                width={28}
                                height={25}
                              />
                              <span>
                                {props?.profile.City}, {props?.profile.Country}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                      <div className="truncate text-2xl font-bold text-gray-900">
                        {props?.profile?.firstName +
                          " " +
                          props?.profile?.lastName}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8 lg:flex  gap-4 w-full">
                  <div className="mt-4 rounded border-2 border-gray-100 p-5 w-full lg:w-[70%]">
                    <div className="space-y-3 pt-1 pb-3 sm:space-y-3 sm:pt-0">
                      <div>
                        <h2 className="text-gray-900 font-bold text-2xl">
                          About me
                        </h2>
                        <p className="text-gray-700 leading-6 pt-2">
                      {props.aboutFreelancerData.description}
                    </p>
                      </div>
                      <div>
                        <h2 className="text-gray-900 font-bold text-2xl">
                         Skills
                        </h2>
                        <div className="flex flex-wrap my-2 gap-2">
                          {props.aboutFreelancerData.skills.map((item,index)=>{
                            return(
                              <div key={index} className="border border-gray-300 rounded-md p-1 text-sm ">{item.Skills}</div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                   

                  </div>
                  <div className="mt-4 rounded border-2 border-gray-100 p-5 lg:w-[30%]">
                    <div className="space-y-3 pt-1 pb-3 sm:space-y-6 sm:pt-0">
                      <div>
                        <h2 className="text-gray-900 font-bold text-2xl">
                          Available to work
                        </h2>
                        <div className="">
                          <div>
                            {policy.map((item) => (
                              <div>{item}</div>
                            ))}
                          </div>
                        </div>

                        <div className="">
                          <div className="text-lg text-gray-900 font-bold">
                            Interested In
                          </div>
                          {props.workDetailData.isMonthly === "1" && (
                            <>Monthly</>
                          )}
                          {props.workDetailData.isOnCommision === "1" && (
                            <>, On Commision</>
                          )}
                          {props.workDetailData.isContractual === "1" && (
                            <>, Contractual</>
                          )}
                          {props.workDetailData.isOneTime === "1" && (
                            <>, One Time</>
                          )}
                        </div>
                        <div className="">
                          <div className="text-gray-900 font-bold">
                            Languages
                          </div>
                          <div className="space-y-1">
                            {props.workDetailData.languages.map(
                              (item) => {
                                return <div>{item.Name}</div>;
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="border-b border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setTab(item.name);
                            }}
                            className={classNames(
                              item.name === tab
                                ? "border-pink-500 text-gray-900"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                            )}
                            aria-current={item.name ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
                  {/* {tab === "About" && (
                    <>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-8">

                        <div className="mt-4 rounded border-4 border-gray-100 p-5">
                          <div className="space-y-3 pt-1 pb-3 sm:space-y-6 sm:pt-0">
                            <div>
                              <h2 className="text-gray-900 font-bold text-2xl">
                                Available to work
                              </h2>
                              <div className="">
                                <div>
                                  {policy.map((item) => (
                                    <div>{item}</div>
                                  ))}
                                </div>
                              </div>

                              <div className="">
                                <div className="text-lg text-gray-900 font-bold">
                                  Interested In
                                </div>
                                {props.workDetailData.isMonthly === "1" && (
                                  <>Monthly</>
                                )}
                                {props.workDetailData.isOnCommision === "1" && (
                                  <>, On Commision</>
                                )}
                                {props.workDetailData.isContractual === "1" && (
                                  <>, Contractual</>
                                )}
                                {props.workDetailData.isOneTime === "1" && (
                                  <>, One Time</>
                                )}
                              </div>
                              <div className="">
                                <div className="text-gray-900 font-bold">
                                  Languages
                                </div>
                                <div className="space-y-1">
                                  {props.workDetailData.languages.map(
                                    (item) => {
                                      return <div>{item.Name}</div>;
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )} */}
                  {tab === "Portfolio" && (
                    <>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="mt-4 rounded border-4 border-gray-100 p-5">
                          <div className="space-y-3 pt-1 pb-3 sm:space-y-3 sm:pt-0">
                            <div>
                              <h2 className="text-gray-900 font-bold text-2xl">
                                Portfolio
                              </h2>
                            </div>
                          </div>

                          <p className="text-gray-700 leading-6 flex flex-wrap gap-4">
                            {props.menuAreaData.portfolio.length !== 0 &&
                              props.menuAreaData.portfolio.map(
                                (item, index) => {
                                  return PortfolioFileView(item);
                                }
                              )}
                          </p>
                        </div>

                      </div>
                    </>
                  )}
                  {tab === "Experience" && (
                    <>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="mt-4 rounded border-4 border-gray-100 p-5">
                          <div className="space-y-3 pt-1 pb-3 sm:space-y-3 sm:pt-0">
                            <div>
                              <h2 className="text-gray-900 font-bold text-2xl">
                                Experience
                              </h2>
                            </div>
                          </div>
                        </div>

                      </div>
                    </>
                  )}
                  {tab === "Education" && (
                    <>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="mt-4 rounded border-4 border-gray-100 p-5">
                          <div className="space-y-3 pt-1 pb-3 sm:space-y-3 sm:pt-0">
                            <div>
                              <h2 className="text-gray-900 font-bold text-2xl">
                                Education
                              </h2>
                            </div>
                          </div>
                          {props.menuAreaData.education.length > 0 &&
                            props.menuAreaData.education.map((item, idx) => {
                              return (
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                                  <div>
                                    <dt className="font-medium ">Degree</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                      {item.Degree}
                                    </dd>
                                  </div>
                                  <div>
                                    <dt className=" font-medium ">College</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                      {item.College}
                                    </dd>
                                  </div>
                                  <div>
                                    <dt className="font-medium">Year</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                      {item.Year?.substr(0, 4)}
                                    </dd>
                                  </div>
                                </dl>
                              );
                            })}
                          {/*   <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Full Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {(props?.Userprofile.FirstName ||
                                props?.Userprofile.LastName) && (
                                <div className="flex items-center">
                                  {props?.Userprofile.FirstName +
                                    " " +
                                    props?.Userprofile.LastName}
                                </div>
                              )}
                              
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {props?.Userprofile.Mobile}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {props?.Userprofile.IsEmailVerified === "1" ? (
                                <div className="flex items-center">
                                  {props?.Userprofile.Email}
                                  <span className="">
                                    <BsCheck size={22} color={"green"} />
                                  </span>
                                </div>
                              ) : (
                                props?.Userprofile.Email
                              )}
                              
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Job title
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {props?.Userprofile.JobTitle} 
                              
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Location
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                               {props?.Userprofile?.Address &&
                                props?.Userprofile.Address +
                                  "," +
                                  props?.Userprofile.State +
                                  "," +
                                  props?.Userprofile.Country +
                                  "," +
                                  props?.Userprofile.PinCode}
                              address asdkgjasd;l
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              User Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {props?.Userprofile.UserName && (
                                <div className="flex items-center">
                                  {props?.Userprofile.UserName}
                                </div>
                              )}
                              
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Source
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                               {props?.Userprofile?.Source &&
                                props?.Userprofile?.Source}
                              source
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Device
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {props?.Userprofile?.device &&
                                props?.Userprofile?.device}
                              
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Promo code
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                               {props?.Userprofile?.promocode &&
                                props?.Userprofile?.promocode}
                              
                            </dd>
                          </div>
                        </dl> */}
                        </div>

                      </div>
                    </>
                  )}
                  {tab === "Certification" && (
                    <>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="mt-4 rounded border-4 border-gray-100 p-5">
                          <div className="space-y-3 pt-1 pb-3 sm:space-y-3 sm:pt-0">
                            <div>
                              <h2 className="text-gray-900 font-bold text-2xl">
                                Certification
                              </h2>
                            </div>
                          </div>
                        </div>

                      </div>
                    </>
                  )}
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
