import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { FcRules, FcList } from "react-icons/fc";

const RequirementCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [imageWidth, setImageWidth] = useState(40);
  const [imageHeight, setImageHeight] = useState(40);

  const router = useRouter();

  const workTypeColor = (workType) => {
    if (workType === "commission") {
      return (
        <span className="block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#fea11b] ">
          Commission
        </span>
      );
    }
    if (workType === "monthly-basis") {
      return (
        <span className="block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#125552] ">
          Monthly
        </span>
      );
    }
    if (workType === "onetime") {
      return (
        <span className="block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#365aa9] ">
          One-Time
        </span>
      );
    }

    if (workType === "contract") {
      return (
        <span className="block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#486a31] ">
          Contract
        </span>
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
    <div className="mt-4">
      <h2 className="sr-only">Recent jobDataSearch</h2>
      <ul role="list" className="space-y-4">
        <li className="bg-white mb-6 pt-5 pb-4 px-4 border sm:rounded-lg sm:pt-5 sm:pb-5">
          <article
            aria-labelledby={
              "props.jobDataSearch?-title-" + "props.jobDataSearch?.JobId"
            }
          >
            <div className="lg:flex lg:justify-between">
              <div className="w-full lg:w-[60%] xl:w-[65%] sm:w-3/5">
                <div className="lg:hidden block">
                  <div className=" flex flex-shrink-0 px-2 pb-4">
                    {props.data.FreelancerPolicy ? (
                      <span className=" break-all	 sm:block items-center text-center rounded-md h-7 bg-purple-100 px-2  pt-1 text-sm font-medium text-purple-800 ">
                        {props.data.FreelancerPolicy}
                      </span>
                    ) : (
                      ""
                    )}
                    {props.data.RequirementType ? (
                      <span>{workTypeColor(props.data.RequirementType)}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(props.data.Addon || props.data.Addons) &&
                    (props.data.Addon
                      ? props.data.Addon
                      : props.data.Addons
                    ).map((item, index) => {
                      return (
                        <div className="" key={index}>
                          
                          {addOnType(item.AddonName)}
                        </div>
                      );
                    })}
                </div>
                <div className="text-lg font-semibold pt-2 px-2">
                  {props.data.Title}
                </div>
                <div className="text-sm font-normal px-2">
                  {props.data.CompanyName}
                </div>
                <div className="flex flex-wrap gap-2 my-3 pb-2">
                  {props.data.Skills &&
                    props.data.Skills.slice(0, 4).map((item, i) => {
                      return (
                        <div className="text-sm bg-gray-100  px-3 py-1 text-center rounded-full">
                          {item.Skill.charAt(0).toUpperCase() +
                            item.Skill.slice(1)}
                        </div>
                      );
                    })}
                </div>
                <div className="flex items-center gap-2">
                  
                  <div className="text-sm bg-green-100 w-16 text-center text-green-600 rounded-full py-1 px-2 mx-2 ">
                    {statusHandler(props.data.Status)}
                  </div>
                  <div className=" text-sm font-normal italic text-gray-700">
                    {timeSince(
                      new Date(props.data.UpdatedDate || props.data.UpdatedAt)
                    )}
                   <span className="ml-1"> ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="hidden lg:block">
                  <div className="flex    px-2">
                    {props.data.FreelancerPolicy ? (
                      <span className="hidden break-all	sm:block items-center text-center rounded-md h-7 bg-purple-100 px-2  pt-1 text-sm font-medium text-purple-800 ">
                        {props.data.FreelancerPolicy}
                      </span>
                    ) : (
                      ""
                    )}
                    {props.data.RequirementType
                      ? workTypeColor(props.data.RequirementType)
                      : ""}
                  </div>
                </div>
                <div className="text-lg font-semibold px-3 py-3">
                  {props.data.BudgetCurrency +
                    "" +
                    props.data.Budget +
                    "/" +
                    props.data.BudgetUnit}
                </div>
                <a
                href={
                  "/freelancer-" +
                  UrlType(props.data.RequirementType) +
                  "-job" +
                  "/" +
                  props.data.Title.replace(/[^a-zA-Z ]/g, " ")
                    .split("  ")
                    .join("-")
                    .split(" ")
                    .join("-")
                    .split("--")
                    .join("-") +
                  "/" +
                  props.data.RequirementID
                }
                  /* onClick={(e) =>
                   { e.preventDefault();
                    router.push(
                      "/requirementdetail/" + props.data.RequirementID
                    )}
                  } */
                  className="bg-blue-500 inline-flex w-full justify-center cursor-pointer text-gray-50 text-center rounded-md py-1 "
                >
                  View
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default RequirementCard;
