import React, { useState, useEffect } from "react";
import classes from "../Step4PAR.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import PostARequirementBackdropTheme from "../../components/PostRequirement/PostARequirementBackdropTheme";
import Step6PAR from "../../components/PostRequirement/Step6ParModal";
import Footer from "../../components/Footer";
import CustomLoader from "../../components/MainComponents/CustomLoader";
import RiHeader from "../../components/MainComponents/RiHeader";
import Head from "next/head";

const parstepfourth = (props) => {
  const [budget, setBudget] = useState("");
  const [addOn, setAddOn] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addonData, setAddonData] = useState([]);
  const [addOnID, setAddOnID] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [budgetUnit, setBudgetUnit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [getPARLoading, setGetPARLoading] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [error, setError] = useState({});
  const router = useRouter();
  const RequirementID = props.req_id;
  let userID = Cookies.get("Client_userID");

  useEffect(() => {
    // pageViewTracker()
    GetPARapi();
    addonDataApi();
  }, []);

  const PARapi = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );

    var formdata = new FormData();
    formdata.append("UserId", userID);
    formdata.append("RequirementID", RequirementID);
    formdata.append("AddonName", addOn.toString());
    formdata.append("AddonAmount", totalAmount);
    formdata.append("Budget", budget);
    formdata.append("BudgetUnit", budgetUnit || "Total");
    formdata.append("BudgetCurrency", currencySymbol || "₹");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/PostARequirementSecond",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          paymentHandler();
        }
        if (result.status === "Failed" && result.status_code === 300) {
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addonDataApi = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify();
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(process.env.BASE_URL + "/api/client/GetAddonMaster", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAddonData(result.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const GetPARapi = () => {
    setGetPARLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );

    var formdata = new FormData();
    formdata.append("UserId", userID);
    formdata.append("RequirementID", RequirementID);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/PostARequirementSecond",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          setBudget(result.Data.Budget);
          setBudgetUnit(result.Data.BudgetUnit);
          setCurrencySymbol(result.Data.BudgetCurrency);
        }
        if (result.status === "Failed" && result.status_code === 300) {
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setGetPARLoading(false);
      });
  };

  const paymentHandler = () => {
    if (totalAmount > 0) {
      openpaymentForAddon();
    } else {
      alert("success");
      setShowModal(true);
    }
  };

  const openpaymentForAddon = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      RequirementID: RequirementID,
      AddonIDs: addOnID.toString(),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/AddonsPaymentInitiate",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          Cookies.set("AsPath", router.asPath);
          router.push(
            "/razorpaygateway/" +
              // "clientaddons/" +
              result.data.PGOrderId +
              "/" +
              RequirementID
          );
        } else {
          console.log(result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const formValidation = () => {
    let errors = {};
    let isValid = true;

    if (!budget || budget === "") {
      errors.budget = "Please specify your budget.";
      isValid = false;
    }
    if (!addOn || addOn === "") {
      errors.addOn = "This field is mandatory";
      isValid = false;
    } else {
    }
    setError(errors);
    return isValid;
  };

  const UpdateAddOn = (value, amount, AddonID) => {
    if (!addOn.includes(value)) {
      setAddOn([...addOn, value]);
      setTotalAmount(parseInt(totalAmount) + amount);
      addOnID.push(AddonID);
    } else {
      setAddOn(addOn.filter((item) => item !== value));
      setTotalAmount(totalAmount - amount);
      setAddOnID(addOnID.filter((item) => item !== AddonID));
    }
  };

  return (
    <div>
        <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Best Remote work and freelance projects at RozgaarIndia.com via Times Ascent
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/par-stepfourth" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Rozgaar India is one of India's Leading online service marketplace for remote work and freelance projects. You can find the best skilled online service providers at RozgaarIndia.com"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/IPassets/rozgaarIcon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/IPassets/rozgaarIcon.png"
        />
        <meta
          property="og:title"
          content="Best Remote work and freelance projects at RozgaarIndia.com via Times Ascent"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Rozgaar India is one of India's Leading online service marketplace for remote work and freelance projects. You can find the best skilled online service providers at RozgaarIndia.com"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/par-stepfourth"
        />
        <meta
          property="og:image"
          content="https://www.sasone.in/IPassets/rozgaarIcon.png"
        />
        <meta
          property="twitter:image"
          content="https://www.sasone.in/IPassets/rozgaarIcon.png"
        />
        <meta
          property="twitter:title"
          content="Best Remote work and freelance projects at RozgaarIndia.com via Times Ascent"
        />
        <meta
          property="twitter:description"
          content="Rozgaar India is one of India's Leading online service marketplace for remote work and freelance projects. You can find the best skilled online service providers at RozgaarIndia.com"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/sasonesocial"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        
      </Head>
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <div className="max-w-7xl mx-auto py-16 sm:py-22 px-2 sm:px-5">
        <PostARequirementBackdropTheme
          headingsMain={"Post A Requirement"}
          subHeadingMain={"In 4/4 quick steps connect with top freelancers"}
          step={"100"}
        >
          {getPARLoading ? (
            <CustomLoader />
          ) : (
            <>
              <label className="my-2 block  font-medium text-gray-700">
                What is your budget?
              </label>
              <div className="text-sm">
                Budget is the amount which you are ready to pay for the
                requirement.
              </div>
              <div className={classes.budgetContainer}>
                <div className={classes.inputArea}>
                  <div className={classes.curencySymbol}>₹</div>
                  <input
                    type="text"
                    placeHolder={"Eg. 2500"}
                    value={budget}
                    className={classes.inputAreaBudget}
                    onChange={(e) =>
                      setBudget(
                        isNaN(parseInt(e.target.value)) ? "" : e.target.value
                      )
                    }
                  />
                </div>
                <select
                  className={classes.inputArea_dropdown}
                  onChange={(e) => setBudgetUnit(e.target.value)}
                  value={budgetUnit}
                >
                  <option>Total</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>On Maturity</option>
                </select>
              </div>
              <div className={classes.error_message}>{error.budget}</div>
              <div className={classes.input_fields}>
                <label className={classes.label}>Add Ons-</label>
              </div>
              {addonData.map((item, i) => {
                return (
                  <div className="flex border rounded-md justify-between p-2 my-4 relative">
                    <div className="">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className={classes.CheckBoxInputBox}
                          onClick={() =>
                            UpdateAddOn(
                              item.AddonName,
                              Math.round(parseInt(item.AddonAmount)),
                              item.AddonID
                            )
                          }
                          checked={addOn.includes(item.AddonName)}
                        />
                        <div className={classes.CheckBoxInput_Text}>
                          {item.AddonName === "Urgent"
                            ? "Urgent"
                            : item.AddonName}
                        </div>
                      </div>
                      <div className="text-prose">
                        {item.AddonDescription}
                      </div>
                    </div>
                    <div className="bg-black text-white font-medium text-sm h-8 p-2 w-20 text-center rounded-r-md absolute top-0 right-0">
                      {item.AddonAmount === "0" ? (
                        "Free"
                      ) : (
                        <>₹ {Math.round(parseInt(item.AddonAmount))}</>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className={classes.error_message}>{error.addOn}</div>
              <div className={classes.TotalAmountText}>
                <label>
                  TOTAL :&nbsp;
                  {totalAmount}
                </label>
              </div>
              {isLoading ? (
                <div
                  role="status"
                  className="flex items-center justify-center my-6"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    formValidation()
                      ? PARapi()
                      : console.log("Something's wrong");
                  }}
                >
                  {showModal ? (
                    <Step6PAR
                      onClick={() => setShowModal(false)}
                      showModal={showModal}
                      setShowModal={setShowModal}
                      RequirementID={RequirementID}
                    />
                  ) : (
                    <></>
                  )}
                  <ActionButton buttonText={"Save & Continue"} />
                </div>
              )}
            </>
          )}
        </PostARequirementBackdropTheme>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
    const FirstName = context.req.cookies.Client_FirstName || null;
    const LastName = context.req.cookies.Client_LastName || null;
    const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

    const req_id = context.params.id;
    const userAgent = context?.req?.headers["user-agent"];
    const isMobile = Boolean(
      userAgent?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    const props = {
      isMobile,
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
export default parstepfourth;
