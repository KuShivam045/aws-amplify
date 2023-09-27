import { useRouter } from "next/router";
import React from "react";

const NewRequirementCard = (props) => {
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
        <span className="hidden break-all sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#fea11b] ">
          Commission
        </span>
      );
    }
    if (workType === "monthly-basis") {
      return (
        <span className="hidden break-all sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#125552] ">
          Monthly
        </span>
      );
    }
    if (workType === "onetime") {
      return (
        <span className="hidden break-all sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#365aa9] ">
          One-Time
        </span>
      );
    }

    if (workType === "contract") {
      return (
        <span className="hidden break-all sm:block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-[#486a31] ">
          Contract
        </span>
      );
    }
  };
  const companyName = (firstName, lastName) => {
    return (
      firstName.charAt(0).toUpperCase() +
      firstName.slice(1) +
      " " +
      lastName.charAt(0).toUpperCase()
    );
  };
  const mainSkillHandler = (skill) => {
    if (!skill.length) {
      return "NO Skill";
    } else {
      let firstSkill = skill[0];

      let mainSkill =
        firstSkill.Skill.charAt(0).toUpperCase() + firstSkill.Skill.slice(1);
      return mainSkill;
    }
  };
  const budget = (currency, budget, unit, workType) => {
    return (
      <>
        {currency}
        {budget}
        {workType === "onetime" ? (
          <></>
        ) : (
          <strong class="font-semibold text-sm text-black before:content-['/']">
            {unit}
          </strong>
        )}
      </>
    );
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
    <div className="bg-white" key={props.key}>
      <div className=" ">
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
          target="_blank"
          className="flex flex-col items-start justify-between bg-white border p-6 rounded-2xl w-full shadow-lg transition-all duration-200 hover:shadow-[0_1px_20px_1px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-center gap-x-2 text-sm -ml-2">
            <div className="relative z-10 rounded-full bg-[#3db2be] px-3 py-1.5 font-medium text-white hover:bg-gray-100 hover:text-gray-700">
              {props.data.FreelancerPolicy}
            </div>
            <div className="text-sm font-semibold">
              {workTypeColor(props.data.RequirementType)}
            </div>
          </div>
          <div className="group relative h-12">
            <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600 line-clamp-1">
              {mainSkillHandler(props.data.Skills)}
            </h3>
            <p className="truncate text-base leading-6 text-gray-600 w-[200px]">
              {props.data.IsCompany === "0"
                ? companyName(props.data.FirstName, props.data.LastName)
                : props.data.CompanyName}
            </p>
          </div>
          <div className="mt-6">
            <div className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600 line-clamp-1 h-screen max-h-16">
              {props.data.Title}
            </div>
            <div className="flex items-center gap-2 -pl-3 mt-3">
              <div className="text-sm bg-green-100 w-16 text-center text-green-600 rounded-md py-1 px-2  ">
                {statusHandler(props.data.Status)}
              </div>
              <div className="text-sm font-normal italic text-gray-700">
                {timeSince(
                  new Date(props.data.UpdatedDate || props.data.UpdatedAt)
                )}
                &nbsp; ago
              </div>
            </div>
            <div className="text-lg font-semibold py-3">
              {budget(
                props.data.BudgetCurrency,
                props.data.Budget,
                props.data.BudgetUnit,
                props.data.RequirementType
              )}
            </div>
            <p className="mt-4">
              <a
                className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-indigo-500 bg-indigo-100 p-1.5 rounded-md hover:text-indigo-600"
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
                target="_blank"
              >
                Read more
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 relative top-px -mr-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NewRequirementCard;
