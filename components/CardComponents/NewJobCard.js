import { useState } from "react";
import { useRouter } from "next/router";
import { FcRules, FcList } from "react-icons/fc";
import RIDropdownMenu from "../RIDropdownMenu";
import ProfileIcon from "../HomeAndLandingPages/ProfileIcon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewJobCard = (props) => {
  const [dropdownAddOns, setDropdownAddOns] = useState();
  const [dropdownStatus, setDropDownStatus] = useState();
  const router = useRouter();

  const workTypeColor = (workType) => {
    if (workType === "commission") {
      return (
        <span classNameName="block items-center text-center rounded-md h-7 px-2 pt-1 text-sm font-medium text-orange-700">
          Commission
        </span>
      );
    }
    if (workType === "monthly-basis") {
      return (
        <span classNameName="block items-center text-center rounded-md h-7 px-2 pt-1 text-sm font-medium text-indigo-900 ">
          Monthly
        </span>
      );
    }
    if (workType === "onetime") {
      return (
        <span classNameName="block items-center text-center rounded-md h-7 px-2 pt-1 text-sm font-medium text-blue-700">
          One-Time
        </span>
      );
    }

    if (workType === "contract") {
      return (
        <span classNameName="block items-center text-center rounded-md h-7  px-2  pt-1 text-sm font-medium text-green-700">
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
    if (status === "Submitted") {
      return "In Review";
    }
    if (status === "Disapproved") {
      return "Rejected";
    }
  };
  const statusDropDownMenuOptions = [
    {
      key: "1",
      option: "Manage Requirement",
      icon: "A",
      onClick: "/ClientRequirementDetail/",
    },

    {
      key: "2",
      option: "Close Posting",
      icon: "B",
      onClick: "Close Posting",
    },
    {
      key: "2",
      option: "Share on Social",
      icon: "B",
      onClick: "Share on Social",
    },
    {
      key: "4",
      option: "Copy link",
      icon: "B",
      onClick: "copy",
    },
  ];
  const addOnType = (type) => {
    if (type === "Feature") {
      return (
        <div classNameName="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <img
            src="/application_detail/featured.svg"
            alt="featured"
            // classNameName={classNamees.addonNameIcon}
            title="featured"
            loading="lazy"
            width={20}
            height={20}
          />

          <span classNameName="text-sm font-semibold"> {"Featured"}</span>
        </div>
      );
    }
    if (type === "Urgent") {
      return (
        <div classNameName="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <img
            src="/application_detail/Urgent.svg"
            alt="urgent"
            classNameName=""
            title="urgent"
            loading="lazy"
            width={20}
            height={20}
          />

          <span classNameName="text-sm font-semibold"> {"Urgent"}</span>
        </div>
      );
    }
    if (type === "Project Manager") {
      return (
        <div classNameName="flex gap-2 border  w-40 justify-center items-center py-1 rounded-full">
          <FcRules classNameName="w-4 h-4" />
          <span classNameName="text-sm font-semibold">{"Project Manager"}</span>
        </div>
      );
    }
    if (type === "Non Disclosure Agreement") {
      return (
        <div classNameName="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <img
            src="/application_detail/NDA.svg"
            alt="NDA"
            classNameName=""
            title="NDA"
            loading="lazy"
            width={20}
            height={20}
          />
          <span classNameName="text-sm font-semibold"> {"NDA"}</span>
        </div>
      );
    }
    if (type === "Access Waitlist") {
      return (
        <div classNameName="flex gap-2 border  w-24 justify-center items-center py-1 rounded-full">
          <FcList classNameName="w-4 h-4" />
          <span classNameName="text-sm font-semibold"> {"Pro"}</span>
        </div>
      );
    }
  };

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31537000);

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
    interval = Math.floor(seconds / 3700);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  const applied = (applied, RequirementID) => {
    if (applied >= 1) {
      return (
        <div className="">
          <div className="font-bold text-lg text-emerald-400">
            Top {applied}
          </div>
          <a
            className="text-sm text-gray-500"
            href={
              process.env.PUBLIC_URL +
              "/clientRequirementDetail/" +
              RequirementID
            }
            target="_blank"
          >
            <span className={""}>Applications received</span>
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <div className="font-bold text-lg text-emerald-400">{`${applied}`}</div>
          <div className="text-sm text-gray-500 tracking-wide">
            Applications received
          </div>
        </div>
      );
    }
  };

  const waitList = (waitListData, RequirementID) => {
    if (waitListData >= 1) {
      return (
        <div>
          <div>
            <div className="font-bold text-lg text-emerald-400">{`${waitListData}`}</div>
            <div className="text-sm text-gray-500 tracking-wide">Waitlist</div>
          </div>
          <a
            className="linkTag"
            href={"/clientrequirementdetail/" + RequirementID}
            target="_blank"
          >
            <span className={"text-blue-700"}> Unlock </span>
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <div className="font-bold text-lg text-emerald-400">{`${waitListData}`}</div>
          <div className="text-sm text-gray-500 tracking-wide">Waitlist</div>
        </div>
      );
    }
  };

  const mainSkillHandler = (skill) => {
    if (!skill.length) {
      return "Please select skill";
    } else {
      let firstSkill = skill[0];

      let mainSkill =
        firstSkill.Skill.charAt(0).toUpperCase() + firstSkill.Skill.slice(1);
      return mainSkill;
    }
  };

  const dropdownHandler = (type) => {
    if (type === "Addons") {
      setDropdownAddOns(!dropdownAddOns);
      setDropDownStatus(false);
    } else {
      setDropDownStatus(!dropdownStatus);
      setDropdownAddOns(false);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="sr-only">Recent props.jobDataSearch?</h2>
      <ul role="list" className="space-y-4">
        <li className="flex max-w-full flex-col items-start justify-between border border-gray-300 rounded-lg">
          <div className="flex justify-between max-w-full w-full p-2 pb-0">
            <div className="flex items-center gap-x-4 text-xs">
              <div className="text-sm font-semibold text-white bg-cyan-500 p-2 py-1.5 rounded-md">
                {props.data.FreelancerPolicy}
              </div>
              <div
                /*    className={`${classes.workType} ${classes[workTypeColor(item.RequirementType)]
                    }`} */
                className={classNames(
                  "font-bold",
                  workTypeColor(props.data.RequirementType)
                )}
              >
                {workTypeColor(props.data.RequirementType)}
              </div>
            </div>

            <div className="flex space-x-2 items-center text-lg font-bold">
              <span className="text-emerald-700 text-sm">
                {statusHandler(props.data.Status)}
              </span>

              <RIDropdownMenu
                status={props.data.Status}
                Title={props.data.Title}
                requirementType={props.data.RequirementType}
                dropdownType={"Profile"}
                optionData={statusDropDownMenuOptions}
                RequirementID={props.data.RequirementID}
                onClick={() => props.ClosePost(props.data.RequirementID)}
              />
            </div>
          </div>
          <div className="group relative px-2 max-w-auto w-full">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
              {/*   <a href="#">
                <span className="absolute inset-0"></span>
                {props.data.Title}
              </a> */}

              {props.data.Status == "Draft" ? (
                <a href="/par-stepfirst">
                  {/* <span className="absolute inset-0"></span> */}
                  {mainSkillHandler(props.data.Skills)}
                </a>
              ) : (
                <a
                  href={"/clientrequirementdetail/" + props.data.RequirementID}
                  target="_blank"
                >
                  {/* <span className="absolute inset-0"></span> */}
                  {mainSkillHandler(props.data.Skills)}
                </a>
              )}
            </h3>
            <div className="flex justify-between items-center flex-wrap">
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-700">
                {/*   <a href="#">
                <span className="absolute inset-0"></span>
                {props.data.Title}
              </a> */}

                {props.data.Status == "Draft" ? (
                  <a href="/par-stepfirst">
                    {/* <span className="absolute inset-0"></span> */}
                    {props.data.Title}
                  </a>
                ) : (
                  <a
                    href={
                      "/clientrequirementdetail/" + props.data.RequirementID
                    }
                    target="_blank"
                  >
                    {/* <span className="absolute inset-0"></span> */}
                    {props.data.Title}
                  </a>
                )}
              </p>
              <div>
                {props.data?.RequirementApplication?.length ? (
                  <div className="">
                    <ProfileIcon
                      appliedUser={props.data.RequirementApplication}
                      FirstName={"Swapnil"}
                      LastName={"Cha"}
                      type={"freelancerProfiles"}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="mt-4">
                <ul
                  role="list"
                  className="list-none grid grid-cols-3 gap-2 text-sm text-center"
                >
                  <li className="text-gray-400">
                    <span>
                      <div className="font-bold text-lg text-emerald-400">
                        {props.data.Proposal.length}
                      </div>
                      <div className="text-sm text-gray-500">Proposals</div>
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-700">
                      {applied(props.data.Applied, props.data.RequirementID)}
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      {waitList(props.data.WaitList, props.data.RequirementID)}
                    </span>
                  </li>
                  {/* <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li> */}
                </ul>
              </div>

            <div className="mt-4">
              {/* <h3 class="text-sm font-medium text-gray-900">Skills</h3> */}
              <ul className="flex flex-wrap space-x-1.5 space-y-1">
                {props.data.Skills &&
                  props.data.Skills.slice(0, 4).map((item, i) => {
                    return (
                      <li
                        className={
                          "rounded-full text-xs bg-gray-100 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-200"
                        }
                      >
                        {item.Skill.charAt(0).toUpperCase() +
                          item.Skill.slice(1)}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="">
              {/* <h3 class="text-sm font-medium text-gray-900">Highlights</h3> */}

              
            </div>
          </div>
          <div className="relative mt-4  bg-slate-100 rounded-b-lg px-2 py-1 pt-1 flex items-center justify-between w-full">
            <div className="flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <time
                  datetime={timeSince(new Date(props.data.UpdatedDate))}
                  className="text-gray-600"
                >
                  {timeSince(new Date(props.data.UpdatedDate))} ago
                </time>
              </div>
            </div>
            <div className="flex items-center">
              {props.data?.AvailableAddons?.length > 0 && (
                <>
                  <div className="flex">
                    <div>
                      {props.data?.AvailableAddons?.length > 0 ? (
                        <span className="font-medium text-sm text-gray-700">
                          {props.data.AvailableAddons[0].AddonName +
                            "-" +
                            "₹" +
                            props.data.AvailableAddons[0].AddonAmount}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <RIDropdownMenu
                    optionData={props.data.AvailableAddons}
                    dropdownType={"Addons"}
                    RequirementID={props.data.RequirementID}
                  />
                </>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NewJobCard;
