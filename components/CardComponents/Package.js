import React from "react";
import { useRouter } from "next/router";
const Package = (props) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-md p-4 border border-gray-300 rounded-lg my-4">
      {props?.freelancerPackage && (
        <div>
          <div className="text-xl font-bold">
            {props?.freelancerPackage?.ActivePackage?.Packagename ? (
              props?.freelancerPackage?.ActivePackage?.Packagename
            ) : (
              <a href="/freelancerpackage" className="text-xl font-bold">
                GET STARTED
              </a>
            )}{" "}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm leading-6 text-gray-600">Current Package</div>

            <div className="text-base font-semibold">
              {props?.freelancerPackage?.AvailableCredit
                ? props?.freelancerPackage?.AvailableCredit
                : "0"}
              {props.freelancerPackage?.AvailableCredit < 2 ? (
                <span className="text-sm"> Credit left</span>
              ) : (
                <span className="text-sm"> Credits left</span>
              )}
            </div>
          </div>
        </div>
      )}
      {/* <ActionButton
        buttonText="Upgrade Plan"
        buttonType={"small"}
        onClick={() => { navigate('/FreelancerPackage') }}
      /> */}
      <div
        className="mt-4 mb-2"
        onClick={() => {
          router.push("/freelancerpackage");
        }}
      >
        <button
          className="w-full flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default Package;
