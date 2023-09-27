import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const razorpaygateway = () => {
  const router = useRouter();
  console.log(router.query, "fjdasfjakskl");
  const { paymentType, orderId } = useRouter();
  let userID = Cookies.get("Client_userID");

  const PaymentorderId = orderId;
  useEffect(() => {
    // pageViewTracker();
    paymentStatus();
  }, []);
  const location = router.asPath;

  // let reqId = location.state.RequirementID

  const paymentStatus = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      OrderId: PaymentorderId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      process.env.BASE_URL + "/api/freelancerapp/rozgaarapi/GetPaymentStatus",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "Success") {
          displayRazorpay(result.data.Email, result.data.Mobile);
        } else {
          console.log("fail");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const displayRazorpay = async (email, phone) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_live_JsB8mC5ribaCzk",

      amount: "",
      order_id: PaymentorderId,
      name: "Rozgaar India",
      description: "Remote Hiring ",
      image:
        "https://res.cloudinary.com/rozgaarindia/image/upload/v1646979716/userprofile/rozgaarIcon_rtomzi.png",
      handler: function (response) {
        if (
          typeof response.razorpay_payment_id == "undefined" ||
          response.razorpay_payment_id < 1 ||
          response.status_code === 300
        ) {
          router.push("/razorpaygateway/gatewaypaymentstatus/" + orderId);
        } else {
          router.push("/razorpaygateway/gatewaypaymentstatus/" + orderId);
        }
      },
      prefill: {
        email: email,
        contact: phone,
      },
      modal: {
        ondismiss: function () {
          /* switch (paymentType) {
            case "ClientRequirement":
              return router.push("/checkusereligibility/" + userID);
            case "ClientAddons":
              return router.push("/employer-workplace/my-job-posting");
            case "DClientAddons":
              return router.push("/clientrequirementdetail/" + reqId);
            case "PaymentDeposit":
              return router.push("/clientRequirementdetail/" + reqId);
            default:
              return null;
          } */
        },
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      if (response.error.code === "BAD_REQUEST_ERROR") {
        router.push("/razorpaygateway/paymentfailure");
      }
    });
    paymentObject.open();
  };

  return (
    <>
      <div></div>
    </>
  );
};
export async function getServerSideProps(context) {
  try {
    const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
    const FirstName = context.req.cookies.Client_FirstName || null;
    const LastName = context.req.cookies.Client_LastName || null;
    const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

    const order_id = context.params.id[0];
    const req_id = context.params.id[1];
    const userAgent = context?.req?.headers["user-agent"];
    const isMobile = Boolean(
      userAgent?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    const props = {
      isMobile,
      order_id,
      req_id,
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    };

    return { props };
  } catch (error) {
    // Handle errors
    console.error("Error in getServerSideProps:", error);

    // Return an empty object or an error state if necessary
    return { props: {} };
  }
}
export default razorpaygateway;
