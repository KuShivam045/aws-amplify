import React, { useState } from "react";
import SuccessMessage from "../components/ModalComponents/SuccessMessage";
import LoadingBtn from "../components/ButtonComponents/LoadingBtn";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { useRouter } from "next/router";
import { countryCode } from "../JsonFiles/ContryCodes";
import BreadCrumb from "../components/MainComponents/BreadCrumb";
import Footer from "../components/Footer";
import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";
import RiTextInputs from "../components/MainComponents/RiTextInputs";

const feedbackcomplaint = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [bugType, setBugType] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [screenshort, setScreenshort] = useState("");
  const [error, setError] = useState({});
  const [checkMObileVal, setCheckMObileVal] = useState(false);
  const [CountryCode, setCountryCode] = useState(countryCode[0].dial_code);

  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  const handleMobileChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMobile(e.target.value);
    }
    if (e.target.value.length >= 10) {
      setCheckMObileVal(true);
    }
    if (e.target.value.length < 10) {
      setCheckMObileVal(false);
    }
  };

  const ContactDetails = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    var formdata = new FormData();
    formdata.append("Name", name);
    formdata.append("Mobile", mobile);
    formdata.append("Email", email);
    formdata.append("BugType", bugType);
    formdata.append("Subject", subject);
    formdata.append("Message", message);
    formdata.append("Screenshort", screenshort);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(process.env.BASE_URL + "/api/rozgaarapi/ReportaBug", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          setModalShow(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const Screenshot = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setScreenshort(e.target.files[0]);
    }
  };
  const formValidation = () => {
    let isValid = true;
    let errors = {};
    if (!name || name === "") {
      isValid = false;
      errors.name = "Please enter your full name";
    }
    if (!mobile || mobile === "") {
      isValid = false;
      errors.mobile = "Please enter your mobile number";
    }
    if (!email || email === "") {
      isValid = false;
      errors.email = "Please enter your valid email";
    }
    if (!bugType || bugType === "") {
      isValid = false;
      errors.bugType = "Please select your field";
    }
    if (!subject || subject === "") {
      isValid = false;
      errors.subject = "Please enter your subject";
    }
    if (!message || message === "") {
      isValid = false;
      errors.message = "Please enter your message";
    }
    setError(errors);
    return isValid;
  };


  const pages = [
    {
      name: "Report a bug",
      href: "https://www.rozgaarindia.com/feedback-complaint",
      current: true,
    },
  ];
  const onlyNumericMobile = (e) => {
    var reg = /^-?\d+$/;
    reg.test(e.target.value) || e.target.value === ""
      ? setMobile(e.target.value)
      : console.log("");
  };
  return (
    <div>
        <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Help us improve | Rozgaar
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/feedback-complaint" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Describe the issue you are facing in detail with screenshot, so our expert team can resolve in no time."
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
          content="Help us improve | Rozgaar"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Describe the issue you are facing in detail with screenshot, so our expert team can resolve in no time."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/feedback-complaint"
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
          content="Help us improve | Rozgaar"
        />
        <meta
          property="twitter:description"
          content="Describe the issue you are facing in detail with screenshot, so our expert team can resolve in no time."
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
      <BreadCrumb pages={pages} />
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="w-full">
          {modalShow && (
            <SuccessMessage
              Alert={"success"}
              onClick={() => {
                router.push("/");
                setModalShow(false);
              }}
              success={"We have received your message"}
              text={"Will get in touch as soon as possible"}
            />
          )}
          <div className="">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg leading-6 text-gray-700 mt-2">
              We're always happy to help. Drop us a line, we will be in touch
              asap
            </p>
            <div className="mt-6">
              <div className="pb-3">
                <RiTextInputs
                  input={"SingleLineInput"}
                  type={"text"}
                  label={"Name"}
                  placeHolder={"Enter your name"}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  {error.name}
                </div>
              </div>
              <div className="pb-3">
                <RiTextInputs
                  input={"SingleLineInput"}
                  type={"email"}
                  label={"Email"}
                  placeHolder={"Enter your email"}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  {error.email}
                </div>
              </div>

              <div className="pb-3">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                </div>
                <div className="flex items-center">
                  <div className="w-[130px]">
                    <select
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="block text-base w-full rounded-md border-gray-300 py-2 px-2 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-500 mt-1"
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
                    placeholder={"Enter mobile number"}
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => {
                      handleMobileChange(e);
                      error.mobile = "";
                    }}
                    className={`mt-1 ml-2 w-full border outline-none text-base rounded-md border-gray-300 py-2 px-3 flex flex-row ${
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
              <div className="pb-3">
                <RiTextInputs
                  input={"Dropdown"}
                  type={"text"}
                  label={"Select Bugtype"}
                  onChange={(e) => setBugType(e.target.value)}
                  value={bugType}
                />
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  {error.bugType}
                </div>
              </div>
              <div className="pb-3">
                <RiTextInputs
                  input={"SingleLineInput"}
                  type={"text"}
                  label={"Subject"}
                  placeHolder={"Enter your Subject"}
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
                <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                  {error.name}
                </div>
              </div>
              <RiTextInputs
                input={"MultiLineInput"}
                type={"text"}
                label={"Write Message"}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeHolder={"Type your message here"}
              />
              <div className="block font-semibold text-sm mt-1 ml-1 text-left text-red-500">
                {error.message}
              </div>
              <RiTextInputs
                input={"file_screemshot"}
                type={"upload"}
                label={"Upload (Optional)"}
                onChange={Screenshot}
                value={screenshort}
                icon={
                  typeof screenshort === "object" ? (
                    <AiFillCheckCircle size="25" color="green" />
                  ) : (
                    <BsLink45Deg size="25" />
                  )
                }
              />
            </div>
            {isLoading ? (
              <div className="mt-4 mb-2 w-full lg:w-[20%] mx-auto">
                <LoadingBtn />
              </div>
            ) : (
              <div
                className="my-6 mb-2 flex justify-center"
                onClick={() => {
                  formValidation()
                    ? ContactDetails()
                    : console.log("Something's wrong");
                }}
              >
                <button
                  className="w-full lg:w-[20%] flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Submit
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

export default feedbackcomplaint;
