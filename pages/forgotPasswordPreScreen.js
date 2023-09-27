import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Footer from "../components/Footer";
import LoadingBtn from "../components/ButtonComponents/LoadingBtn";
import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";
const forgotPasswordPreScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [userNameErr, setUserNameErr] = useState();

  const ResentOtp = async (value) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Email: email,
      CountryCode: "+91",
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(
      process.env.BASE_URL +
        "/api/freelancerapp/rozgaarapi/SecondFreelancerResendOTP",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          Cookies.set("UserOtp", result.data.Email);
          router.push("/forgotpassword");
          // navigate("/verifyOTP", { state: { Mobile: mobile, DialCode: "+91" } });
        }
        // if (result.status === "SUCCESS" && result.status_code === 200 && value === "true") {
        //     navigate("/verifyEmailOTP", { state: { Mobile: email } });
        // }
        else {
          setUserNameErr(true);
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
       <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Reset Password | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/forgotPasswordPreScreen/"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Forgot your rozgaar password ? Reset your rozgaar india password with email and mobile"
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
          content="Reset Password | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Forgot your rozgaar password ? Reset your rozgaar india password with email and mobile"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/forgotPasswordPreScreen/"
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
          content="Reset Password | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Forgot your rozgaar password ? Reset your rozgaar india password with email and mobile"
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
      <div className="relative py-12 sm:py-32 flex items-center justify-center bg-gray-400  px-4 sm:px-6 lg:px-8 ">
        {/* <div className="absolute bg-white opacity-60 inset-0 z-0"></div> */}
        <div className="max-w-md w-full  p-5 sm:py-5 sm:px-10 bg-white rounded-xl">
          <div className="text-start">
            <h1 className="mt-5 text-3xl font-semibold text-gray-900">
              Forgot Password?
            </h1>
          </div>

          <div className="mt-5">
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <label className="text-base font-semibold  tracking-wide">
                Email
              </label>
              <input
                className=" w-full text-sm py-2.5 border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                placeholder="Enter email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setUserNameErr(false);
                  error.email = "";
                }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
              />
              <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                {error.email}
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
                  href="/forgetpasswordbymobile"
                  className="font-medium text-blue-500 hover:text-blue-500"
                >
                  <span>Reset with Mobile number</span>
                </a>
              </div>
            </div>
            {loading ? (
              <div className="mt-4 mb-2">
                <LoadingBtn />
              </div>
            ) : (
              <div
                className="mt-4 mb-2"
                onClick={() => formValidation() && ResentOtp()}
              >
                <button
                  className="w-full mt-8 flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Proceed
                </button>
              </div>
            )}
          </div>
        </div>
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

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default forgotPasswordPreScreen;
