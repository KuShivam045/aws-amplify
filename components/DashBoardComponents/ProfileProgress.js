import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ProfileProgress = (props) => {
  return (
    <div className="bg-white shadow-md p-4 border border-gray-300 rounded-lg my-4">
      <div className="">
        <div className="text-xl font-bold">My Earnings</div>
        <div className="flex justify-between items-center pt-4">
          <div className="text-xl font-semibold">₹{props.freelancerIncome}</div>
          <a href="/income">
            <div className="hover:bg-[#eab308]">
              <BsArrowRightShort size={32} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileProgress;
