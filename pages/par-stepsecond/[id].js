import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import PostARequirementBackdropTheme from "../../components/PostRequirement/PostARequirementBackdropTheme";
import Footer from "../../components/Footer";
import CustomLoader from "../../components/MainComponents/CustomLoader";
import RiHeader from "../../components/MainComponents/RiHeader";
import RiTextInputs from "../../components/MainComponents/RiTextInputs";
import Head from "next/head";

const parstepsecond = (props) => {
  const [requirementType, setRequirementType] = useState(null);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [getPARLoading, setGetPARLoading] = useState(false);
  const router = useRouter();
  const RequirementID = router.query.id;
  let userID = Cookies.get("Client_userID");

  useEffect(() => {
    // pageViewTracker()
    GetPARapi();
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
    formdata.append("RequirementType", requirementType);

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
          router.push("/par-stepthird/" + RequirementID);
        } else {
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
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
          setRequirementType(result.Data.RequirementType);
        } else {
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setGetPARLoading(false);
      });
  };

  const formValidation = () => {
    let errors = {};
    let isValid = true;
    if (!requirementType || requirementType === "") {
      errors.requirementType = "Please choose one of the following";
      isValid = false;
    } else {
    }
    setError(errors);
    return isValid;
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
        <link rel="canonical" href="https://www.rozgaarindia.com/par-stepsecond/" />
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
          content="https://www.rozgaarindia.com/par-stepsecond"
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
          subHeadingMain={"In 2/4 quick steps connect with top freelancers"}
          step={"50"}
        >
          {getPARLoading ? (
            <CustomLoader />
          ) : (
            <>
              <label className="block text-sm font-medium text-gray-700 my-2">
                Requirement Type
              </label>
              <div className="space-y-2">
                <RiTextInputs
                  input={"checkbox"}
                  placeHolder={""}
                  text={"One Time Task"}
                  subText={
                    "You want a Freelancer for a short, one time task eg. to create a logo"
                  }
                  onClick={() => setRequirementType("onetime")}
                  checked={requirementType === "onetime"}
                  onInput={() => {
                    error.requirementType = " ";
                  }}
                />
                <RiTextInputs
                  input={"checkbox"}
                  placeHolder={""}
                  text={"Contract"}
                  subText={
                    "You want to hire the Freelancer on a contract basis for a particular period of time. Eg. Social Media Marketing for a particular time"
                  }
                  onClick={() => setRequirementType("contract")}
                  checked={requirementType === "contract"}
                  onInput={() => {
                    error.requirementType = " ";
                  }}
                />
                <RiTextInputs
                  input={"checkbox"}
                  placeHolder={""}
                  text={"Monthly Basis "}
                  subText={
                    "You want a Freelancer to work on a monthly basis. Eg. Content Writer to write content on a regular basis"
                  }
                  onClick={() => setRequirementType("monthly-basis")}
                  checked={requirementType === "monthly-basis"}
                  onInput={() => {
                    error.requirementType = " ";
                  }}
                />
                <RiTextInputs
                  input={"checkbox"}
                  placeHolder={""}
                  text={"Commission Basis"}
                  subText={
                    "You want a Freelancer to work on commission basis Eg. Sales Agent"
                  }
                  onClick={() => setRequirementType("commission")}
                  checked={requirementType === "commission"}
                  onInput={() => {
                    error.requirementType = " ";
                  }}
                />
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
                <>
                  <div className="block text-sm font-medium text-red-700">
                    {error.requirementType}
                  </div>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      formValidation()
                        ? PARapi()
                        : console.log("Something's wrong");
                    }}
                  >
                    <ActionButton buttonText={"Save & Continue"} />
                  </div>
                </>
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
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  if (!context.req.cookies.Client_userLoggedIn) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default parstepsecond;
