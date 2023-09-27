import { useRouter } from "next/router";
import React from "react";

const NewRequirementCardMobile = (props) => {
  const router = useRouter();

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
  };
  const workTypeColor = (workType) => {
    if (workType === "commission") {
      return "Commission";
    }
    if (workType === "monthly-basis") {
      return "Monthly";
    }
    if (workType === "onetime") {
      return "One-Time";
    }

    if (workType === "contract") {
      return "Contract";
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
  const skilltags = (Skills) => {
    return (
      <ul className={"mt-6 flex flex-wrap gap-2"}>
        {Skills &&
          Skills.slice(0, 4).map((item, i) => {
            return (
              <li className="list-none inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/5 hover:text-zinc-900">
                {item.Skill.charAt(0).toUpperCase() + item.Skill.slice(1)}
              </li>
            );
          })}
      </ul>
    );
  };
  const budget = (unit, workType) => {
    return (
      <>
        {workType === "onetime" ? (
          <span className={"font-semibold text-sm"}>Fixed Price</span>
        ) : (
          <span className={"font-semibold text-sm"}>{unit}</span>
        )}
      </>
    );
  };
  const changeData = (value) => {
    let chnagePTag = value.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "");
    let htmlDescription = chnagePTag.replace(/(\r\n|\r|\n)/g, "<br>");
    return htmlDescription;
  };

  return (
    <li className="list-none pb-10 border-b border-green-500">
      <div className="">
        <h2 className="flex items-center text-sm font-semibold leading-6">
          {/*  <span className="text-indigo-500">Step 1</span>
      <span className="ml-2 h-4 w-px bg-slate-300"></span> */}
          <span className="text-slate-900">
            <div className="xl:hidden font-bold font-display tracking-wide text-xl">
              {props.data.Title}
            </div>
            <div className="bg-indigo-500 text-center text-white inline-flex px-3 py-1 mt-2 rounded-3xl text-sm">
              New
            </div>
            <span className="ml-2 h-4 w-px bg-slate-300"></span>
            <span className="text-zinc-500">
              {mainSkillHandler(props.data.Skills)} -{" "}
            </span>
            <span className="text-zinc-500">
              {timeSince(new Date(props.data.UpdatedDate))} ago
            </span>

            {/* <span className="hidden xl:inline">Find the perfect component</span> */}
          </span>
        </h2>
        <div className={"grid grid-cols-3 gap-8 my-6"}>
          <div className={""}>
            <div className={"font-bold text-neutral-900"}>
              {props.data.BudgetCurrency} {props.data.Budget}
            </div>
            <div className={"font-semibold text-sm text-neutral-700"}>
              {budget(props.data.BudgetUnit, props.data.RequirementType)}
            </div>
          </div>
          <div className={""}>
            <div className={"font-bold text-neutral-900"}>
              {props.data.FreelancerPolicy}
            </div>
            <div className={"font-semibold text-sm text-neutral-700"}>
              Work Type
            </div>
          </div>
          <div className={""}>
            <div className={"font-bold text-neutral-900"}>
              {workTypeColor(props.data.RequirementType)}
            </div>
            <div className={"font-semibold text-sm text-neutral-700"}>
              Work Policy
            </div>
          </div>
        </div>
        {props.data.DescriptionHTML ? (
          <p className="mt-2 text-sm leading-7 text-slate-600">
            <div
              dangerouslySetInnerHTML={{
                __html: changeData(props.data.DescriptionHTML).slice(0, 140),
              }}
            />
            <div
              onClick={() =>
                router.push(
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
                )
              }
            >
              ...
            </div>
          </p>
        ) : (
          <>
            <p className={""}>
              {props.data.Description.slice(0, 140)}
              <div
                onClick={() =>
                  router.push(
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
                  )
                }
                className={""}
              >
                ...
              </div>
            </p>
          </>
        )}
        {skilltags(props.data.Skills)}
      </div>
     
    </li>
  );
};

export default NewRequirementCardMobile;
