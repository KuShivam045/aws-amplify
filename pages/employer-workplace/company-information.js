import { useEffect, useState } from "react";
import NewFreelancerDashBoard from "../../components/DashBoardComponents/NewFreelancerDashboard";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import ProfileLayout from "../../components/ProfileLayoutComponent/ProfileLayout";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import { FaPen } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
import countries from "../../JsonFiles/countries.json";
import states from "../../JsonFiles/states.json";
import Industries from "../../JsonFiles/Industries.json";
import { countryCode } from "../../JsonFiles/ContryCodes";
import SuccessMessage from "../../components/ModalComponents/SuccessMessage";
import ErrorMessage from "../../components/ModalComponents/ErrorMessage";
import ConfirmModal from "../../components/ModalComponents/ConfirmModal";
import RiHeader from "../../components/MainComponents/RiHeader";
import Head from "next/head";
import RiTextInputs from "../../components/MainComponents/RiTextInputs";
import CustomLoader from "../../components/MainComponents/CustomLoader";

const myprofilecompanyinformation = (props) => {
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [pinCode, setPinCode] = useState();
  const [gst, setGst] = useState("");
  const [dialCode, setDialCode] = useState("+91");
  const [checkMObileVal, setCheckMObileVal] = useState(false);
  const [country, setCountry] = useState("");
  const [contactPersonNumber, setContactPersonNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState("");
  const [error, setError] = useState({});
  const [cityLoading, setCityLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [designation, setDesignation] = useState();
  const [tabStatus, setTabStatus] = useState("Company");
  const [modalShow, setModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [company, setCompany] = useState("");
  const [logo, setLogo] = useState("");
  const [updateLocation, setUpdateLocation] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [getInfoLoading, setIsGetInfoLoading] = useState("");
  const [cancelModal, setCancelModal] = useState(false);

  let userID = Cookies.get("Client_userID");
  let router = useRouter();

  useEffect(() => {
    getClient();
  }, []);

  useEffect(() => {
    countryCode.map((item, index) => {
      if (item.name === country) {
        setDialCode(item.dial_code);
      }
    });
  }, [country]);

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
    formdata.append("CompanyIndustry ", industry);
    formdata.append("CompanyAddress ", companyAddress);
    formdata.append("ContactPersonDesignation ", designation);
    formdata.append("CompanyLogo ", companyLogo);
    formdata.append("GSTNumber ", gst);
    formdata.append("CompanyPincode ", pinCode);
    formdata.append("CountryCodePM ", dialCode || "+91");
    formdata.append("CompanyCity ", city);
    formdata.append("CompanyState ", state);
    formdata.append("CompanyCountry ", country);
    formdata.append("CompanyWebsite ", website);
    formdata.append("ContactPersonMobile ", contactPersonNumber);
    formdata.append("ContactPersonName ", contactPersonName);
    formdata.append("CompanyName ", companyName);
    formdata.append("CompanyIndustry ", industry);

    formdata.append("IsCompany ", companyName ? "1" : "0");

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
        } else {
          setErrorMessage(result.Reason);
          setErrorShow(true);
        }
      })
      .catch((error) => {
        setError(false);
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
          setWebsite(result.data.CompanyWebsite);
          setCompanyName(result.data.CompanyName);
          setCompanyAddress(result.data.CompanyAddress);
          setPinCode(result.data.PinCode);
          setDialCode(result.data.CountryCodePM);
          setContactPersonName(result.data.ContactPersonName);
          setContactPersonNumber(result.data.ContactPersonMobile);
          setDesignation(result.data.ContactPersonDesignation);
          setGst(result.data.GSTNumber);
          setIndustry(result.data.CompanyIndustry);
          setLogo(result.data.CompanyLogo);
          setCountry(result.data.CompanyCountry);
          setCity(result.data.CompanyCity);
          setState(result.data.CompanyState);
          setCompany(result.data.CompanyName);
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
  const handleState = (e) => {
    setState(e.target.value);
    cityList(e.target.value);
  };

  const formValidation = () => {
    let errors = {};
    let isValid = true;

    if (!companyName || companyName === "") {
      errors.companyName = "Please Enter Company Name";
      isValid = false;
    }
    if (country !== "") {
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
    }
    if (gst.length > 0 && gst.length < 15) {
      errors.gst = "Please Enter Correct GSTIn";
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
      setCompanyLogo(file);
    }
    setError(errors);
    return isValid;
  };

  const pages = [
    {
      name: "Company Profile",
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
          href="https://www.rozgaarindia.com/employer-workplace/company-information/"
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
          content="https://www.rozgaarindia.com/employer-workplace/company-information/"
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
      <BreadCrumb pages={pages} />
      <div className="mx-auto max-w-7xl px-4 pb-4 lg:pb-6">
        <NewFreelancerDashBoard>
          <ProfileLayout>
            <div className="">
              <SuccessMessage
                success={"Company Information"}
                text={"Your profile has been saved successfully"}
                setModalOpen={setModalShow}
                modalOpen={modalShow}
                onClick={() => {router.push("/employer-workplace"); setModalShow(false)}}
              />

              <ErrorMessage
                heading={"Company Information"}
                text={errorMessage}
                setModalOpen={setErrorShow}
                modalOpen={errorShow}
                onClick={() => setErrorShow(false)}
              />

              <ConfirmModal
                heading={"Are you sure want to cancel?"}
                onConfirm={() => {
                  router.push("/employer-workplace");
                  setCancelModal(false);
                }}
                onCancel={() => setCancelModal(false)}
                setModalOpen={setCancelModal}
                modalOpen={cancelModal}
              />
              {getInfoLoading ? (
                <div className="flex justify-center items-center h-[80%]">
                 <CustomLoader/>
                </div>
              ) : (
                <>
                  <div className="my-6 space-y-4 border border-gray-300 bg-white shadow-md rounded-lg p-4">
                    <div className="sm:flex sm:items-center sm:space-x-5">
                      <div>
                        <label
                          className="relative cursor-pointer w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                          for="upload"
                        >
                          <input
                            type="file"
                            id="upload"
                            hidden
                            accept=".png, .jpg, .jpeg"
                            onChange={fileChangedHandler}
                          />
                          {companyLogo ? (
                            <img
                              className="relative cursor-pointer w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                              src={URL.createObjectURL(companyLogo)}
                              alt="Company_Logo"
                              title="Company_Logo"
                              loading="lazy"
                              width={120}
                              height={120}
                            />
                          ) : (
                            <>
                              {logo ? (
                                <img
                                  className="relative cursor-pointer w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                                  src={logo}
                                  alt="Company_Logo"
                                  title="Company_Logo"
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
                      <div className="mb-2 ml-4 lg:ml-6 text-[#1678f2] font-bold uppercase text-lg mt-4 lg:mt-0 text-start">
                          {company ? company : <>Company Name</>}
                        </div>
                    </div>
                    <div className="block text-sm font-medium text-red-700">
                      {error.file}
                    </div>

                    <div className="space-y-2 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6 my-8 pt-6">
                      <div className="sm:col-span-3 mt-2">
                        <RiTextInputs
                          input={"SingleLineInput"}
                          placeHolder={"Company Name"}
                          onInput={() => {
                            error.companyName = " ";
                          }}
                          onChange={(e) => setCompanyName(e.target.value)}
                          value={companyName}
                        />
                        <div className="block text-sm font-medium text-red-700">
                          {error.companyName}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <RiTextInputs
                          input={"SingleLineInput"}
                          placeHolder={"Company Website"}
                          type={"text"}
                          onChange={(e) => setWebsite(e.target.value)}
                          value={website}
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <RiTextInputs
                          input={"SingleLineInput"}
                          placeHolder={"Company Address"}
                          onChange={(e) => setCompanyAddress(e.target.value)}
                          value={companyAddress}
                        />
                      </div>

                      <div className="sm:col-span-6">
                        {updateLocation && country && state ? (
                          <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <div className="p-2 border border-gray-300 rounded-lg flex justify-between items-center">
                                {country}
                                <FaPen
                                  className="cursor-pointer text-blue-700"
                                  onClick={() => {
                                    setUpdateLocation(false);
                                    setCountry("");
                                    setState("");
                                    setCity("");
                                  }}
                                  size={16}
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <div className="p-2 border border-gray-300 rounded-lg flex justify-between items-center">{state}</div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6">
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
                            
                            <div className="sm:col-span-3">
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
                            
                          </div>
                        )}
                      </div>

                      <div className="sm:col-span-6">
                        {updateLocation && city ? (
                           <div className="sm:col-span-3">
                           <div className="p-2 border border-gray-300 rounded-lg flex justify-between items-center">{city}</div>
                          </div>
                        ) : (
                          <>
                            {cityLoading ? (
                              <>
                                 <div className="sm:col-span-3">
                              <div className="p-2 border border-gray-300 rounded-lg flex justify-between items-center">
                                    loading...
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="">
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
                              </>
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

                      <div className="sm:col-span-3">
                        <RiTextInputs
                          input={"SingleLineInput"}
                          placeHolder={"Contact Person Name"}
                          type={"text"}
                          onChange={(e) => setContactPersonName(e.target.value)}
                          value={contactPersonName}
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <RiTextInputs
                          input={"mobile"}
                          maxLength="10"
                          minLength="10"
                          dialCode={dialCode || "+91"}
                          checkMObileVal={checkMObileVal}
                          onChange={(e) => {
                            setContactPersonNumber(
                              isNaN(parseInt(e.target.value))
                                ? ""
                                : e.target.value
                            );
                            setCheckMObileVal(
                              e.target.value.length === 10 ? true : false
                            );
                          }}
                          value={contactPersonNumber}
                          placeHolder={"Contact Person Number"}
                          required={country === "India" ? true : false}
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <RiTextInputs
                          input={"SingleLineInput"}
                          placeHolder={"Designation"}
                          type={"text"}
                          onChange={(e) => setDesignation(e.target.value)}
                          value={designation}
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <RiTextInputs
                          input={"SingleLineInput"}
                          placeHolder={"GST (Optional)"}
                          type={"text"}
                          maxLength="15"
                          onInput={() => {
                            error.gst = " ";
                          }}
                          onChange={(e) => setGst(e.target.value)}
                          value={gst}
                        />
                        <div className="block text-sm font-medium text-red-700">
                        {error.gst}
                      </div>
                      </div>

                      <div className="sm:col-span-3">
                        <RiTextInputs
                          input={"Dropdown"}
                          placeHolder={"Industry"}
                          displayData={Industries}
                          onChange={(e) => setIndustry(e.target.value)}
                          value={industry}
                          defaultIndustry={industry}
                        />
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
                          : console.log("something went wrong");
                      }}
                    />
                  </div>
                </>
              )}
            </div>
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
export default myprofilecompanyinformation;
