import React from "react";
import { GiWallet } from "react-icons/gi";
import { AiFillWallet } from "react-icons/ai";
import { BsFillCreditCardFill } from "react-icons/bs";

const AccountBalance = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="flex border border-gray-300 p-3 gap-4 bg-white shadow-md ">
        <AiFillWallet size={"30px"} />

        <div className="">
          <div className="text-lg font-semibold">
            {props.incomeDetail.Currency} {props.incomeDetail.TotalIncome}
          </div>
          <div className="text-base font-semibold">Total Income</div>
        </div>
      </div>
      <div className="flex border border-gray-300 p-3 gap-4 bg-white shadow-md ">
        <GiWallet size={"30px"} />
        <div className="">
          <div className="text-lg font-semibold">
            {props.incomeDetail.Currency} {props.incomeDetail.Withdrawal}
          </div>
          <div className="text-base font-semibold">Withdrawn</div>
        </div>
      </div>
      <div className="flex border border-gray-300 p-3 gap-4 bg-white shadow-md ">
        <BsFillCreditCardFill size={"30px"} />
        <div className="">
          <div className="text-lg font-semibold">
            {props.incomeDetail.Currency} {props.incomeDetail.Balance}
          </div>
          <div className="">
            <div className="text-base font-semibold">Balance</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountBalance;
