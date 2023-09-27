import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingBtn from "../components/ButtonComponents/LoadingBtn";
// import LogoSchema from "../components/Schema/LogoSchema";
import Cookies from "js-cookie";
import Footer from "../components/Footer";

import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";

const forgetpasswordbymobile = (props) => {
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = React.useState("");

  const [error, setError] = React.useState({});
  const [userNameErr, setUserNameErr] = useState();

  const router = useRouter();

  const formValidation = (e) => {
    e.preventDefault();
    let errors = {};
    let isValid = true;

    if (!mobile || mobile === "") {
      errors.mobile = "Please enter your valid mobile number";
      isValid = false;
    } else if (mobile.length > 10) {
      isValid = false;
      errors.mobile = "Please enter valid mobile number";
    } else if (mobile.length < 10) {
      isValid = false;
      errors.mobile = "Please enter valid mobile number";
    } else {
    }
    setError(errors);
    return isValid;
  };
  const onlyNumericMobile = (e) => {
    var reg = /^[0-9\b]+$/;
    reg.test(e.target.value) || e.target.value === ""
      ? setMobile(e.target.value)
      : console.log("");
  };

  const resentOtp = () => {
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Mobile: mobile,
      CountryCode: "+91",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
     process.env.BASE_URL +  "/api/freelancerapp/rozgaarapi/SecondFreelancerResendOTP",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          Cookies.set("UserOtp", result.data.Mobile);
          router.push("/forgotpassword");
        } else {
          setUserNameErr(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  return (
    <>
       <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Verify Your account with Mobile OTP | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/forgetpasswordbymobile/"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Verify your account with OTP sent to your mobile at www.rozgaarindia.com"
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
          content="Verify Your account with Mobile OTP | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Verify your account with OTP sent to your mobile at www.rozgaarindia.com"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/forgetpasswordbymobile/"
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
          content="Verify Your account with Mobile OTP | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Verify your account with OTP sent to your mobile at www.rozgaarindia.com"
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
      <div className="relative py-10 lg:py-32 flex items-center justify-center bg-gray-200 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full p-5 sm:py-5 sm:px-10 bg-white rounded-xl shadow-lg border-gray-300">
          <div className="text-center">
            <h1 className="mt-5 text-3xl font-semibold text-gray-900">
              Forgot Password?
            </h1>
          </div>

          <div className="mt-5">
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <label className="text-base font-semibold tracking-wide">
                Mobile Number
              </label>
              <input
                className="w-full text-sm py-2.5 border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                placeholder="Enter Mobile Number"
                onChange={(e) => {
                  onlyNumericMobile(e);
                  error.mobile = "";
                  setUserNameErr(false);
                }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={mobile}
              />
              <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                {error.mobile}
              </div>
              {userNameErr && (
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  The details you have entered could not be found
                </div>
              )}
            </div>

            <div className="flex items-center justify-between ">
              <div className="flex items-center"></div>
              <div className="text-sm">
                <a
                  href="/forgetpasswordbyemail"
                  className="font-medium text-blue-500 hover:text-blue-500"
                >
                  Login with Email
                </a>
              </div>
            </div>
            {loading ? (
              <div className="mt-4 mb-2">
                <LoadingBtn />
              </div>
            ) : (
              <div
                className="mt-8 mb-2"
                onClick={(e) => formValidation(e) && resentOtp()}
              >
                <button
                  className="w-full flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
                                font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Proceed
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default forgetpasswordbymobile;
