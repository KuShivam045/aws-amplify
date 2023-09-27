import { useRouter } from "next/router";
import Footer from "../components/Footer";
import BreadCrumb from "../components/MainComponents/BreadCrumb";

import { useState } from "react";
import SubmitModal from "../components/ModalComponents/SubmitModal";
import ActionButton from "../components/ButtonComponents/ActionButton";
import RiHeader from "../components/MainComponents/RiHeader";
import Cookies from "js-cookie";
import Head from "next/head";
import RiTextInputs from "../components/MainComponents/RiTextInputs";


const freejobalert = (props) => {
  const [checkedType, setCheckedType] = useState("ALL JOBS");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  const kycFormValidation = () => {
    let errors = {};

    let isValid = true;

    if (!email || email === "" || !email.includes("@")) {
      errors.email = "Please enter your valid email";
      isValid = false;
    }
    setError(errors);
    return isValid;
  };

  const Subscriber = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Email: email,
      JobType: checkedType,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL +
        "/api/freelancerapp/rozgaarapi/FreelancerSubscriber",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setModalShow(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const Skills = [
    { skill: "WEB DEVELOPMENT" },
    { skill: "ANDROID DEVELOPMENT" },
    { skill: "IOS DEVELOPMENT" },
    { skill: "FLUTTER DEVELOPMENT" },
    { skill: "UI/UX DESIGN" },
    { skill: "GRAPHIC DESIGN" },
    { skill: "VIDEO EDITING" },
    { skill: "2D/3D ANIMATION" },
    { skill: "CUSTOMER SUPPORT" },
    { skill: "DATA ANALYST" },
    { skill: "SOCIAL MEDIA HANDLING" },
    { skill: "USER TESTER" },
  ];
  const pages = [
    {
      name: "Job Alert",
      href: "https://www.rozgaarindia.com/free-job-alert",
      current: true,
    },
  ];
  return (
    <div>
        <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Free Job Alerts for freelancing, remote work, flexible work  | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/free-job-alert" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="https://www.rozgaarindia.com Freelance job site is for Naukri, IT Jobs and 1000+ skills. Get latest job alerts in your email."
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
          content="Free Job Alerts for freelancing, remote work, flexible work  | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="https://www.rozgaarindia.com Freelance job site is for Naukri, IT Jobs and 1000+ skills. Get latest job alerts in your email."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/free-job-alert"
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
          content="Free Job Alerts for freelancing, remote work, flexible work  | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="https://www.rozgaarindia.com Freelance job site is for Naukri, IT Jobs and 1000+ skills. Get latest job alerts in your email."
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
      {modalShow && (
        <SubmitModal
          success={"We have received your message"}
          text={"Will get in touch as soon as possible"}
          onClick={() => router.push("/")}
        />
      )}
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <BreadCrumb pages={pages} />
      <div>
        <div className="bg-gradient-to-b from-[#fff] to-[#f3c9ae] py-10">
          <h1 className="text-2xl font-bold text-center px-8">
            Get free job alerts in your inbox
          </h1>
          <div className="grid grid-cols-2 w-full lg:w-[38%] mx-auto px-10 py-10 lg:px-32 gap-4 text-center">
            <RiTextInputs
              input="JobAlertCheckBox"
              value="All JOBS"
              checked={checkedType === "ALL JOBS"}
              onClick={() => setCheckedType("ALL JOBS")}
            />
            <RiTextInputs
              input="JobAlertCheckBox"
              value="ON-SITE JOBS"
              checked={checkedType === "ON-SITE JOBS"}
              onClick={() => setCheckedType("ON-SITE JOBS")}
            />

            <RiTextInputs
              input="JobAlertCheckBox"
              value="HYBRID JOBS"
              checked={checkedType === "HYBRID JOBS"}
              onClick={() => setCheckedType("HYBRID JOBS")}
            />
            <RiTextInputs
              input="JobAlertCheckBox"
              value="REMOTE JOBS"
              checked={checkedType === "REMOTE JOBS"}
              onClick={() => setCheckedType("REMOTE JOBS")}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center px-6">
            <div className="w-full lg:w-[30%] mt-6">
              <div className="">
                <RiTextInputs
                  input="SingleLineInput"
                  placeHolder={"Enter your email"}
                  value={email}
                  onInput={() => {
                    error.email = " ";
                  }}
                  onChange={(e) => {
                    let keyword = e.target.value.toLowerCase();
                    var re = /^[a-z@A-Z.0-9_]*$/;
                    if (keyword === "" || re.test(keyword)) {
                      setEmail(keyword);
                    }
                  }}
                />
              </div>
              <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                {error.email}
              </div>
            </div>

            <ActionButton
              buttonType="small"
              buttonText="Submit"
              isLoading={isLoading}
              onClick={() => {
                kycFormValidation() ? Subscriber() : <></>;
              }}
            />
          </div>

          <p className="text-lg font-semibold text-center">
            Once you suscribe to our latest job alert you will start receiving
            jobs alert in your email
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-8">
          <div>
            <h2 className="text-2xl font-semibold text-center">
              Right job for you
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
              <div className="flex gap-3 lg:items-center bg-[#fff3f3] p-2 rounded-md">
                <div>
                  <img
                    src="/assets/JobAlerts/Check.svg"
                    alt="Check"
                    className="w-18 h-18 lg:w-16 lg:h-16 bg-white p-2 rounded-md"
                  />
                </div>
                <div>
                  <div className="text-blue-500 text-lg font-semibold">
                    One-Time
                  </div>
                  <div className="text-base font-semibold">
                    Hire Freelancers for one-time gig work
                  </div>
                  <div className="text-sm font-semibold">
                    E.g. Looking for a graphic designer to create a logo for my
                    startup
                  </div>
                </div>
              </div>

              <div className="flex gap-3 lg:items-center bg-[#edffdc] p-2 rounded-md">
                <div>
                  <img
                    src="/assets/JobAlerts/Date.svg"
                    alt="Date"
                    className="w-18 h-18 lg:w-16 lg:h-16 bg-white p-2 rounded-md"
                  />
                </div>
                <div>
                  <div className="text-[#005131] text-lg font-semibold">
                    Monthly-Basis
                  </div>
                  <div className="text-base font-semibold">
                    Hire Freelancers on monthly term
                  </div>
                  <div className="text-sm font-semibold">
                    E.g. Need a Graphic Designer to design Instagram posts
                    everyday for 2
                  </div>
                </div>
              </div>

              <div className="flex gap-3 lg:items-center bg-[#dffcff] p-2 rounded-md">
                <div>
                  <img
                    src="/assets/JobAlerts/Document.svg"
                    alt="Document"
                    className="w-18 h-18 lg:w-16 lg:h-16 bg-white p-2 rounded-md"
                  />
                </div>
                <div>
                  <div className="text-[#076009] text-lg font-semibold">
                    Contract-Work
                  </div>
                  <div className="text-base font-semibold">
                    Hire for a short-term or a long term project
                  </div>
                  <div className="text-sm font-semibold">
                    E.g. I want a React website developer to work on an
                    E-commerce Project
                  </div>
                </div>
              </div>

              <div className="flex gap-3 lg:items-center bg-[#e2ecff] p-2 rounded-md">
                <div>
                  <img
                    src="/assets/JobAlerts/Rupey.svg"
                    alt="Rupey"
                    className="w-18 h-18 lg:w-16 lg:h-16 bg-white p-2 rounded-md"
                  />
                </div>
                <div>
                  <div className="text-[#e7b200] text-lg font-semibold">
                    On-Commision
                  </div>
                  <div className="text-base font-semibold">
                    Hire Freelancers on commission basis
                  </div>
                  <div className="text-sm font-semibold">
                    E.g. We are looking for a POS agents for providing verified
                    leads
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="">
              <div className="bg-[#ececec] w-20 h-20 rounded-full">
                <div className="pl-[30px] pt-[14px] text-base font-semibold w-[150px]">
                  REMOTE WORK
                </div>
                <div className="w-[112px] ml-[30px] border-b-2 border-[#ffbfbf]"></div>
                <div className="mt-1 ml-[80px] w-[230px] lg:w-[280px]">
                  Freelancer can work from anywhere
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#ececec] w-20 h-20 rounded-full">
                <div className="pl-[30px] pt-[14px] text-base font-semibold w-[150px]">
                  HYBRID WORK
                </div>
                <div className="w-[112px] ml-[30px] border-b-2 border-[#b0fef8]"></div>
                <div className="mt-1 ml-[80px] w-[230px] lg:w-[280px]">
                  Freelancer will work on site and off site
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#ececec] w-20 h-20 rounded-full">
                <div className="pl-[30px] pt-[14px] text-base font-semibold w-[150px]">
                  ONSITE WORK
                </div>
                <div className="w-[112px] ml-[30px] border-b-2 border-[#dcc6f5]"></div>
                <div className="mt-1 ml-[80px] w-[230px] lg:w-[280px]">
                  Freelancer can come to work in person
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <h2 className="text-2xl font-semibold text-center">
              Apply on the latest Freelance jobs
            </h2>
            <div className="border-b-4 border-black w-32 mx-auto mt-5"></div>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {Skills.map((item, index) => {
                return (
                  <a
                    href="/par-stepfirst"
                    onClick={()=>Cookies.set("RedirectUrl",router.asPath)}
                    key={index}
                    className="bg-[#dddddd] py-2 px-2 text-sm font-semibold rounded-lg"
                  >
                    {item.skill}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/freelance-job-posting">
              <ActionButton buttonType="small" buttonText="Apply Now" />
            </a>
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

  // if (!context.req.cookies.Client_userLoggedIn) {
  //   return {
  //     props: {},
  //     redirect: { destination: "/login" },
  //   };
  // }

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}

export default freejobalert;
