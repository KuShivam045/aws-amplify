import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const KycBox = (props) => {
  return (
    <div className="bg-white shadow-md p-4 border border-gray-300 rounded-lg">
      <div className="text-xl font-bold ">KYC</div>

      <div className="flex justify-between items-center">
        <div className="text-base leading-6 text-gray-600">
          You KYC status is
          {props.KycStatus === "Notstarted" ? "Unverified" : props.KycStatus}
        </div>
        <a href={"/kycform"}>
          <AiOutlineArrowRight className="h-6 w-6 hover:bg-blue-700 p-1" />
        </a>
      </div>
    </div>
  );
};

export default KycBox;
