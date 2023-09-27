import { useState } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { BsEyeSlashFill } from "react-icons/bs";
import LoadingBtn from "../components/ButtonComponents/LoadingBtn";
import { EyeIcon } from "@heroicons/react/24/outline";
import RedirectFreelancer from "../components/ModalComponents/RedirectFreelancer";
import Cookies from "js-cookie";
import Head from "next/head";
import RiHeader from "../components/MainComponents/RiHeader";

const login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [credientialCheck, setCredientialCheck] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();
  const [messageModal, setMessageModal] = useState(false);

  const redirectUrl = Cookies.get('RedirectUrl');

  const formValidation = () => {
    let errors = {};
    let isValid = true;

    if (!email || email === "") {
      errors.email = "Please enter your Email / Mobile number";
      isValid = false;
    }
    if (!password || password === " ") {
      errors.password = "Please enter your password";
      isValid = false;
    } else {
    }
    setError(errors);
    return isValid;
  };

  const UserLogin = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = email.includes("@")
      ? JSON.stringify({
          Password: password,
          Email: email,
        })
      : JSON.stringify({
          Password: password,
          Mobile: email,
        });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch( process.env.BASE_URL + "/api/rozgaarapi/Login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          Cookies.set("Client_userLoggedIn", true);
          Cookies.set("Client_IsLoginType", "Client");
          Cookies.set("Client_userID", result.data.UserId);
          Cookies.set("Client_USERMOBILENO", result.data.Mobile);
          Cookies.set("Client_USEREMAIL", result.data.Email);
          Cookies.set("Client_FirstName", result.data.FirstName);
          Cookies.set("Client_LastName", result.data.LastName);
          Cookies.set("Client_UserName", result.data.UserName);
          Cookies.set("Client_ProfilePicture", result.data.ProfilePicture);
          router.push(redirectUrl ? redirectUrl : "/employer-workplace");
          // router.push("/employer-workplace");
          Cookies.remove('RedirectUrl');
        } else {
          setCredientialCheck(false);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div>
       <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Employer Login | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/login" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Find & Hire Freelancer for your professional requirement. Post your freelance job requirement for free."
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
          content="Employer Login | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Find & Hire Freelancer for your professional requirement. Post your freelance job requirement for free."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/login"
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
          content="Employer Login | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Find & Hire Freelancer for your professional requirement. Post your freelance job requirement for free."
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
     <RiHeader/>
      {modalOpen && (
        <RedirectFreelancer setModalOpen={setModalOpen} modalOpen={modalOpen} href="https://freelancer.rozgaarindia.com/signup"/>
      )}
      <div className="relative py-10 flex items-center justify-center bg-gray-100  px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-lg w-full p-5 sm:py-5 sm:px-10 bg-white rounded-xl drop-shadow-lg">
          <div className="text-center">
            <h1 className="mt-5 text-3xl font-bold text-gray-900">
              Welcome Back!
            </h1>
            <p className="mt-2 text-base text-gray-900 font-display tracking-wide font-semibold">
              Please sign in to your account
            </p>
            <p className="mt-1 mb-6 text-center text-sm font-normal text-gray-700">
              Don't have an account? &nbsp;
              <a
                href="/signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </a>
            </p>
          </div>
          <div className="mt-5">
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <label className="text-base font-semibold  tracking-wide">
                Email/Mobile
              </label>
              <input
                className=" w-full text-sm py-2.5 border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                placeholder="Enter email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessageModal(false);
                  setCredientialCheck(true);
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
            </div>
            <div className="mt-6 content-center">
              <label className="text-base font-semibold  tracking-wide">
                Password
              </label>
              <div className="flex">
                <input
                  className="w-full content-center text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-y-md rounded-l-md"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setCredientialCheck(true);
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
            </div>
            <div
              style={{ color: "#ff0033" }}
              className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500"
            >
              {error.password}
            </div>
            {!credientialCheck && (
              <div
                style={{ color: "#ff0033" }}
                className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500"
              >
                <div>Your login details and password do not match</div>
              </div>
            )}
            <div className="flex items-center justify-between ">
              <div className="flex items-center"></div>
              <div className="text-sm">
                <a
                  href="/loginwithemailotp"
                  className="font-medium text-blue-500 hover:text-blue-500"
                >
                  Login with OTP
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
                onClick={() => formValidation() && UserLogin()}
              >
                <button
                  className="w-full flex justify-center bg-blue-500 text-zinc-100 py-2 rounded-md tracking-wide
                                font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Sign In
                </button>
              </div>
            )}
            {messageModal && session && (
              <div className="text-red-500 pl-2">
                Your email does not exit.&nbsp;
                <span className="text-blue-600 hover:text-blue-500 cursor-pointer">
                  <a href="/user-registration/newsignup">Sign up</a>
                </span>
                &nbsp;or Login with another way.
              </div>
            )}
          </div>

          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <a
              href="/forgetpasswordbyemail"
              className="text-blue-500 hover:text-blue-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Forgot password?
            </a>
          </p>
          {/* <p className="flex flex-col items-center justify-center mt-1 text-center text-md text-gray-500 font-bold">
            <div
              className="text-emerald-500 hover:text-emerald-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Login as a Freelancer
            </div>
          </p> */}
          <div
            className="flex flex-col items-center justify-center mt-1 text-center text-md font-bold text-emerald-500 hover:text-emerald-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
            onClick={() => setModalOpen(true)}
          >
            Login as a Freelancer
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  
  if (UserLoggedIn) {
    return {
      props: {},
      redirect: { destination: "/employer-workplace" },
    };
  }

  return {
    props: {
      UserLoggedIn
    },
  };
}

export default login;
