import React, { useState } from "react";
import classes from "./ExploreSkillsNavbar.module.css";
import SkillsData from "./SkillsData";

const ExploreSkillsNavbar = () => {
  const [activeBar, setActiveBar] = useState("TopSkills");
  const checkTab = (status) => {
    setActiveBar(status);
  };
  return (
    <>
      <div className="w-full lg:flex lg:w-[85%] my-4 lg:my-6">
        <div className="overflow-x-scroll hide:scroll-bar lg:overflow-hidden">
          <div className={classes.navbar}>
            <div
              className={
                activeBar === "TopSkills"
                  ? classes.menuOptionSelected
                  : classes.menuOptionContent
              }
              onClick={() => {
                checkTab("TopSkills");
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
            >
              Top Skills
            </div>

            <div
              className={
                activeBar === "AllSkills"
                  ? classes.menuOptionSelected
                  : classes.menuOptionContent
              }
              onClick={() => {
                checkTab("AllSkills");
                window.scrollTo({ top: 800, behavior: "smooth" });
              }}
            >
              All Skills
            </div>
          </div>
        </div>
        {activeBar === "TopSkills" ? (
          <SkillsData userType={"TopSkills"} />
        ) : activeBar === "AllSkills" ? (
          <SkillsData userType={"AllSkills"} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ExploreSkillsNavbar;
