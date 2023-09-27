import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import classes from "./RequirementDetailArea.module.css";
import { FcRules, FcList } from "react-icons/fc";
// import RISkeletonLoading from "../RISkeletonLoading";
// import ActionButton from "../ActionButton";
import ActionButton from "../ButtonComponents/ActionButton";
import RISkeletonLoading from "../RISkeletonLoading";
import { useRouter } from "next/router";

const RequirementDetailArea = (props) => {
  // const [currentLocation, setCurrentLocation] = useState(window.location.href);
  const {asPath, pathname} = useRouter();
  const [currentLocation, setCurrentLocation] = useState(asPath);

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
  const UserName = (firstName, lastName) => {
    return (
      firstName.charAt(0).toUpperCase() +
      firstName.slice(1) +
      " " +
      lastName.charAt(0).toUpperCase()
    );
  };

  const addOnType = (type) => {
    if (type === "Feature") {
      return (
        <div className={classes.addonContainer}>
          <img
            src={"/assets/application_detail/featured.svg"}
            alt="Featured_Image"
            className={classes.addonNameIcon}
          />

          <span className={classes.AddonName}> {"Featured"}</span>
        </div>
      );
    }
    if (type === "Urgent") {
      return (
        <div className={classes.addonContainer}>
          <img
            src={"/assets/application_detail/Urgent.svg"}
            alt="Urgent_Image"
            className={classes.addonNameIcon}
          />

          <span className={classes.AddonName}> {"Urgent"}</span>
        </div>
      );
    }
    if (type === "Project Manager") {
      return (
        <div className={classes.addonContainer}>
          <FcRules className={classes.addonNameIcon} />
          <span className={classes.AddonName}> {"Project Manager"}</span>
        </div>
      );
    }
    if (type === "Non Disclosure Agreement") {
      return (
        <div className={classes.addonContainer}>
          <img
            src={"/assets/application_detail/NDA.svg"}
            alt="NDA_Image"
            className={classes.addonNameIcon}
          />
          <span className={classes.AddonName}> {"NDA"}</span>
        </div>
      );
    }
    if (type === "Access Waitlist") {
      return (
        <div className={classes.addonContainer}>
          <FcList className={classes.addonNameIcon} />
          <span className={classes.AddonName}> {"Pro"}</span>
        </div>
      );
    }
  };

  const changeData = (value) => {
    let chnagePTag = value.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "");
    let htmlDescription = chnagePTag.replace(/(\r\n|\r|\n)/g, "<br>");
    return htmlDescription;
  };

  return (
    <>
      {props.isLoading ? (
        <RISkeletonLoading loadingType={"RequirementDetailArea"} />
      ) : (
        <div className="p-4 border bg-white border-gray-300 rounded-lg">
          <div className={classes.timeSection}>
            {/*  <time className="text-gray-700">
              {timeSince(new Date(props.requirementDetail.UpdatedDate))} ago
            </time> */}
            <span className="bg-gray-100 text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
              </svg>
              <time>
                {timeSince(new Date(props.requirementDetail.UpdatedDate))} ago
              </time>
            </span>

            <div className={classes.ActionButton}>
              {!currentLocation.includes("clientRequirementDetail") && (
                <ActionButton
                  buttonText={"APPLY NOW"}
                  buttonType={"small"}
                  onClick={props.showModal}
                />
              )}
            </div>
          </div>
          <div className={classes.featuredListing}>
            {props.requirementDetail.Addons &&
              props.requirementDetail.Addons.map((item, index) => {
                return (
                  <div className={classes.tagFeatured}>
                    {addOnType(item.AddonName)}
                  </div>
                );
              })}
          </div>
          <div className={classes.displayTitleAndLogo}>
            <div className="text-lg font-bold mt-3">{props.requirementDetail.Title}</div>
            <div>
              {props.requirementDetail.IsCompany === "1" &&
              props.requirementDetail.CompanyLogo !== "" ? (
                <div>
                  <div className="w-24 h-24 mt-5">
                    <img
                      src={props.requirementDetail.CompanyLogo}
                      alt="Company_Logo"
                      className="border border-gray-200 rounded object-cover w-full h-full"
                      width={120}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
              {props.requirementDetail.IsCompany === "1" &&
              props.requirementDetail.CompanyName !== "" ? (
                <div className={classes.Comapany_Name}>
                  {props.requirementDetail.CompanyName}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>
            {UserName(
              props.requirementDetail.FirstName,
              props.requirementDetail.LastName
            )}
          </div>
          <div className={classes.dateAndPostTypeSection}>
            {((props.requirementDetail.FreelancerPolicy === "Onsite" ||
              props.requirementDetail.FreelancerPolicy === "Hybrid") &&
              props.requirementDetail.Country) ||
            props.requirementDetail.State ||
            props.requirementDetail.City ? (
              <div className="flex items-center">
                <FiMapPin size={15} /> &nbsp;
                <span className="inline-flex">
                  {props.requirementDetail.Country},
                  {props.requirementDetail.State},{props.requirementDetail.City}
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          {props.requirementDetail.DescriptionHTML ? (
            <div className="my-5 text-sm ">
              <span
                dangerouslySetInnerHTML={{
                  __html: changeData(props.requirementDetail.DescriptionHTML),
                }}
              />
            </div>
          ) : (
            <>
              <div className={classes.contentIndetail}>
                {props.requirementDetail.Description}
              </div>
            </>
          )}
          <div className="flex flex-wrap gap-2">
            {props.requirementDetail.Skills &&
              props.requirementDetail.Skills.map((item, i) => {
                return (
                  <div className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-1 rounded-full">
                    {item.Skill.charAt(0).toUpperCase() + item.Skill.slice(1)}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default RequirementDetailArea;
