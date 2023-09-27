import { useState, useContext, useEffect } from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { BsEyeSlashFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import LogoSchema from "../components/Schema/LogoSchema";
import RiHeader from "../components/MainComponents/RiHeader";
import RiFooter from "../components/MainComponents/RiFooter";
import Footer from "../components/Footer";
import LoadingBtn from "../components/ButtonComponents/LoadingBtn";


const forgotpassword = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectOTP, setIncorectOTP] = useState("");
  const [apiError, setApiError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [wrongOTp, setWrongOTp] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("UserOtp")) {
      setUserEmail(Cookies.get("UserOtp"));
    }
    // else if (Cookies.get("USERMOBILENO")) {
    //     setUserMobile(Cookies.get("USERMOBILENO"))
    // }
  }, []);

  const formValidation = () => {
    let errors = {};
    let isValid = true;
    if (!otp1 && !otp2 && !otp3 && !otp4) {
      errors.otp = "Please enter your valid otp";
      isValid = false;
    }
    if (password === "" || !password) {
      errors.password = "Please enter your valid password!";
      isValid = false;
    }
    if (confirmPassword !== password) {
      errors.samepassword = true;
      isValid = false;
    }
    setError(errors);
    return isValid;
  };

  const ResendOTP = async () => {
    setLoading("resend");
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = userEmail.includes("@")
      ? JSON.stringify({
          Email: userEmail,
        })
      : JSON.stringify({
          Mobile: userEmail,
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
        "/api/freelancerapp/rozgaarapi/ResendFreelancerOTP",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (
          result.status === "SUCCESS" &&
          result.message === "Data has been saved successfully!"
        ) {
          setOtpSent(true);
          setTimeout(() => {
            setOtpSent(false);
          }, 1500);
        }
      })
      .catch((error) => setApiError(true))
      .finally(() => setLoading(""));
  };

  const removeOtpInput = (e, identity) => {
    if (e.keyCode === 8) {
      switch (identity) {
        case "1": {
          setOtp1("");
          break;
        }
        case "2": {
          setOtp2("");
          document.getElementById("first").focus();
          setWrongOTp("");
          break;
        }
        case "3": {
          setOtp3("");
          document.getElementById("second").focus();
          setWrongOTp("");
          break;
        }
        case "4": {
          setOtp4("");
          document.getElementById("third").focus();
          setWrongOTp("");
          break;
        }
      }
    }
  };

  const changeCursor = (event, identity) => {
    if (
      parseInt(event.target.value) >= 0 &&
      parseInt(event.target.value) <= 9
    ) {
      switch (identity) {
        case "1": {
          setOtp1(parseInt(event.target.value));
          setWrongOTp("");
          document.getElementById("second").focus();
          break;
        }
        case "2": {
          setOtp2(parseInt(event.target.value));
          setWrongOTp("");
          document.getElementById("third").focus();
          break;
        }
        case "3": {
          setOtp3(parseInt(event.target.value));
          setWrongOTp("");
          document.getElementById("fourth").focus();
          break;
        }
        case "4": {
          setWrongOTp("");
          setOtp4(parseInt(event.target.value));
          break;
        }
      }
    } else {
      console.log("invalid key");
    }
  };

  const resetPassword = async () => {
    setIncorectOTP("");
    setLoading("reset");
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = userEmail.includes("@")
      ? JSON.stringify({
          Otp: `${otp1}${otp2}${otp3}${otp4}`,
          Email: userEmail ? userEmail : "",
          Password: password,
          ConfirmPassword: confirmPassword,
        })
      : JSON.stringify({
          Otp: `${otp1}${otp2}${otp3}${otp4}`,
          Mobile: userEmail ? userEmail : "",
          Password: password,
          ConfirmPassword: confirmPassword,
        });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      process.env.BASE_URL +
        "/api/freelancerapp/rozgaarapi/UserResetPassword",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (
          result.message !== "otp did not matched " &&
          result.status === "Success" &&
          result.status_code === 200
        ) {
          router.push("/login");
        } else if (
          result.status === "Failed" &&
          // result.message === "Both Password should be matched" &&
          result.status_code === 200
        ) {
          setCorrectPassword("Password and Confirm Password does not match");
        } else if (
          result.status === "Success" &&
          result.message === "otp did not matched " &&
          result.status_code === 200
        ) {
          setIncorectOTP("Please enter correct OTP");
        }
      })
      .catch((error) => setApiError(true))
      .finally(() => setLoading(""));
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const logoSchema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://freelancer.rozgaarindia.com/forgotpassword",
    logo: "https://www.sasone.in/IPassets/rozgaarIcon.png",
  };

  return (
    <>
      <LogoSchema data={logoSchema} />
      <RiHeader />
      <div className="bg-white h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 pt-5 pb-7 shadow sm:rounded-lg sm:px-12">
            <h1 className="mt-5 text-3xl font-semibold text-gray-900 text-center">
              Forgot Password?
            </h1>
            <p className="mt-2 mb-3 text-center text-sm font-normal text-gray-700">
              OTP has been send to &nbsp;
              <span className="font-medium text-blue-600 hover:text-blue-500">
                {userEmail}
              </span>
            </p>
            {incorrectOTP && (
              <div className="flex items-center bg-red-100 py-1.5 px-3 mb-3 ">
                <div>
                  <ExclamationTriangleIcon className="h-10 w-10 text-red-500 bg-red-300 p-2 rounded-full" />
                </div>
                <div className="pl-2">
                  <div className="text-base font-semibold">Incorrect OTP</div>
                  <div className="text-sm"> Please enter correct OTP </div>
                </div>
              </div>
            )}
            {apiError && (
              <div className="flex items-center bg-red-100 py-1.5 px-3 mb-3 ">
                <div>
                  <ExclamationTriangleIcon className="h-10 w-10 text-red-500 bg-red-300 p-2 rounded-full" />
                </div>
                <div className="pl-2">
                  <div className="text-base font-semibold">
                    Oops, something went wrong
                  </div>
                  <div className="text-sm">
                    {" "}
                    Please check your internet connectivity{" "}
                  </div>
                </div>
              </div>
            )}
            {(correctPassword || error.samepassword) && (
              <div className="flex items-center bg-red-100 py-3 px-3 mb-5 ">
                <div>
                  <ExclamationTriangleIcon className="h-10 w-10 text-red-500 bg-red-300 p-2 rounded-full" />
                </div>
                <div className="pl-2">
                  <div className="text-base font-semibold">
                    Password do not match
                  </div>
                  <div className="text-sm">
                    {" "}
                    Make sure both password are same{" "}
                  </div>
                </div>
              </div>
            )}
            {otpSent && (
              <div className=" bg-green-100 py-3 px-3 mb-5 flex items-center">
                <div>
                  <CheckCircleIcon className="h-8 w-8 text-green-500 " />
                </div>
                <div className="pl-2">
                  <div className="text-base text-green-600 font-semibold">
                    OTP resend successfully!
                  </div>
                </div>
              </div>
            )}
            <div className="space-y-4" action="#" method="POST">
              <div>
                <div className="mt-1">
                  <div
                    id="otp"
                    class="flex flex-row justify-center text-center px-2 mt-2"
                  >
                    <input
                      class="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="first"
                      maxlength="1"
                      value={otp1}
                      onInput={(e) => {
                        changeCursor(e, "1");
                        setIncorectOTP("");
                      }}
                      onKeyDown={(e) => {
                        removeOtpInput(e, "1");
                        setIncorectOTP("");
                      }}
                      required
                    />
                    <input
                      class="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="second"
                      maxlength="1"
                      value={otp2}
                      onInput={(e) => {
                        changeCursor(e, "2");
                        setIncorectOTP("");
                      }}
                      onKeyDown={(e) => {
                        removeOtpInput(e, "2");
                        setIncorectOTP("");
                      }}
                      required
                    />
                    <input
                      class="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="third"
                      maxlength="1"
                      value={otp3}
                      onInput={(e) => {
                        changeCursor(e, "3");
                        setIncorectOTP("");
                      }}
                      onKeyDown={(e) => {
                        removeOtpInput(e, "3");
                        setIncorectOTP("");
                      }}
                      required
                    />
                    <input
                      class="m-2 border h-10 w-10 text-center form-control rounded"
                      type="text"
                      id="fourth"
                      maxlength="1"
                      value={otp4}
                      onInput={(e) => {
                        changeCursor(e, "4");
                        setIncorectOTP("");
                      }}
                      onKeyDown={(e) => {
                        removeOtpInput(e, "4");
                        setIncorectOTP("");
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  {error.otp}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium "
                >
                  New Password
                </label>
                <div
                  className={`flex mt-1  w-full border outline-none text-sm rounded-sm border-gray-300   ${
                    error.password
                      ? "border-red-500 focus:ring-orange-500 bg-red-100"
                      : "focus:border-blue-500 focus:ring-blue-500 bg-white"
                  }`}
                >
                  <input
                    className={`w-full content-center text-base py-2 border-0 border-gray-300  rounded-y-sm rounded-l-sm focus:ring-2 focus:ring-inset focus:ring-blue-600 ${
                      error.password ? "bg-red-100" : ""
                    }`}
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      error.password = "";
                      setApiError(false);
                    }}
                    id="password"
                    name="password"
                    type={passwordType}
                    autoComplete="off"
                    required
                  />
                  <div
                    className="cursor-pointer  focus:border-blue-600 focus:outline-none p-2 border-0  rounded-r-sm   shadow-sm"
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <BsEyeSlashFill className="h-5 w-5 " />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  {error.password}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium leading-6 "
                >
                  Confirm Password
                </label>
                <div
                  className={`flex mt-1  w-full border outline-none text-sm rounded-sm border-gray-300  `}
                >
                  <input
                    className={`w-full content-center text-base py-2 border-0 border-gray-300  rounded-y-sm rounded-l-sm focus:ring-2 focus:ring-inset focus:ring-blue-600`}
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setCorrectPassword("");
                      setApiError("");
                      error.confirmPassword = "";
                      error.samepassword = "";
                    }}
                    id="password"
                    name="password"
                    value={confirmPassword}
                    type={passwordType}
                    autoComplete="off"
                    required
                  />
                  <div
                    className="cursor-pointer  focus:border-blue-600 focus:outline-none p-2 border-0  rounded-r-sm  text-gray-900 shadow-sm"
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <BsEyeSlashFill className="h-5 w-5 " />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                {loading === "reset" ? (
                  <div className="flex justify-center">
                    <LoadingBtn />
                  </div>
                ) : (
                  <div
                    className="mt-4 mb-2"
                    onClick={() => {
                      formValidation() && resetPassword();
                    }}
                  >
                    <button
                      className="w-full flex justify-center bg-yellow-500 text-black py-2 rounded-md tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg cursor-pointer transition ease-in duration-300"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
              {loading === "resend" ? (
                <div className="flex justify-center">
                  <button
                    type="button"
                    class="flex mt-1 items-center justify-center mx-auto"
                    disabled
                  >
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="mr-2 w-5  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                    </div>
                  </button>
                </div>
              ) : (
                <div
                  className="flex items-center justify-center mt-6"
                  onClick={() => ResendOTP()}
                >
                  <div className="text-sm">
                    <div className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                      Resend otp
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default forgotpassword;
