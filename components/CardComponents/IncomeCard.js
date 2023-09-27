import React from "react";

const IncomeCard = (props) => {
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

  return (
    <div className="">
      {props.freelancerWork.map((item, index) => {
        return (
          <div className="border-b-2 py-2">
            <div className="text-lg font-bold pt-2" key={index}>
              {mainSkillHandler(item.RequirementSkills)}
            </div>

            <div className="text-base font-semibold">
              {companyName(item.ClientFirstName, item.ClientLastName)}
            </div>

            <div className="text-sm pt-1">
              <a href={"/requirementdetail/" + item.RequirementID} className="">
                {" "}
                {item.Description === "" ? "N/A" : item.Description}
              </a>
            </div>
            <div className="lg:flex gap-4 py-2">
              <div className="text-base font-semibold text-gray-700">
                Order date :
                <span className="text-black">
                  {item.UpdatedAt.slice(0, 10).split("-").reverse().join("-")}
                </span>
              </div>
              <div className="text-base font-semibold text-gray-700">
                Staus :{" "}
                <span className="text-black">
                  {item.Status === "" ? "N/A" : item.Status}
                </span>
              </div>
              <div className="text-base font-semibold text-gray-700">
                Order ID:{" "}
                <span className="text-black">
                  {item.PGOrderId === "" ? "N/A" : item.PGOrderId}{" "}
                </span>
              </div>
            </div>

            <div className="">
              <div className="text-base font-semibold">
                Proposal:{" "}
                <span className="">
                  {" "}
                  {item.GrandTotal === ""
                    ? "N/A"
                    : item.BudgetCurrency + "" + item.Budget}{" "}
                </span>
              </div>
            </div>
            <div className="">
              <div className="text-base font-semibold">
                Deposite Amount:{" "}
                <span className="">
                  {" "}
                  {item.PaymentAmount === ""
                    ? "N/A"
                    : item.BudgetCurrency + "" + item.PaymentAmount}{" "}
                </span>
              </div>
            </div>
            <a href={"/requirementdetail/" + item.RequirementID} className="">
              <div className="text-right text-blue-600 text-base font-semibold">
                {" "}
                View{" "}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default IncomeCard;
