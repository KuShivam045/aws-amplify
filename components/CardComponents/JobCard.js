import { useRouter } from "next/router";
import React from "react";
import { FcRules, FcList } from "react-icons/fc";

const JobCard = (props) => {
  const router = useRouter();

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };
  const addOnType = (type) => {
    if (type === "Feature") {
      return (
        <div className="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <img
            src="/application_detail/featured.svg"
            alt="featured"
            // className={classes.addonNameIcon}
            title="featured"
            loading="lazy"
            width={20}
            height={20}
          />

          <span className="text-sm font-semibold"> {"Featured"}</span>
        </div>
      );
    }
    if (type === "Urgent") {
      return (
        <div className="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <img
            src="/application_detail/Urgent.svg"
            alt="urgent"
            className=""
            title="urgent"
            loading="lazy"
            width={20}
            height={20}
          />

          <span className="text-sm font-semibold"> {"Urgent"}</span>
        </div>
      );
    }
    if (type === "Project Manager") {
      return (
        <div className="flex gap-2 border  w-40 justify-center items-center py-1 rounded-full">
          <FcRules className="w-4 h-4" />
          <span className="text-sm font-semibold"> {"Project Manager"}</span>
        </div>
      );
    }
    if (type === "Non Disclosure Agreement") {
      return (
        <div className="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <img
            src="/application_detail/NDA.svg"
            alt="NDA"
            className=""
            title="NDA"
            loading="lazy"
            width={20}
            height={20}
          />
          <span className="text-sm font-semibold"> {"NDA"}</span>
        </div>
      );
    }
    if (type === "Access Waitlist") {
      return (
        <div className="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <FcList className="w-4 h-4" />
          <span className="text-sm font-semibold"> {"Pro"}</span>
        </div>
      );
    }
  };
  const statusHandler = (status) => {
    if (status === "Pending") {
      return "Under Review";
    }
    if (status === "Draft") {
      return "Draft";
    }
    if (status === "Approved") {
      return "Active";
    }
    if (status === "Closed") {
      return "Closed";
    }
    if (status === "Disapproved") {
      return "Rejected";
    }
  };
  const workTypeColor = (workType) => {
    if (workType === "commission") {
      return (
        <span className="hidden break-all	 sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#fea11b] ">
          Commission
        </span>
      );
    }
    if (workType === "monthly-basis") {
      return (
        <span className="hidden break-all	 sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#125552] ">
          Monthly
        </span>
      );
    }
    if (workType === "onetime") {
      return (
        <span className="hidden break-all	 sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#365aa9] ">
          One-Time
        </span>
      );
    }

    if (workType === "contract") {
      return (
        <span className="hidden break-all	 sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#486a31] ">
          Contract
        </span>
      );
    }
  };
  const UrlType = (workType) => {
    if (workType === "commission") {
      return "commission";
    }
    if (workType === "monthly-basis") {
      return "monthly";
    }
    if (workType === "onetime") {
      return "one-time";
    }
    if (workType === "contract") {
      return "contract";
    }
  };
  return (
    <div className="bg-white ">
      <a 
      // href={"/requirementdetail/" + props.data.RequirementID}
      href={"/freelancer-" + UrlType(props.data.RequirementType) + "-job" + "/" + props.data.Title.replace(/[^a-zA-Z ]/g, " ").split('  ').join('-').split(" ").join('-').split("--").join("-") + "/" + props.data.RequirementID}
      target="_blank"
      >
        <div className=" bg-white shadow-lg border py-8 px-8 rounded-md w-full">
          <div className="flex items-center gap-x-2 text-sm -ml-2 mb-2">
            {/* <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time> */}
            <div className="relative z-10 rounded-full bg-[#3db2be] px-3 py-1.5 font-medium text-white hover:bg-gray-100">
              {props.data.FreelancerPolicy}
            </div>
            <div className="text-sm font-semibold">
              {workTypeColor(props.data.RequirementType)}
            </div>
          </div>
          <div className="group relative h-16">
            <div className="mt-2 text-lg font-semibold  text-gray-900 group-hover:text-gray-600 line-clamp-1">
              {props.data.Title.length> 26 ? (props.data.Title.slice(0,26)+ "..."): props.data.Title}
              {/* {props.data.Title.slice(0,40)}... */}
            </div>
            <p className="truncate text-base leading-6 text-gray-600 ">
              {props.data.CompanyName}
            </p>
          </div>
          {/* <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        
                         
                          {post.author.name}
                       
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div> */}
          <div className="mt-6">
            <div className="text-base font-semibold">
              {props.data.Skills &&
                props.data.Skills.slice(0, 1).map((item, i) => {
                  return (
                    <div className="text-base font-semibold">
                      {item.Skill.charAt(0).toUpperCase() + item.Skill.slice(1)}
                    </div>
                  );
                })}
            </div>
            <div className="flex items-center gap-2 -pl-3 mt-3">
              {" "}
              <div className="text-sm bg-green-100 w-16 text-center text-green-600 rounded-md py-1 px-2  ">
                {statusHandler(props.data.Status)}
              </div>
              <div className=" text-sm font-normal italic text-gray-700">
                {timeSince(
                  new Date(props.data.UpdatedDate || props.data.UpdatedAt)
                )}
                &nbsp; ago
              </div>
            </div>
            <div className="text-lg font-semibold py-3">
              {props.data.BudgetCurrency +
                "" +
                props.data.Budget +
                "/" +
                props.data.BudgetUnit}
            </div>
            <div className="w-full mx-auto">
              <a
                className="bg-blue-700 text-white text-center flex justify-center rounded-md py-2 text-sm font-semibold hover:bg-blue-500"
                /* onClick={() =>
                  router.push("/requirementdetail/" + props.data.RequirementID)
                } */
                href={"/freelancer-" + UrlType(props.data.RequirementType) + "-job" + "/" + props.data.Title.replace(/[^a-zA-Z ]/g, " ").split('  ').join('-').split(" ").join('-').split("--").join("-") + "/" + props.data.RequirementID
                }
                target="_blank"
              >
                <span className="inline-flex w-full justify-center">View</span>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default JobCard;
