import React from "react";

const HireType = () => {
  return (
    <div className=" bg-white  ">
      <h2 className="text-2xl lg:text-5xl font-semibold text-center">
        Work the way you want
      </h2>
      <h3 className="text-lg lg:text-xl font-semibold text-center mt-2">
        Find the right work for you, with great clients
      </h3>
      <div className="my-10 lg:my-14 flex lg:items-center gap-4 lg:gap-8 ">
        <div className="lg:text-right w-[130px] lg:w-full text-base lg:text-[30px] font-bold lg:leading-9">
          One Time
          <br />
          Task
        </div>
        <div className="border h-16  border-r-4 border-[#375ba7]"></div>
        <div className="text-sm lg:text-lg font-medium w-full">
          Work remotely for one-time gig
          <br />
          E.g Work as a graphic designer to create a logo for a client
        </div>
      </div>

      <div className="my-10 lg:my-14 flex lg:items-center gap-4 lg:gap-8 ">
        <div className="lg:text-right text-sm lg:text-lg font-medium w-full">
          Work as freelancer on monthly term
          <br />
          E.g Social Media handler to post for client everyday for 2 months
        </div>

        <div className="border h-16  border-r-4 border-[#1c5652]"></div>
        <div className=" w-[130px] lg:w-full text-base lg:text-[30px] font-bold lg:leading-9">
          Monthly

          <br />
          Basis
        </div>
      </div>
      <div className="my-10 lg:my-14 flex lg:items-center gap-4 lg:gap-8 ">
        <div className="lg:text-right w-[130px] lg:w-full text-base lg:text-[30px] font-bold lg:leading-9">
          Contract
          <br />
          Work
        </div>
        <div className="border h-16  border-r-4 border-[#4b6a35]"></div>
        <div className="text-sm lg:text-lg font-medium w-full">
          Work for a short-term or a long-term project
          <br />
          E.g React website developer to work on an E-commerce Project
        </div>
      </div>

      <div className="my-10 lg:my-14 flex lg:items-center gap-4 lg:gap-8 ">
        <div className="lg:text-right text-sm lg:text-lg font-medium w-full">
          Work as remote freelancer on commission
          <br />
          E.g POS agents for providing verified leads and earn on maturity
        </div>

        <div className="border h-16  border-r-4 border-[#1c5652]"></div>
        <div className=" w-[130px] lg:w-full text-base lg:text-[30px] font-bold lg:leading-9">
          Commission

          <br />
          Based
        </div>
      </div>
    </div>
  );
};

export default HireType;
