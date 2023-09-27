import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import { FcSportsMode } from "react-icons/fc";

const NoApplication = (props) => {
  const router= useRouter()
  return (
    <div className="bg-white mx-auto px-6 rounded-lg border border-neutral-300/95 py-6">
      <div className="lg:w-[50%] mx-auto">
        <FcSportsMode size={"50px"} className="w-10 h-10 mx-auto" />
        <div className="text-base font-semibold text-center">{props.Text} </div>
        <div
          className="mt-4 mb-2"
           onClick={() => {props.UserLoggedIn?router.push("/par-stepfirst"):Cookies.set("RedirectUrl","/par-stepfirst")
            router.push("/login");
          }} 
        >
          <button
            className="w-full flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoApplication;
