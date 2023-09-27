import RISkeletonLoading from "../RISkeletonLoading";
import classes from "./RequirementPageHeader.module.css";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RequirementPageHeader = (props) => {
  const router = useRouter();

  const bgColor = () => {
    console.log(props.headerDetail.RequirementType)
    if (props.headerDetail.RequirementType === "commission") {
      return "bg-[#fea11b]";
    } else if (props.headerDetail.RequirementType === "contract") {
      return "bg-[#486a31]";
    } else if (props.headerDetail.RequirementType === "monthly-basis") {
      return "bg-[#125552]";
    } else if (props.headerDetail.RequirementType === "onetime") {
      return "bg-[#315add]";
    }
  };
  const contentCase = (skill) => {
    const newSkill = skill.charAt(0).toUpperCase() + skill.slice(1);
    return newSkill;
  };
  const statusHandler = () => {
    if (props.headerDetail.Status === "Approved") {
      return "Active";
    }
  };
  const ClosePostHandler = () => {
    if (props.headerDetail.Status === "Draft") {
      router.push("/par-stepfirst");
    }
  };
  const requirementTypeHandler = (reqType) => {
    if (reqType === "contract") {
      return "Contract job!";
    }
    if (reqType === "onetime") {
      return "One Time gig!";
    }
    if (reqType === "monthly-basis") {
      return "Monthly job!";
    }
    if (reqType === "commission") {
      return "Commision based work!";
    }
  };
  const reqTypeColor = (reqType) => {
    if (reqType === "contract") {
      return "text-[#caffa6]";
    }
    if (reqType === "onetime") {
      return "text-[#d5dfff]";
    }
    if (reqType === "monthly-basis") {
      return "text-[#85fffa]";
    }
    if (reqType === "commission") {
      return "text-[#4c2c00]";
    }
  };
  const UserName = (firstName, lastName) => {
    return (
      firstName.charAt(0).toUpperCase() +
      firstName.slice(1) +
      " " +
      lastName.charAt(0).toUpperCase()
    );
  };

  return (
    <div>
      {props.isLoading ? (
        <RISkeletonLoading loadingType={"RequirementPageHeader"} />
      ) : (
        <div className={classNames(`py-8 text-white ${bgColor()}`)}>
          <div className="max-w-7xl mx-auto px-4 sm:px-4">
            <div className={classes.arrowAndMenuOption}>
              <div className={classes.backArrow}> </div>
              <div className={classes.menuOption}>
                {props.headerDetail.Status === "Approved" ? (
                  <div
                    className={classes.menuButton}
                    onClick={props.OnSharePOst}
                  >
                    Share post
                  </div>
                ) : (
                  ""
                )}
                {(props.headerDetail.Status === "Approved" ||
                  props.headerDetail.Status === "Draft") &&
                props.headerDetail.ClosePostButton ? (
                  <div
                    className={classes.menuButton}
                    onClick={
                      (props.headerDetail.Status === "Approved" &&
                        props.OnClosePOst) ||
                      ClosePostHandler
                    }
                  >
                    {props.headerDetail.Status === "Approved" ? (
                      <> Close Post</>
                    ) : (
                      <>Edit Post</>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className={classes.workingPolicy}>
              <span className="inline-flex mr-1.5">Its a</span>
              <span
                className={
                  classNames(`${reqTypeColor(props.headerDetail.RequirementType)}`)
                }
              >
                {requirementTypeHandler(props.headerDetail.RequirementType)}
              </span>
            </div>

            <div className={classes.skillAndStatus}>
              {props.headerDetail.Skills &&
                props.headerDetail.Skills.slice(0, 1).map((item, i) => {
                  return (
                    <h1 className={classes.mainSkill}>
                      {UserName(
                        props.headerDetail.FirstName,
                        props.headerDetail.LastName
                      )}

                      <span className="inline-flex mx-2">is hiring a</span>
                      <span
                        className={`${classes.skillColor} ${
                          classNames(`${reqTypeColor(props.headerDetail.RequirementType)}`)
                        }`}
                      >
                        {props.headerDetail.FreelancerPolicy}
                      </span>

                      <span className="inline-flex mx-2">freelancer for</span>
                      <span
                        /* className={`${classes.skillColor} ${
                          classNames(`${reqTypeColor(props.headerDetail.RequirementType)}`)
                        }`} */
                        className={`${reqTypeColor(props.headerDetail.RequirementType)}`}
                      >
                        {contentCase(item.Skill)}
                      </span>
                    </h1>
                  );
                })}

              <div className={classes.mainSkill}>{statusHandler()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequirementPageHeader;
