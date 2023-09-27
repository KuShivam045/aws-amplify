import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import countries from "../../JsonFiles/countries.json";
import states from "../../JsonFiles/states.json";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import PostARequirementBackdropTheme from "../../components/PostRequirement/PostARequirementBackdropTheme";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Footer from "../../components/Footer";
import CustomLoader from "../../components/MainComponents/CustomLoader";
import RiHeader from "../../components/MainComponents/RiHeader";
import Head from "next/head";
import RiTextInputs from "../../components/MainComponents/RiTextInputs";

const parstepthird = (props) => {
  const router = useRouter();
  const [policy, setPolicy] = useState(null);
  const [pinCode, setPinCode] = useState();
  const [getPARLoading, setGetPARLoading] = useState(false);
  const [stateData] = useState();
  const [freelancerCount, setFreelancerCount] = useState("1");
  const [country, setCountry] = useState("");
  const [multipleFreelancer, setMultipleFreelancer] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState("");
  const [error, setError] = useState({});
  const [cityLoading, setCityLoading] = useState(false);
  const [workingPolicyRemote, setWorkingPolicyRemote] = useState("0");
  const [workingPolicyHybrid, setWorkingPolicyHybrid] = useState("0");
  const [workingPolicyOnSite, setWorkingPolicyOnSite] = useState("0");
  const [updateLocation, setUpdateLocation] = useState(true);

  const reqId = router.query.id;
  const RequirementID = reqId;
  let userID = Cookies.get("Client_userID");

  useEffect(() => {
    // pageViewTracker()
    GetPARapi();
  }, []);

  const cityList = (selectedState) => {
    setCityLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Country: country,
      State: selectedState ? selectedState : state,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/GetCityLocatinList",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setCityData(result.data);
        } else {
          alert(result.message);
        }
      })
      .catch((error) => {
        alert("Something went wrong, please contact support!");
      })
      .finally(() => {
        setCityLoading(false);
      });
  };
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
    formdata.append("FreelancerPolicy", policy);
    if (policy !== "Remote") formdata.append("Country", country);
    if (policy !== "Remote") formdata.append("State", state || stateData);
    if (policy !== "Remote") formdata.append("City", city || cityData);
    formdata.append("Pincode", pinCode);
    formdata.append("MultipleFreelancers", multipleFreelancer || "0");
    formdata.append("FreelancersCount", freelancerCount);

    formdata.append("IsRemote", workingPolicyRemote);
    formdata.append("IsHybrid", workingPolicyHybrid);
    formdata.append("IsOnsite", workingPolicyOnSite);

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
          router.push("/par-stepfourth/" + RequirementID);
        } else {
          console.log("error");
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
          setMultipleFreelancer(result.Data.MultipleFreelancers);
          setCountry(result.Data.Country);

          setFreelancerCount(
            result.Data.FreelancersCount === "0"
              ? "1"
              : result.Data.FreelancersCount
          );
          setPinCode(result.Data.Pincode);
          setPolicy(result.Data.FreelancerPolicy);
          setCountry(result.Data.Country);
          setState(result.Data.State);
          setCity(result.Data.City);
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
    if (!policy || policy === "") {
      errors.policy = "How you want your freelancer to work for you.";
      isValid = false;
    }
    if (policy === "Hybrid" || policy === "Onsite") {
      if (!country || country === "") {
        errors.country = "Please select your country";
        isValid = false;
      }
      if (!state || state === "") {
        errors.state = "Please select your state";
        isValid = false;
      }
      if (!city || city === "") {
        errors.city = "Please select your city";
        isValid = false;
      }
      if (!pinCode || pinCode === "") {
        errors.pinCode = "Please enter your pin code";
        isValid = false;
      }

      if (multipleFreelancer === "1") {
        if (!freelancerCount) {
          errors.freelancerCount =
            " Please enter number of freelancer required for your work.";
          isValid = false;
        }
      }
    } else {
    }
    setError(errors);
    return isValid;
  };

  const selectedWorkingPolicy = (policySelected) => {
    setPolicy(policySelected);
    if (policySelected === "Remote") {
      setWorkingPolicyRemote("1");
      setWorkingPolicyHybrid("0");
      setWorkingPolicyOnSite("0");
    }
    if (policySelected === "Hybrid") {
      setWorkingPolicyRemote("0");
      setWorkingPolicyHybrid("1");
      setWorkingPolicyOnSite("0");
    }

    if (policySelected === "Onsite") {
      setWorkingPolicyRemote("0");
      setWorkingPolicyHybrid("0");
      setWorkingPolicyOnSite("1");
    }
  };

  const HandleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
    cityList(e.target.value);
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
        <link rel="canonical" href="https://www.rozgaarindia.com/par-stepthird" />
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
          content="https://www.rozgaarindia.com/par-stepthird"
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
          subHeadingMain={"In 3/4 quick steps connect with top freelancers"}
          step={"75"}
        >
          {getPARLoading ? (
            <CustomLoader />
          ) : (
            <>
              <label className="my-2 block text-sm font-medium text-gray-700">
                Select the working policy for freelancer
              </label>
              <div className="mt-2 mb-5 space-y-2">
                <RiTextInputs
                  input={"checkbox"}
                  placeHolder={""}
                  text={"Remote(Recommended)"}
                  subText={"Freelancer can work from anywhere"}
                  onClick={() => selectedWorkingPolicy("Remote")}
                  checked={policy === "Remote"}
                  onInput={() => {
                    error.policy = " ";
                  }}
                />
                <RiTextInputs
                  input={"checkbox"}
                  placeHolder={""}
                  text={"Hybrid"}
                  subText={"Freelancer will work on site and off site"}
                  onClick={() => selectedWorkingPolicy("Hybrid")}
                  checked={policy === "Hybrid"}
                  onInput={() => {
                    error.policy = " ";
                  }}
                />
                <RiTextInputs
                  input={"checkbox"}
                  placeHolder={""}
                  text={"Onsite"}
                  subText={"Freelancer will come to work in person"}
                  onClick={() => selectedWorkingPolicy("Onsite")}
                  checked={policy === "Onsite"}
                  onInput={() => {
                    error.policy = " ";
                  }}
                />
              </div>
              <div className="block text-sm font-medium text-red-700">
                {error.policy}
              </div>
              {policy === "Hybrid" || policy === "Onsite" ? (
                <div className="space-y-3">
                  {updateLocation && country ? (
                    <>
                      <div className="pt-2">
                        <label className="flex items-center text-sm font-medium text-gray-700">
                          Select country
                          <FaEdit
                            className="cursor-pointer ml-2"
                            onClick={() => {
                              setUpdateLocation(false);
                              setCountry("");
                              setState("");
                              setCity("");
                            }}
                            size={16}
                          />
                        </label>
                      </div>
                      <div className="border my-2 p-2 rounded">{country}</div>
                    </>
                  ) : (
                    <RiTextInputs
                      input={"Dropdown"}
                      placeHolder={"Select Country"}
                      displayData={countries}
                      label={"Select Country"}
                      onChange={HandleCountry}
                      onInput={() => {
                        error.country = " ";
                      }}
                      value={country}
                      default={country}
                    />
                  )}
                  <div className="block text-sm font-medium text-red-700">
                    {error.country}
                  </div>
                  {updateLocation && state ? (
                    <>
                      <div className="">
                        <label className="block text-sm font-medium text-gray-700">
                          Select state
                        </label>
                      </div>
                      <div className="border my-2 p-2 rounded">{state}</div>
                    </>
                  ) : (
                    <>
                      <RiTextInputs
                        input={"Dropdown"}
                        label={"Select State"}
                        placeHolder={"State"}
                        displayData={states}
                        onInput={() => {
                          error.state = " ";
                        }}
                        onChange={(e) => {
                          handleState(e);
                        }}
                        value={state}
                        defaultState={state}
                        selectedCountry={country}
                      />

                      <div className="block text-sm font-medium text-red-700">
                        {error.state}
                      </div>
                    </>
                  )}
                  {updateLocation && city ? (
                    <>
                      <div className="">
                        <label className="block text-sm font-medium text-gray-700">
                          Select city
                        </label>
                      </div>
                      <div className="border my-2 p-2 rounded">{city}</div>
                    </>
                  ) : cityLoading ? (
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
                      <RiTextInputs
                        input={"Dropdown"}
                        label={"Select City"}
                        placeHolder={"Select City"}
                        displayData={cityData}
                        onInput={() => {
                          error.city = " ";
                        }}
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.city}
                      </div>
                    </>
                  )}
                  <RiTextInputs
                    input={"SingleLineInput"}
                    type={"text"}
                    maxLength="6"
                    minLength="6"
                    label={"Pincode"}
                    placeHolder={""}
                    value={pinCode}
                    onInput={() => {
                      error.pinCode = " ";
                    }}
                    onChange={(e) =>
                      setPinCode(
                        isNaN(parseInt(e.target.value)) ? "" : e.target.value
                      )
                    }
                  />
                  <div className="block text-sm font-medium text-red-700">
                    {error.pinCode}
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="space-y-2 mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Do you want more than 1 freelancer?
                </label>
                <div className="flex items-center pl-4 border border-gray-200 rounded cursor-pointer">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    required
                    value={multipleFreelancer}
                    onChange={() => {
                      setMultipleFreelancer("1");
                      setFreelancerCount("1");
                    }}
                    checked={multipleFreelancer === "1"}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <label
                    for="male"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 cursor-pointer"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center pl-4 border border-gray-200 rounded cursor-pointer">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    required
                    value={multipleFreelancer}
                    onChange={() => {
                      setMultipleFreelancer("0");
                      setFreelancerCount("0");
                    }}
                    checked={
                      multipleFreelancer === "0" || multipleFreelancer === ""
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <label
                    for="female"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 cursor-pointer"
                  >
                    No
                  </label>
                </div>
                <div className="block text-sm font-medium text-red-700">
                  {error.multipleFreelancer}
                </div>
              </div>
              {multipleFreelancer === "1" ? (
                <>
                  <RiTextInputs
                    input={"SingleLineInput"}
                    type={"text"}
                    label={"How many freelancer's do you require?"}
                    placeHolder={"eg.5"}
                    value={freelancerCount}
                    onInput={() => {
                      error.freelancerCount = " ";
                    }}
                    onChange={(e) => setFreelancerCount(e.target.value)}
                  />
                  <div className="block text-sm font-medium text-red-700">
                    {error.freelancerCount}
                  </div>
                </>
              ) : (
                <></>
              )}
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
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    formValidation(freelancerCount)
                      ? PARapi()
                      : console.log("Something's wrong");
                  }}
                >
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
export default parstepthird;
