import { useRouter } from "next/router";
import React from "react";
import Cookies from "js-cookie";

const Banner = (props) => {
  const router = useRouter();
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-2">
        <div className=" px-6 pt-4 sm:pt-12 pb-8 lg:pb-24   lg:col-span-6 lg:px-4    xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="hidden md:block mt-4 text-center md:text-start text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">
                Hire Expert Freelancers
              </span>

              {/* <span className="block  sm:mt-1.5">
                        {"props.pageData.mainPunchLineB"}
                    </span> */}
            </h1>
            <h2 className="md:hidden mt-4 text-center md:text-start text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">
                India's leading secure and flexible platform to hire
                remote freelancers
              </span>

              {/* <span className="block  sm:mt-1.5">
                        {"props.pageData.mainPunchLineBMobile"}
                    </span> */}
            </h2>
            <p className="hidden md:block mx-auto mt-3 md:text-start text-center max-w-md text-base text-gray-900   md:mt-5 md:max-w-2xl  ">
              India's leading secure and flexible platform for remote
              freelancers
            </p>
            {/* <p className="md:hidden mx-auto mt-3 md:text-start text-center max-w-md text-base text-gray-900   md:mt-5 md:max-w-2xl  ">
                    {"props.pageData.mainSecLineMobile"}
                </p> */}
            <div className="mt-6 sm:flex  items-center gap-x-6">
              <div className="flex justify-center">
                <div
                  onClick={()=>props.UserLoggedIn ? router.push("/par-stepfirst") : (router.push("/login"),Cookies.set("RedirectUrl", '/par-stepfirst'))}
                  className="bg-blue-500 cursor-pointer px-8 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Post Requirement
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-6 mx-8 lg:mr-8">
          <img
            className="h-full sm:h-[80%] w-full overflow-hidden rounded-lg"
            src="/assets/banners/how_to_hire_web_banner.webp"
            alt="Find_Remote_Hybrid_Onsite_Flexible_Work"
            title="Find_Remote_Hybrid_Onsite_Flexible_Work"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
