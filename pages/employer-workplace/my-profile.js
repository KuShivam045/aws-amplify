import Footer from "../../components/Footer";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import NewFreelancerDashBoard from "../../components/DashBoardComponents/NewFreelancerDashboard";
import ProfileLayout from "../../components/ProfileLayoutComponent/ProfileLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {
  AiOutlineCloudUpload,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import {
  FaPen,
  FaTwitterSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import countries from "../../JsonFiles/countries.json";
import states from "../../JsonFiles/states.json";
import RiHeader from "../../components/MainComponents/RiHeader";
import SuccessMessage from "../../components/ModalComponents/SuccessMessage";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import Head from "next/head";
import RiTextInputs from "../../components/MainComponents/RiTextInputs";
import ConfirmModal from "../../components/ModalComponents/ConfirmModal";
import ProfileVerifyOtp from "../../components/ModalComponents/ProfileVerifyOtp";
import ProfileVerified from "../../components/ModalComponents/ProfileVerified";
import SocialHandles from "../../components/ModalComponents/SocialHandles";
import CustomLoader from "../../components/MainComponents/CustomLoader";

const myprofile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [socialLinks, setSocialLinks] = useState("");
  const [dialCode, setDialCode] = useState("+91");
  const [checkMObileVal, setCheckMObileVal] = useState(false);
  const [country, setCountry] = useState("");
  const [Whatsapp, setWhatsapp] = useState([]);
  const [whatsAppDialCode, setWhatsAppDialCode] = useState("+91");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);
  const [cityLoading, setCityLoading] = useState(false);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState();
  const [error, setError] = useState({});
  const [pinCode, setPinCode] = useState();
  const [isAlternativeMobile, setIsAlternativeMobile] = useState(false);
  const [isAlternativeEmail, setIsAlternativeEmail] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isCheckMObile, setIsCheckMobile] = useState(false);
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [checkWhatsAppMObile, setCheckWhatsAppMObile] = useState();
  const [checkAlternateMobile, setCheckAlternateMobile] = useState();
  const [alternateMobile, setAlternateMobile] = useState([]);
  const [alternateDialCode, setAlternateDialCode] = useState("+91");
  const [alternateEmail, setAlternateEmail] = useState("");
  const [tabStatus, setTabStatus] = useState("Personal");
  const [profilePicture, setProfilePicture] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [profile, setProfile] = useState("");
  const [updateLocation, setUpdateLocation] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [verifyModalShow, setVerifyModalShow] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [contactType, setContactType] = useState("");
  const [resentOtpLoading, setResentOtpLoading] = useState();
  const [priEmail, setPriEmail] = useState("");
  const [priMobile, setPriMobile] = useState("");
  const [getInfoLoading, setIsGetInfoLoading] = useState("");
  const [socialFieldsShow, setSocialFieldsShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [isMobile, setIsMobile] = useState("");

  const [cancelModal, setCancelModal] = useState(false);
  const [profileVerifiedModal, setProfileVerifiedModal] = useState(false);
  const [socialHandles, setSocialHandles] = useState(false);

  let userID = Cookies.get("Client_userID");
  const [otpSent, setOtpsent] = useState(false);
  let router = useRouter();

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  useEffect(() => {
    isCheckMObile &&
      alternateMobile &&
      ResentOtp(alternateMobile, "primaryMobile");
  }, [isCheckMObile]);

  useEffect(() => {
    isCheckEmail && alternateEmail && ResentOtp(alternateEmail, "primaryEmail");
  }, [isCheckEmail]);

  useEffect(() => {
    getClient();
    // pageViewTracker();
  }, []);

  const checkTab = (status) => {
    setTabStatus(status);
  };

  const UpdateClient = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    var formdata = new FormData();
    formdata.append("UserId", userID);
    formdata.append("AlternateEmail ", alternateEmail);
    formdata.append("WhatsAppNumber ", Whatsapp ? Whatsapp : null);
    formdata.append(
      "AlternateMobile",
      alternateMobile ? alternateMobile : null
    );
    formdata.append("DOB ", dob);
    formdata.append("Gender ", gender);
    formdata.append("Pincode ", pinCode);
    formdata.append("City ", city);
    formdata.append("State ", state);
    formdata.append("CountryCode ", dialCode);
    formdata.append("CountryCodeAM ", alternateDialCode || "+91");
    formdata.append("CountryCodeWN ", whatsAppDialCode || "+91");
    formdata.append("Country ", country);
    formdata.append("Address ", address);
    formdata.append("Mobile ", mobile ? mobile : null);
    formdata.append("Email ", userEmail);
    formdata.append("LastName ", lastName);
    formdata.append("FirstName ", firstName);
    formdata.append("ProfilePicture ", profilePicture);
    formdata.append("SetAsPriEmail  ", priEmail === "1" ? priEmail : "");
    formdata.append("SetAsPriMobile  ", priMobile === "1" ? priMobile : "");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/ClientProfile",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setModalShow(true);
          Cookies.set("Client_ProfilePicture", result.data.ProfilePicture);
        } else {
          setErrorMessage(result.Reason);
          setErrorShow(true);
        }
      })
      .catch((error) => {
        setErrorMessage("Something went wrong, please contact support!");
        setErrorShow(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getClient = () => {
    setIsGetInfoLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      UserId: userID,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/ClientProfile",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setFirstName(result.data.FirstName);
          setLastName(result.data.LastName);
          setUserName(result.data.FirstName + " " + result.data.LastName);
          setUserEmail(result.data.Email);
          setDialCode(result.data.CountryCode);
          setMobile(result.data.Mobile);
          setIsMobile(result.data.Mobile);
          setAlternateMobile(result.data.AlternateMobile);
          setAlternateDialCode(result.data.CountryCodeAM);
          setAlternateEmail(result.data.AlternateEmail);
          setWhatsapp(result.data.WhatsAppNumber);
          setWhatsAppDialCode(result.data.CountryCodeWN);
          setDob(result.data.DOB);
          setGender(result.data.Gender);
          setAddress(result.data.Address);
          setPinCode(result.data.PinCode);
          setCountry(result.data.Country);
          setState(result.data.State);
          setCity(result.data.City);
          setProfile(result.data.ProfilePicture);
          setSocialLinks(result.data);
        } else {
          setErrorMessage(result.Reason);
          setErrorShow(true);
        }
      })
      .catch((error) => {
        setErrorMessage("Something went wrong, please contact support!");
        setErrorShow(true);
      })
      .finally(() => {
        setIsGetInfoLoading(false);
      });
  };
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
          setErrorMessage(result.message);
          setErrorShow(true);
        }
      })
      .catch((error) => {
        setErrorMessage("Something went wrong, please contact support!");
        setErrorShow(true);
      })
      .finally(() => {
        setCityLoading(false);
      });
  };
  const HandleCountry = (e) => {
    setCountry(e.target.value);
  };
  const ResentOtp = async (value, loadingValue) => {
    setResentOtpLoading(loadingValue);

    setOtpsent(false);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = value.includes("@")
      ? JSON.stringify({
          UserId: userID,
          Email: value,
        })
      : JSON.stringify({
          UserId: userID,
          Mobile: value,
        });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(
      process.env.BASE_URL + "/api/rozgaarapi/ResendOtpThird",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          setVerifyModalShow(true);
          setContactType(value);
          setOtpError(
            loadingValue !== "primaryEmail" && loadingValue !== "primaryMobile"
              ? "OtpSent"
              : ""
          );
        } else if (
          result.status_code === 200 &&
          result.message === "OTP Not send"
        ) {
          setError({
            ...error,
            alternateMobile: "Please select valid dail code",
          });
        } else {
          console.log(result.message);
        }
      })
      .catch((error) => {
        setErrorMessage("Something went wrong, please contact support!");
        setErrorShow(true);
      })
      .finally(() => {
        setResentOtpLoading("");
        setOtpsent(true);
      });
  };

  const VerifyOtp = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      UserId: userID,
      Otp: otp,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BASE_URL + "/api/rozgaarapi/VerifyOtp", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          setVerifyModalShow(false);
          setProfileVerifiedModal(true);
          contactType.includes("@") ? setPriEmail("1") : setPriMobile("1");
        } else {
          setOtpError("NotExist");
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleState = (e) => {
    setState(e.target.value);
    cityList(e.target.value);
  };

  const formValidation = () => {
    let errors = {};
    let isValid = true;

    if (!firstName || firstName === "") {
      errors.firstName = "Please enter your first name";
      isValid = false;
    }

    if (!lastName || lastName === "") {
      errors.lastName = "Please enter your last name";
      isValid = false;
    }
    if (!lastName.match(/^[a-z ,.'-]+$/i)) {
      errors.lastName = "Please enter a valid last name";
      isValid = false;
    }

    if (!userEmail || userEmail === "") {
      errors.email = "Please enter a valid email address ";
      isValid = false;
    }
    if (!dob || dob === "") {
      errors.dob = "Please enter your Date of Birth";
      isValid = false;
    }
    if (!address || address === "") {
      errors.address = "Please enter your address";
      isValid = false;
    }
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
    if (alternateEmail.length > 0 && !alternateEmail.includes("@")) {
      errors.alternateEmail = "Please enter a valid email";
      isValid = false;
    }
    if (
      alternateMobile
        ? alternateMobile.length < 10 && alternateMobile.length > 0
        : ""
    ) {
      errors.alternateMobile = "Please enter a valid mobile number";
      isValid = false;
    }
    if (Whatsapp.length < 10 && Whatsapp.length > 0) {
      errors.Whatsapp = "Please enter a valid mobile number";
      isValid = false;
    }

    if (!mobile || mobile === "" || mobile.length < 10) {
      errors.mobile = "Please enter a valid mobile number ";
      isValid = false;
    }
    if (!userEmail || userEmail === "" || !userEmail.includes("@")) {
      errors.email = "Please enter a valid email";
      isValid = false;
    } else {
    }
    setError(errors);
    return isValid;
  };

  const fileChangedHandler = (event) => {
    let errors = {};
    let isValid = true;

    let file = event.target.files[0];

    if (file.size > 10e6) {
      errors.file = "Maxium file size is 10mb.";
      isValid = false;
    } else {
      setProfilePicture(file);
    }
    setError(errors);
    return isValid;
  };

  const pages = [
    {
      name: "Work Profile",
      href: "https://www.rozgaarindia.com/employer-workplace/my-profile",
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
          Best Remote work and freelance projects at RozgaarIndia.com via Times
          Ascent
        </title>
        <link
          rel="canonical"
          href="https://www.rozgaarindia.com/employer-workplace/my-profile/"
        />
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
          content="https://www.rozgaarindia.com/employer-workplace/my-profile/"
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
      <SuccessMessage
        setModalOpen={setModalShow}
        modalOpen={modalShow}
        text="Your profile has been saved successfully"
        success="Personal Information"
        onClick={() => {
          setModalShow(false);
          router.push("/employer-workplace/company-information");
        }}
      />

      <ProfileVerifyOtp
        open={verifyModalShow}
        setOpen={setVerifyModalShow}
        onClick={() => VerifyOtp()}
        onClose={() => setVerifyModalShow(false)}
        onCancel={() => setVerifyModalShow(false)}
        otpError={otpError}
        value={otp}
        otpSent={otpSent}
        resentOtpLoading={resentOtpLoading}
        onInput={() => setOtpError("")}
        contact={contactType}
        onResendClick={() => ResentOtp(contactType, "primaryContact")}
        onChange={(e) => setOtp(e.target.value)}
      />

      <ConfirmModal
        heading="Are you sure want to cancel ?"
        onConfirm={() => {
          setCancelModal(false);
          router.push("/employer-workplace");
        }}
        onCancel={() => setCancelModal(false)}
        setModalOpen={setCancelModal}
        modalOpen={cancelModal}
      />

      {/* set as primary modal */}
      <ProfileVerified
      open = {profileVerifiedModal}
      setOpen = {setProfileVerifiedModal}
      heading = {`${contactType} set as primary`}
      onClose = {()=> setProfileVerifiedModal(false)}
      />

      <SocialHandles
      socialLinks = {socialLinks}
      onConfirm = {()=> setSocialHandles(false)}
      onCancel = {()=> setSocialHandles(false)}
      open = {socialHandles}
      setOpen = {setSocialHandles}
      heading = "Social Handles"
      />
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <BreadCrumb pages={pages} />
      <div className="mx-auto max-w-7xl px-4 pb-4 lg:pb-6">
        <NewFreelancerDashBoard>
          <ProfileLayout>
            {getInfoLoading ? (
              <div className="flex justify-center items-center h-[80%]">
              <CustomLoader/>
             </div>
            ) : (
              <>
                <div className="my-6 space-y-4 border border-gray-300 bg-white shadow-md rounded-lg p-4">
                  <div className="sm:flex sm:items-center sm:space-x-5">
                    <div>
                      <label className="relative cursor-pointer w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                       for="upload">
                        <input
                          type="file"
                          id="upload"
                          hidden
                          accept=".png, .jpg, .jpeg"
                          onChange={fileChangedHandler}
                        />
                        {profilePicture ? (
                          <img
                          className="relative cursor-pointer w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                            src={URL.createObjectURL(profilePicture)}
                            alt={firstName + " " + lastName}
                            title={firstName + " " + lastName}
                            loading="lazy"
                            width={120}
                            height={120}
                          />
                        ) : (
                          <>
                            {profile ? (
                              <img
                              className="relative cursor-pointer w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                                src={profile}
                                alt={firstName + " " + lastName}
                                title={firstName + " " + lastName}
                                loading="lazy"
                                width={120}
                                height={120}
                              />
                            ) : (
                              <AiOutlineCloudUpload
                                size={40}
                                className="cursor-pointer mx-auto text-gray-400"
                              />
                            )}
                          </>
                        )}
                      </label>
                      <div className="">
                        <label
                          for="upload"
                          className="cursor-pointer h-8 w-8 rounded-full bg-white border border-gray-400 absolute ml-24 -mt-10 flex items-center justify-center"
                        >
                          <BsCameraFill
                            id="upload"
                            className="cursor-pointer mx-auto text-gray-400"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 2xl:block space-y-2 mt-4 lg:mt-0">
                      <h1 className="truncate text-xl font-bold text-gray-900 lg:text-2xl">
                        {userName}
                      </h1>
                      <div className="flex items-center space-x-4">
                        <FaFacebookSquare
                          onClick={() => setSocialHandles(true)}
                          color="#1877f2"
                          className="cursor-pointer mr-2"
                          size={25}
                        />
                        <FaTwitterSquare
                          onClick={() => setSocialHandles(true)}
                          color="#1d9bf0"
                          className="cursor-pointer mr-2"
                          size={25}
                        />
                        <FaLinkedin
                          onClick={() => setSocialHandles(true)}
                          color="#0a66c2"
                          className="cursor-pointer mr-2"
                          size={25}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="block text-sm font-medium text-red-700">
                    {error.file}
                  </div>

                  <div className="space-y-1 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6 my-8 pt-6">
                    <div className="sm:col-span-3 mt-1">
                      <RiTextInputs
                        input={"SingleLineInput"}
                        placeHolder={"First Name"}
                        onInput={() => {
                          error.firstName = " ";
                        }}
                        maxLength={30}
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.firstName}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <RiTextInputs
                        input={"SingleLineInput"}
                        placeHolder={"Last Name"}
                        onInput={() => {
                          error.lastName = " ";
                        }}
                        maxLength={30}
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.lastName}
                      </div>
                    </div>

                    <div
                      className={
                        isMobile === ""
                          ? "sm:col-span-6"
                          : "sm:col-span-6 pointer-events-none opacity-70"
                      }
                    >
                      <RiTextInputs
                        input={"mobileWithDropdown"}
                        maxLength="10"
                        minLength="10"
                        onDialCodechange={(e) => {
                          setDialCode(e.target.value);
                        }}
                        dialCodeValue={dialCode}
                        checkMObileVal={checkMObileVal}
                        onChange={(e) => {
                          setMobile(
                            isNaN(parseInt(e.target.value))
                              ? ""
                              : e.target.value
                          );
                          setCheckMObileVal(
                            e.target.value.length === 10 ? true : false
                          );
                        }}
                        value={mobile}
                        onInput={() => {
                          error.mobile = " ";
                        }}
                        placeHolder={"Phone Number"}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.mobile}
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      {!isAlternativeMobile ? (
                        <div className="flex items-center">
                          <AiOutlinePlusCircle
                            className="cursor-pointer mr-2 h-4 w-4"
                            onClick={() => {
                              setIsAlternativeMobile(!isAlternativeMobile);
                            }}
                          />
                          <div
                            onClick={() => {
                              setIsAlternativeMobile(!isAlternativeMobile);
                            }}
                            className="cursor-pointer"
                          >
                            Alternate mobile number
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center">
                            <AiOutlineMinusCircle
                              className="cursor-pointer mr-2 h-4 w-4"
                              onClick={() => {
                                setIsAlternativeMobile(!isAlternativeMobile);
                              }}
                            />
                            <div
                              onClick={() => {
                                setIsAlternativeMobile(!isAlternativeMobile);
                              }}
                              className="cursor-pointer"
                            >
                              Alternate mobile number
                            </div>
                          </div>
                          <div className="sm:col-span-6">
                            <RiTextInputs
                              input={"mobileWithDropdown"}
                              maxLength="10"
                              minLength="10"
                              onDialCodechange={(e) => {
                                setAlternateDialCode(e.target.value);
                              }}
                              dialCodeValue={alternateDialCode}
                              onInput={() => {
                                error.alternateMobile = " ";
                              }}
                              checkMObileVal={checkAlternateMobile}
                              onChange={(e) => {
                                setAlternateMobile(
                                  isNaN(parseInt(e.target.value))
                                    ? ""
                                    : e.target.value
                                );
                                setCheckAlternateMobile(
                                  e.target.value.length === 10 ? true : false
                                );
                              }}
                              value={alternateMobile}
                              placeHolder={"Phone Number"}
                            />
                            <div className="block text-sm font-medium text-red-700">
                              {error.alternateMobile}
                            </div>
                            {isCheckMObile &&
                            resentOtpLoading === "primaryMobile" ? (
                              <div>loading...</div>
                            ) : (
                              <div>
                                <input
                                  type="checkbox"
                                  checked={isCheckMObile}
                                  id={"mobileCheckbox"}
                                  value={isCheckMObile}
                                  onChange={() => {
                                    alternateMobile === "" ||
                                    alternateMobile === undefined
                                      ? setError({
                                          ...error,
                                          alternateMobile: "Invalid number",
                                        })
                                      : alternateMobile.length === 10
                                      ? setIsCheckMobile(!isCheckMObile)
                                      : setError({
                                          ...error,
                                          alternateMobile: "Invalid number",
                                        });
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <label
                                  for="mobileCheckbox"
                                  className="ml-2 text-sm font-medium text-gray-900"
                                >
                                  Set as primary
                                </label>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="sm:col-span-6 pointer-events-none opacity-70">
                      <RiTextInputs
                        input={"SingleLineInput"}
                        type={"email"}
                        placeHolder={"Email"}
                        onInput={() => {
                          error.email = " ";
                        }}
                        onChange={(e) => {
                          let keyword = e.target.value.toLowerCase();
                          var re = /^[a-z@A-Z.0-9_]*$/;
                          if (keyword === "" || re.test(keyword)) {
                            setUserEmail(keyword);
                          }
                        }}
                        value={userEmail}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.email}
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      {!isAlternativeEmail ? (
                        <div className="flex items-center">
                          <AiOutlinePlusCircle
                            className="cursor-pointer mr-2 h-4 w-4"
                            onClick={() => {
                              setIsAlternativeEmail(!isAlternativeEmail);
                            }}
                          />
                          <div
                            onClick={() => {
                              setIsAlternativeEmail(!isAlternativeEmail);
                            }}
                            className="cursor-pointer"
                          >
                            Alternate email
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center mb-2">
                            <AiOutlineMinusCircle
                              className="cursor-pointer mr-2 h-4 w-4"
                              onClick={() => {
                                setIsAlternativeEmail(!isAlternativeEmail);
                              }}
                            />
                            <div
                              onClick={() => {
                                setIsAlternativeEmail(!isAlternativeEmail);
                              }}
                              className="cursor-pointer"
                            >
                              Alternate email
                            </div>
                          </div>
                          <div className="">
                            <RiTextInputs
                              input={"SingleLineInput"}
                              type={"email"}
                              placeHolder={"Email"}
                              onInput={() => {
                                error.alternateEmail = " ";
                              }}
                              onChange={(e) => {
                                let keyword = e.target.value.toLowerCase();
                                var re = /^[a-z@A-Z.0-9_]*$/;
                                if (keyword === "" || re.test(keyword)) {
                                  setAlternateEmail(keyword);
                                }
                              }}
                              value={alternateEmail}
                            />
                            <div className="block text-sm font-medium text-red-700">
                              {error.alternateEmail}
                            </div>
                            {isCheckEmail &&
                            resentOtpLoading === "primaryEmail" ? (
                              <div>loading..</div>
                            ) : (
                              <div className="mt-1.5">
                                <input
                                  checked={isCheckEmail}
                                  type="checkbox"
                                  id="emailCheckbox"
                                  value={isCheckEmail}
                                  onChange={(e) => {
                                    regEmail.test(alternateEmail)
                                      ? setIsCheckEmail(!isCheckEmail)
                                      : setError({
                                          ...error,
                                          alternateEmail: "Invalid Email",
                                        });
                                  }}
                                  className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-400 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <label
                                  for="emailCheckbox"
                                  className="ml-2 text-sm font-medium text-gray-900"
                                >
                                  Set as primary
                                </label>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="sm:col-span-6">
                      <RiTextInputs
                        input={"mobileWithDropdown"}
                        maxLength="10"
                        minLength="10"
                        onDialCodechange={(e) => {
                          setWhatsAppDialCode(e.target.value);
                        }}
                        dialCodeValue={whatsAppDialCode}
                        onInput={() => {
                          error.Whatsapp = " ";
                        }}
                        checkWhatsAppMObile={checkWhatsAppMObile}
                        onChange={(e) => {
                          setWhatsapp(
                            isNaN(parseInt(e.target.value))
                              ? ""
                              : e.target.value
                          );
                          setCheckWhatsAppMObile(
                            e.target.value.length === 10 ? true : false
                          );
                        }}
                        value={Whatsapp}
                        placeHolder={"WhatsApp Number"}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.Whatsapp}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <RiTextInputs
                        input={"Dropdown"}
                        placeHolder={"Gender"}
                        defaultGender={gender}
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <RiTextInputs
                        input={"date"}
                        type = 'date'
                        placeHolder={"Date of Birth"}
                        onInput={() => {
                          error.dob = " ";
                        }}
                        onChange={(e) => setDob(e.target.value)}
                        value={dob}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.dob}
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <RiTextInputs
                        input={"SingleLineInput"}
                        placeHolder={"Address"}
                        onInput={() => {
                          error.address = " ";
                        }}
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.address}
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      {updateLocation && country && state ? (
                        <>
                          <div className="flex justify-between items-center w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ">
                            {country}
                            <FaPen
                              className="cursor-pointer hover:text-blue-500"
                              onClick={() => {
                                setUpdateLocation(false);
                                setCountry("");
                                setState("");
                                setCity("");
                              }}
                              size={16}
                            />
                          </div>
                          <div className="mt-4">
                            <div className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ">
                              {state}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="sm:col-span-3">
                            <RiTextInputs
                              input={"Dropdown"}
                              placeHolder={"Select Country"}
                              displayData={countries}
                              onInput={() => {
                                error.country = " ";
                              }}
                              onChange={HandleCountry}
                              value={country}
                              defaultCountry={country}
                            />
                            <div className="block text-sm font-medium text-red-700">
                              {error.country}
                            </div>
                          </div>
                          <div className="sm:col-span-3 mt-4">
                            <RiTextInputs
                              input={"Dropdown"}
                              placeHolder={"Select State"}
                              displayData={states}
                              selectedCountry={country}
                              onInput={() => {
                                error.state = " ";
                              }}
                              onChange={(e) => {
                                handleState(e);
                              }}
                              value={state}
                              defaultState={state}
                            />
                            <div className="block text-sm font-medium text-red-700">
                              {error.state}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      {updateLocation && city ? (
                        <div>
                          <div className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            {city}
                          </div>
                        </div>
                      ) : (
                        <>
                          {cityLoading ? (
                            <div className="my-6">
                              <div className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                loading...
                              </div>{" "}
                            </div>
                          ) : (
                            <div className="sm:col-span-3">
                              <RiTextInputs
                                input={"Dropdown"}
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
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <RiTextInputs
                        input={"SingleLineInput"}
                        placeHolder={"Pin Code"}
                        type={"text"}
                        maxLength="6"
                        onInput={() => {
                          error.pinCode = " ";
                        }}
                        onChange={(e) =>
                          setPinCode(
                            isNaN(parseInt(e.target.value))
                              ? ""
                              : e.target.value
                          )
                        }
                        value={pinCode}
                      />
                      <div className="block text-sm font-medium text-red-700">
                        {error.pinCode}
                      </div>
                    </div>
                  </div>

                  <ActionButton
                    buttonType={"dual"}
                    buttonText={"Save"}
                    onCancelClick={() => setCancelModal(true)}
                    isLoading={isLoading}
                    secondButtonText={"Cancel"}
                    onClicK={() => {
                      formValidation()
                        ? UpdateClient()
                        : console.log("somethin went wrong");
                    }}
                  />
                </div>
              </>
            )}
          </ProfileLayout>
        </NewFreelancerDashBoard>
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
export default myprofile;
