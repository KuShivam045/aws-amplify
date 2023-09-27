import { useEffect, useState } from "react";
import { countryCode } from "../JsonFiles/ContryCodes";
import classes from "./SignUp.module.css";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import LoadingBtn from "../components/ButtonComponents/LoadingBtn";
import { BsEyeSlashFill } from "react-icons/bs";
import { EyeIcon } from "@heroicons/react/20/solid";
import RedirectFreelancer from "../components/ModalComponents/RedirectFreelancer";
import RiTextInputs from "../components/MainComponents/RiTextInputs";
import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";

const signup = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("India");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState([]);
  const [dialCode, setDialCode] = useState("+91");
  const [checkMObileVal, setCheckMObileVal] = useState(false);
  const [countryObject, setCountryObject] = useState();
  const [error, setError] = useState({});
  const [isExist, setAlreadyExist] = useState();
  const [passwordType, setPasswordType] = useState("password");

  const [CountryCode, setCountryCode] = useState(countryCode[0].dial_code);
  const [modalOpen, setModalOpen] = useState(false);
  const [term] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (mobile.length >= 10) {
      setCheckMObileVal(true);
    }
    if (mobile.length < 10) {
      setCheckMObileVal(false);
    }
  }, [mobile]);
  
  useEffect(() => {
    if (countryObject) {
      setDialCode(countryObject.dial_code);
    }
  }, [countryObject]);
  useEffect(() => {}, [country]);

  const handleMobileChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setMobile(e.target.value);
    }
  };

  const UserRegistration = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Country: country,
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: mobile ? mobile : "",
      CountryCode: CountryCode,
      Password: password,
      ConfirmPassword: password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      process.env.BASE_URL +
        "/api/freelancerapp/rozgaarapi/UserFreelancerSignup",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          Cookies.set("USERMOBILENO", result.data.Mobile);
          Cookies.set("USEREMAIL", result.data.Email);
          Cookies.set("FirstName", result.data.FirstName);
          Cookies.set("LastName", result.data.LastName);
          Cookies.set("UserName", result.data.UserName);
          Cookies.set("IsLoginType", "Freelancer");
          if (country === "India") {
            Cookies.set("UserOtp", result.data.Mobile);
            router.push("/verifyeotp");
          } else {
            Cookies.set("UserOtp", result.data.Email);
            router.push("/verifyotp");
          }
        } else if (result.data === "Mobile OR Email exist") {
          setAlreadyExist(true);
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let regEmail =
    /^(([^<>()/.,;:\s@"]+(\.[^<>()/.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameregx = /^.*[a-zA-Z]+.*$/;

  const formValidation = () => {
    let errors = {};
    let isValid = true;

    if (!country || country === "") {
      errors.country = "Please select your country";
      isValid = false;
    }
    if (!firstName || firstName === "" || !nameregx.test(firstName)) {
      errors.firstName = "Please enter your first name";
      isValid = false;
    }
    // if (!firstName.match(/^[a-z ,.'-]+$/i)) {
    //     errors.firstName = "Please enter a valid first name";
    //     isValid = false;
    //   }
    if (!lastName || lastName === "" || !nameregx.test(lastName)) {
      errors.lastName = "Please enter your last name";
      isValid = false;
    }
    // if (!lastName.match(/^[a-z ,.'-]+$/i)) {
    //     errors.lastName = "Please enter a valid first name";
    //     isValid = false;
    //   }
    if (!email || email === "" || !regEmail.test(email)) {
      errors.email = "Please enter a valid email address ";
      isValid = false;
    }

    if (
      (!mobile || mobile === "" || mobile.length < 10) &&
      country === "India"
    ) {
      errors.mobile = "Please enter a valid mobile number ";
      isValid = false;
    }
    if (!password || password === "" || password.length < 6) {
      errors.password = "Password must be of 6 characters atleast ";
      isValid = false;
    }

    if (!term) {
      errors.term =
        "By creating an account, you agree to receive communication and accept the Terms of Service and Privacy Policy";
      isValid = false;
    } else {
    }
    setError(errors);
    return isValid;
  };

  const onlyNumericMobile = (e) => {
    var reg = /^-?\d+$/;
    reg.test(e.target.value) || e.target.value === ""
      ? setMobile(e.target.value)
      : console.log("");
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      formValidation()
        ? UserRegistration()
        : console.log("something went wrong");
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
     <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Create an Employer account | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/signup" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Freelance Job Posting Website, hire professional freelancers to work remotely,onsite or hybrid"
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
          content="Create an Employer account | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Freelance Job Posting Website, hire professional freelancers to work remotely,onsite or hybrid"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/signup"
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
          content="Create an Employer account | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Freelance Job Posting Website, hire professional freelancers to work remotely,onsite or hybrid"
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
      {modalOpen && (
        <RedirectFreelancer setModalOpen={setModalOpen} modalOpen={modalOpen} href="https://freelancer.rozgaarindia.com/signup"/>
      )}
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <div className="relative py-10 flex items-center justify-center bg-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full p-5 sm:py-5 sm:px-10 bg-white rounded-xl">
          <div className="text-center">
            <h1 className="mt-5 text-3xl font-semibold text-gray-900">
              Create a free account
            </h1>
            {/* <div className={classes.loginLink}>Already have an account?<a href="/login" className={classes.terms_link}> Login</a></div> */}
            <p className="mt-1 mb-6 text-center text-sm font-normal text-gray-700">
              Already have an account? &nbsp;
              <a
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Login
              </a>
            </p>
            <p className="text-gray-700">or</p>
            <div className={classes.input_container}>
              <RiTextInputs
                input={"CountryDropdown"}
                placeHolder={"Country"}
                displayData={countryCode}
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                setCountry={setCountry}
                setCountryObject={setCountryObject}
              />
              <div className={classes.ErrorMessage}>{error.country}</div>
              <div className={classes.inputFieldsWrapper}>
                <div className="my-4">
                  <RiTextInputs
                    input={"SingleLineInput"}
                    type={"text"}
                    onInput={() => {
                      error.firstName = " ";
                    }}
                    placeHolder={"First Name"}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    onKeyPress={handleSubmit}
                    label="First Name"
                  />
                  <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                    {error.firstName}
                  </div>
                </div>

                <div className="my-4">
                  <RiTextInputs
                    input={"SingleLineInput"}
                    type={"text"}
                    onInput={() => {
                      error.lastName = " ";
                    }}
                    placeHolder={"Last Name"}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    onKeyPress={handleSubmit}
                    label="Last Name"
                  />

                  <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                    {error.lastName}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                </div>
                <div className="flex items-center">
                  <div className="w-2/5 sm:w-2/6">
                    <select
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="block text-base w-full rounded-sm border-gray-300 py-2 px-2 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-500 mt-1"
                    >
                      {countryCode.map((item) => (
                        <option value={item.dial_code}>{item.dial_code}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder={
                      country === "India"
                        ? "Phone Number"
                        : "Phone Number(optional)"
                    }
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => {
                      onlyNumericMobile(e);
                      error.mobile = "";
                    }}
                    className={`mt-1 ml-2 w-full border outline-none text-base rounded-sm border-gray-300 py-2 px-3 flex flex-row ${
                      error.mobile
                        ? "border-red-600 focus:ring-orange-500 bg-red-100"
                        : "focus:border-blue-500 focus:ring-blue-500 border-b bg-white focus:ring-1"
                    }`}
                    pattern="^[6789][0-9]{9}$"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  {error.mobile}
                </div>
              </div>
              <div className="my-4">
                <RiTextInputs
                  input={"SingleLineInput"}
                  type={"email"}
                  onInput={() => {
                    error.email = " ";
                  }}
                  placeHolder={"Email"}
                  onChange={(e) => {
                    let keyword = e.target.value.toLowerCase();
                    var re = /^[a-z@A-Z.0-9_]*$/;
                    if (keyword === "" || re.test(keyword)) {
                      setEmail(keyword);
                    }
                  }}
                  onKeyPress={handleSubmit}
                  value={email}
                  label="Email"
                />
                <div className={classes.ErrorMessage}>{error.email}</div>
              </div>
              {/* <RiTextInputs
                                input={"password"}
                                placeHolder={"Create Password"}
                                onInput={() => { error.password = " " }}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                onKeyPress={handleSubmit}
                            />
                            <div className={classes.ErrorMessage}>{error.password}</div> */}

              <div className="mt-4 content-center">
                <div className="text-base font-semibold  tracking-wide text-left">
                  Password
                </div>
                <div className="flex">
                  <input
                    className="w-full content-center text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-y-md rounded-l-md"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      error.password = "";
                    }}
                    id="password"
                    name="password"
                    type={passwordType}
                    autoComplete="current-password"
                    required
                    value={password}
                  />
                  <span
                    className="cursor-pointer border p-2 rounded-y-md rounded-r-md border-gray-300  text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <BsEyeSlashFill className="h-6 w-6" />
                    ) : (
                      <EyeIcon className="h-6 w-6" />
                    )}
                  </span>
                </div>
                <div className={classes.ErrorMessage}>{error.password}</div>
              </div>
              {isExist && (
                <div className={classes.error_message}>
                  <div>{"Email or Mobile number already exist"}</div>
                </div>
              )}
            </div>
            <div className={classes.ActionBtn}>
              <div>
                {isLoading ? (
                  <div className="mt-4 mb-2">
                    <LoadingBtn />
                  </div>
                ) : (
                  // <ActionButton buttonText={"Signup"} />
                  <div
                    className="mt-4 mb-2"
                    onClick={(e) => {
                      formValidation()
                        ? UserRegistration()
                        : console.log("Something's wrong");
                    }}
                  >
                    <button
                      className="w-full flex justify-center bg-blue-500 text-gray-100 py-2 rounded-md tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                    >
                      Signup
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-2">
              By creating an account, you agree to receive communication and
              accept the &nbsp;
              <a
                href="/terms"
                target="_blank"
                className="text-blue-500"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacyPolicy"
                target="_blank"
                className="text-blue-500"
              >
                Privacy Policy.
              </a>
            </div>

            <div
              className="cursor-pointer text-emerald-600 hover:text-emerald-500 font-semibold"
              onClick={() => setModalOpen(true)}
            >
              Signup as Freelancer
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default signup;
