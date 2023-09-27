import classes from "../GatewayPaymentStatus.module.css";
import { useEffect, useState } from "react";
import ActionButton from "../../../components/ButtonComponents/ActionButton";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const gatewaypaymentstatus = () => {
  const [paymentStatus, setPaymentStatus] = useState("");
  const [timeOutStatus, setTimeOutStatus] = useState(true);
  const [PaymentType, setPaymentType] = useState("");
  const [ClientId, setClientId] = useState("");
  const [requirementID, setRequirementID] = useState("");
  const [paymentDetail, setpaymentDetail] = useState("");
  let router = useRouter();
  const orderId = router.query.id;

  const pathType = Cookies.get('AsPath')?.split('/')[1];
  // console.log(pathType, "fjkasdlfasjklf")

  useEffect(() => {
    // pageViewTracker()
    paymentStatusCheck();
  }, []);

  const timeOutFunction = (type, payment, RequirementID) => {
    console.log(type, payment);
    return setTimeout(() => {
      setTimeOutStatus(false);
      if (payment === "Success") {
        redirectionTimeOut(type, RequirementID);
      }
    }, 4000);
  };

  const redirectionTimeOut = (type, RequirementID) => {
    return setTimeout(() => {
      redirectionSwitch(type, RequirementID);
    }, 10000);
  };

  const redirectionSwitch = (type, RequirementID) => {
    // switch (type) {
    //   case "ClientRequirement":
    //     return router.push("/par-stepfirst");
    //   case "ClientAddons":
    //     return SubmitPAR(RequirementID);
    //   case "ClientFreelancerPaymentDeposit":
    //     return router.push("/clientrequirementdetail/" + RequirementID);
    //   default:
    //     return null;
    // }
    if(pathType === "par-stepfourth"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    if(pathType === "checkusereligibility"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    if(pathType === "clientrequirementdetail"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    else{
      return SubmitPAR(RequirementID);
    }
  };

  const retryPaymentSwitch = () => {
    if(pathType === "par-stepfourth"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    if(pathType === "checkusereligibility"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    if(pathType === "clientrequirementdetail"){
      return window.open(Cookies.get("AsPath"), "_self");
    }
    else{
      return window.open(Cookies.get("AsPath"), "_self");
    }
  };

  const paymentStatusCheck = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      OrderId: orderId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/freelancerapp/rozgaarapi/GetPaymentStatus",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "Success" && result.status_code === 200) {
          setPaymentType(result.data.PaymentType);
          setClientId(result.data.ClientId);
          setPaymentStatus(result.data.PaymentStatus);
          setRequirementID(result.data.RequirementID);
          setpaymentDetail(result.data);
          timeOutFunction(
            result.data.PaymentType,
            result.data.PaymentStatus,
            result.data.RequirementID
          );
        } else {
          console.log(result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const SubmitPAR = (RequirementID) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      RequirementId: RequirementID,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/client/ReviewSubmitPARStatus",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Submited", result);
        router.push("/employer-workplace");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.modal}>
        {timeOutStatus && (
          <div className={classes.backMessage}>
            {/* <Loader /> */}Loading...
            <div className={classes.backMessage}>
              We are confirming the payment status from the bank{" "}
            </div>{" "}
            <div> Do not refresh or press back button...</div>
          </div>
        )}
        {paymentStatus === "Success" && !timeOutStatus ? (
          <div>
            <h3 className={classes.successfulHeading}>Payment Successful</h3>
            <div className="flex justify-center"><img
              width="80px"
              height="80px"
              src={"/assets/success.gif"}
              alt="Success_Gif"
              className=""
            />
            </div>
            <div className={classes.detailContainer}>
              <div className={classes.detailDiv}>
                <div className={classes.mainHeading}>Id</div>
                <div className={classes.detailvalue}>
                  {paymentDetail.PGOrderId}
                </div>
              </div>
              <div className={classes.detailDiv}>
                <div className={classes.mainHeading}>Currency</div>
                <div className={classes.detailvalue}>INR</div>
              </div>
              <div className={classes.detailDiv}>
                <div className={classes.mainHeading}>Receipt</div>
                <div className={classes.detailvalue}>receipt</div>
              </div>
              <div className={classes.detailDiv}>
                <div className={classes.mainHeading}>Amount</div>
                <div className={classes.detailvalue}>
                  {paymentDetail.GrandTotal}
                </div>
              </div>
              <div className={classes.backMessage}>
                {" "}
                Do not press refresh or press back button...
              </div>
            </div>
          </div>
        ) : !timeOutStatus ? (
          <div>
            <div>
              <h3 className={classes.failHeading}>Payment Fail</h3>
              <div className="flex justify-center">
              <img
                width="80px"
                height="80px"
                src={ "/assets/fail.gif"}
                alt="Fail_Gif"
              />
              </div>
              <div className={classes.detailContainer}>
                <div className={classes.detailDiv}>
                  <div className={classes.mainHeading}>Id</div>
                  <div className={classes.detailvalue}>
                    {paymentDetail.PGOrderId}
                  </div>
                </div>
                <div className={classes.detailDiv}>
                  <div className={classes.mainHeading}>Currency</div>
                  <div className={classes.detailvalue}>INR</div>
                </div>
                <div className={classes.detailDiv}>
                  <div className={classes.mainHeading}>Receipt</div>
                  <div className={classes.detailvalue}>receipt</div>
                </div>
                <div className={classes.detailDiv}>
                  <div className={classes.mainHeading}>Amount</div>

                  <div className={classes.detailvalue}>
                    {paymentDetail.GrandTotal}
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  retryPaymentSwitch();
                }}
              >
                <ActionButton buttonText={"Retry"} buttonType={"small"} />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  // console.log(context, "context herer")

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default gatewaypaymentstatus;
