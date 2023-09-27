import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Tab = () => {
  // useEffect(() => {
  // document.getElementById(window.location.pathname).scrollIntoView({"block":'nearest'})
  // }, [])
  const router = useRouter();
  const pathname = router.asPath;
  const div = [
    {
      href: "/workprofile",
      title: "Work Profile",
      height: "25px",
    },
    {
      href: "/personaldetails",
      title: "Personal Details",
      height: "25px",
    },
    {
      href: "/professionandeducation",
      title: "Profession & Deducation",
      height: "25px",
    },
    {
      href: "/portfolio",
      title: "Protfolio",
      height: "25px",
    },
    {
      href: "/companydetails",
      title: "Company Details",
      height: "25px",
    },
  ];

  return (
    <div className="my-2">
      {/* <div className=' flex border border-gray-500 '>
        <a href='/workprofile' to="/workprofile"
                  className={(navData) =>
                    navData.isActive ? 'w-[90px] text-base font-semibold decoration-white border-b-2 border-[#1778f2] self-center  text-[#000]'
                    : 'text-base font-semibold decoration-white -center  text-[#000] w-[90px]'
                  }
                >Work Profile</a>
                 
        <a href='/personaldetails' to="/personaldetails"
                 className={(navData) =>
                    navData.isActive ? 'text-base font-semibold decoration-white border-b-2 border-[#1778f2] self-center  text-[#000]'
                    : 'text-base font-semibold decoration-white -center  text-[#000]'
                  }
                >Personal Details</a>
        <a href='/professionandeducation' to="/professionandeducation"
                 className={(navData) =>
                    navData.isActive ? 'text-base font-semibold decoration-white border-b-2 border-[#1778f2] self-center  text-[#000]'
                    : 'text-base font-semibold decoration-white -center  text-[#000]'
                  }
                >Profession & Education</a>
        <a href='/portfolio' to="/portfolio"
                  className={(navData) =>
                    navData.isActive ? 'text-base font-semibold decoration-white border-b-2 border-[#1778f2] self-center  text-[#000]'
                    : 'text-base font-semibold decoration-white -center  text-[#000]'
                  }
                >Portfolio</a>
        <a href="/companydetails" to="/companydetails"
                  className={(navData) =>
                    navData.isActive ? 'text-base font-semibold decoration-white border-b-2 border-[#1778f2] self-center  text-[#000]'
                    : 'text-base font-semibold decoration-white -center  text-[#000]'
                  }
                >Company Details</a>
    </div> */}
      <div className=" block lg:hidden sticky top-[57px] w-full hide-scroll-bar   overflow-x-scroll    ">
        <div className="flex  w-max overflow-hidden bg-yellow-500 px-[5%] ">
          <ul className="flex flex-nowrap pt-2 items-center ">
            {div.map((item, index) => {
              return (
                <a
                  href={item.href}
                  className={
                    item.href === pathname
                      ? "border-b-2 border-blue-600 mr-8 last:mr-0 pb-2"
                      : "mr-8 last:mr-0 pb-2"
                  }
                  key={index}
                >
                  {item.title}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
