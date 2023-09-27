import React, { useState } from "react";
import classes from "./ApplicationDetail.module.css";
import { FcRules, FcList } from "react-icons/fc";
import ActionButton from "../ButtonComponents/ActionButton";
import RISkeletonLoading from "../RISkeletonLoading";
// import RISkeletonLoading from "../RISkeletonLoading";

const ApplicationDetail = (props) => {
  const [currentLocation, setCurrentLocation] = useState("");
  // const [currentLocation, setCurrentLocation] = useState(window.location.href)
  const budget = () => {
    return (
      <>
        {props.applicationDetails.Currency}
        {props.applicationDetails.PraposalAmount}/
        {props.applicationDetails.Unit}
      </>
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

    if (type === "Non Disclosure Agreement") {
      return (
        <div className={classes.addonContainer}>
          <img
            src={process.env.PUBLIC_URL + "/assets/application_detail/NDA.svg"}
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
  const applied = () => {
    if (props.applicationDetails.Applied >= 1) {
      return `Top ${props.applicationDetails.Applied} Applications received`;
    } else {
      return ` ${props.applicationDetails.Applied} Applications received`;
    }
  };
  const waitList = () => {
    if (props.applicationDetails.WaitList >= 1) {
      return `${props.applicationDetails.WaitList} on Waitlist. Unlock`;
    } else {
      return `${props.applicationDetails.WaitList} on Waitlist. `;
    }
  };

  const workTypeColor = (workType) => {
    if (props.applicationDetails.RequirementType === "commission") {
      return "Commission";
    }
    if (props.applicationDetails.RequirementType === "monthly-basis") {
      return "Monthly";
    }
    if (props.applicationDetails.RequirementType === "onetime") {
      return "One-Time";
    }

    if (props.applicationDetails.RequirementType === "contract") {
      return "Contract";
    }
  };

  return (
    <div>
      {props.isLoading ? (
        <RISkeletonLoading loadingType={"ApplicationDetail"} />
      ) : (
        <div className="p-4 border bg-white border-gray-300 rounded-lg">
          <div className={classes.sponsoredPost}>
            <div className={classes.featuredListing}>
              {props.applicationDetails.Addons &&
                props.applicationDetails.Addons.map((item) => {
                  return (
                    <div className={classes.tagFeatured}>
                      {addOnType(item.AddonName)}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={classes.budgetContainer}>
            <div className="text-gray-700"> Budget </div>
            <div className={classes.budgetAndWork}>
              <div className="text-xl sm:text-3xl font-semibold">
                {budget()}{" "}
              </div>
              <div
                className={`${classes.workType} ${classes[workTypeColor()]}`}
              >
                {workTypeColor()}
              </div>
            </div>
          </div>
          <div className="text-center sm:text-right mt-2 text-gray-700">
            <div>{applied()} </div>
            <div>{waitList()}</div>
          </div>
          <div className="text-center">
            {!currentLocation.includes("clientRequirementDetail") && (
              <ActionButton
                buttonText={"APPLY NOW"}
                buttonType={"small"}
                onClick={props.showModal}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationDetail;
