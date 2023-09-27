import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Footer from "../components/Footer";
import RiHeader from "../components/MainComponents/RiHeader";
import LoadingBtn from "../components/ButtonComponents/LoadingBtn";

const forgetpasswordbyemail = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = React.useState("");

  const [error, setError] = React.useState({});
  const [userNameErr, setUserNameErr] = useState();

  const router = useRouter();

  const emailRegex =
    /^(([^<>()/.,;:\s@"]+(\.[^<>()/.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const formValidation = () => {
    let errors = {};
    let isValid = true;

    if (!email || email === "") {
      errors.email = "Please enter your valid email address";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      isValid = false;
      errors.email = "Please enter valid email address";
    } else {
    }
    setError(errors);
    return isValid;
  };

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

  const logoSchema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://freelancer.rozgaarindia.com/forgetpasswordbyemail",
    logo: "https://www.sasone.in/IPassets/rozgaarIcon.png",
  };

  return (
    <>
      <RiHeader />

      <div className="relative py-10 flex items-center justify-center bg-gray-400  px-4 sm:px-6 lg:px-8 ">
        <div className="absolute bg-white opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full  p-5 sm:py-5 sm:px-10 bg-white rounded-xl z-10">
          <div className="text-center">
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
                  Login with Mobile Number
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
                  className="w-full flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
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
    </>
  );
};

export default forgetpasswordbyemail;
