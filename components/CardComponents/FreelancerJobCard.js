import React from "react";

const FreelancerJobCard = (props) => {
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
          <span className={"font-semibold text-xs"}>Fixed Price</span>
        ) : (
          <span className={"font-semibold text-xs"}>{unit}</span>
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
    <article className="px-4 py-6 md:px-4 md:py-4 lg:py-6 lg:px-4 bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-between items-center mb-4 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center  py-0.5 rounded">
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
          </svg>
          Its a {workTypeColor(props.data.RequirementType)} job!
        </span>

        <span className="text-sm ">
          {timeSince(new Date(props.data.UpdatedDate))} ago
        </span>
      </div>

      <div className="h-16 mb-2">
        <h2 className="text-base font-bold tracking-tight text-gray-900  line-clamp-2  hover:text-gray-500 line-clamp-1">
          <a
            href={"/freelancer-" + UrlType(props.data.RequirementType) + "-job" + "/" + props.data.Title.replace(/[^a-zA-Z ]/g, " ")
            .split("  ")
            .join("-")
            .split(" ")
            .join("-")
            .split("--")
            .join("-") +
            "/" +
            props.data.RequirementID}
            target={"_self"}
          >
            {props.data.Title}
          </a>
        </h2>
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
      </div>

      <span className="inline-flex items-center rounded-full bg-[#3db2be] px-3 mb-2 py-0.5 text-sm font-medium text-[#fff]">
        {props.data.FreelancerPolicy}
      </span>
      <div className={"flex flex-wrap justify-between my-6"}>
        <div className={""}>
          <div className={"font-bold text-sm text-neutral-900"}>
            {props.data.BudgetCurrency} {props.data.Budget}
          </div>
          <div className={"font-semibold text-xs text-neutral-700"}>
            {budget(props.data.BudgetUnit, props.data.RequirementType)}
          </div>
        </div>
        <div className={""}>
          <div className={"font-bold text-sm text-neutral-900"}>
            {props.data.FreelancerPolicy}
          </div>
          <div className={"font-semibold text-xs text-neutral-700"}>
            Work Type
          </div>
        </div>
        <div className={""}>
          <div className={"font-bold text-sm text-neutral-900"}>
            {workTypeColor(props.data.RequirementType)}
          </div>
          <div className={"font-semibold text-xs text-neutral-700"}>
            Work Policy
          </div>
        </div>
      </div>
      <p
        className="mb-5 text-md line-clamp-2 h-28 max-h-32 text-prose prose-sm"
        dangerouslySetInnerHTML={{
          __html: props.data.Description.slice(0, 140),
        }}
      >

      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {props.data.ImageUrl ? (
            <img
              className="w-10 h-10 rounded-full"
              src={props.data.ImageUrl}
              alt="Jese Leos avatar"
            />
          ) : props.data.FirstName ? (
            <div className="rounded-full border text-sm w-10 h-10 border-gray-500 font-semibold flex items-center justify-center p-1">
              {`${props.data.FirstName?.split(" ")[0]
                ?.charAt(0)
                .toUpperCase()} ${props.data.LastName?.split(" ")[0]
                  ?.charAt(0)
                  .toUpperCase()}`}
            </div>
          ) : (
            <div className="rounded-full border text-sm w-10 h-10 border-gray-500 font-semibold flex items-center justify-center p-1">
              R I
            </div>
          )}

          <span className="font-semibold text-sm">
            {`${props.data.FirstName} ${props.data.LastName}`}
            <br />

            <span className="text-sm text-[#3db2be] text-clip overflow-hidden line-clamp-1">
              {props.data.IsCompany === "0"
                ? companyName(props.data.FirstName, props.data.LastName)
                : props.data.CompanyName}{" "}
            </span>
          </span>
        </div>
      </div>
      <div className="text-end">
        <a
          href={"/freelancer-" + UrlType(props.data.RequirementType) + "-job" + "/" + props.data.Title.replace(/[^a-zA-Z ]/g, " ")
            .split("  ")
            .join("-")
            .split(" ")
            .join("-")
            .split("--")
            .join("-") +
            "/" +
            props.data.RequirementID}
          target={"_self"}
          className="pt-2  inline-flex items-center  font-medium text-primary-600 dark:text-primary-500 hover:underline hover:text-blue-600"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </article>
  );
};

export default FreelancerJobCard;
