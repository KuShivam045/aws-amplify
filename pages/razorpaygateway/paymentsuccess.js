import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";

const paymentsuccess = (props) => {


  return (
    <div className="text-center mt-5 mb-5">
      <BsCheckLg />
      <h1>Payment Successfull</h1>
      <div>
        <p> Payment Id={props.paymentId}</p>
        <p>Order Id={props.OrderId}</p>
        <p>Signature={props.Signature}</p>
      </div>
      <div>
        <a href="/">return to home</a>
      </div>
    </div>
  );
};

export default paymentsuccess;
