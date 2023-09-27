import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { HiOutlinePlusSm } from "react-icons/hi";
import PostARequirementBackdropTheme from "../../components/PostRequirement/PostARequirementBackdropTheme";
import TextEditor from "../../components/PostRequirement/TextEditor";
import { BsUpload } from "react-icons/bs";
import Footer from "../../components/Footer";
import AutoCompelete from "../../components/PostRequirement/AutoCompelete";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import CustomLoader from "../../components/MainComponents/CustomLoader";
import RiHeader from "../../components/MainComponents/RiHeader";
import Head from "next/head";
import RiTextInputs from "../../components/MainComponents/RiTextInputs";

const stepfirst = (props) => {
  const [showUsers, setShowUsers] = useState(false);
  const [skillList, setSkillList] = useState([]);
  const [characterCount, setCharacterCount] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checkLoading, setCheckLoading] = useState(false);
  const [relatedSkill, setRelatedSkill] = useState([]);
  const [companyImage, setCompanyImage] = useState("");
  const [error, setError] = useState({});
  const [draftReqId, setDraftReqId] = useState();
  const [website, setWebsite] = useState("");
  const [companyLogo, setCompanyLogo] = useState();
  const [getPARLoading, setGetPARLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();
  let userID = Cookies.get("Client_userID");
  let ReqId = Cookies.get("ReqId");

  useEffect(() => {
    setDraftReqId(props.requirementID);
    setCompanyName(props.getParApi.Data.CompanyName);
    setDescription(
      props.getParApi.Data.DescriptionHTML
        ? props.getParApi.Data.DescriptionHTML
        : props.getParApi.Data.Description
    );
    setSkillList(props.getParApi.Data.Skill.split(","));
    setCharacterCount(props.getParApi.Data.Title);
    setImageUrl(props.getParApi.Data.ImageUrl);
    setCompanyLogo(props.getParApi.Data.CompanyLogo);
    setWebsite(props.getParApi.Data.CompanyWebsite);
    setShowUsers(props.getParApi.Data.IsCompany === "1" ? true : false);
  }, []);

  useEffect(() => {
    RelatedSkill();
  }, [skillList]);

  const PARapi = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    var formdata = new FormData();
    formdata.append("UserId", userID);
    formdata.append("RequirementID", draftReqId ? draftReqId : "");
    formdata.append("Title", characterCount);
    formdata.append("Description", description.replace(/<[^>]*>/g, ""));
    formdata.append("DescriptionHTML", description);
    formdata.append("IsCompany", showUsers ? "1" : "0");
    formdata.append("CompanyName", companyName);
    formdata.append("Skill", skillList.toString());
    formdata.append("ImageUrl", companyImage);
    formdata.append("CompanyLogo", logo);
    formdata.append("CompanyWebsite", website);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/PostARequirementSecond",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          Cookies.set("ReqId", result.Data.RequirementID);
          router.push("/par-stepsecond/" + result.Data.RequirementID);
        } else {
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formValidation = () => {
    let errors = {};
    let isValid = true;

    if (!skillList || skillList.length < 1) {
      errors.skillList =
        " Choose the most suitable skill that matches your requirement ";
      isValid = false;
    }
    if (!characterCount || characterCount === "") {
      errors.characterCount =
        "Please enter a title that explains your requirement ";
      isValid = false;
    }
    if (!description || description === "") {
      errors.description =
        "Explain your work requirement in detail so the best freelancers can reach you";
      isValid = false;
    }

    if (showUsers) {
      if (!companyName || companyName === "") {
        errors.companyName = "Please enter your company name ";
        isValid = false;
      }
    } else {
    }
    setError(errors);
    return isValid;
  };

  const RemoveCompany = () => {
    setShowUsers(false);
    setCompanyName("");
    setCompanyLogo("");
    setWebsite("");
  };

  const RelatedSkill = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");
    let skillForRelated = skillList.toString();

    var raw = JSON.stringify({
      Skill: skillForRelated,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BASE_URL + "/api/rozgaarapi/SkillFinder", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS") {
          setRelatedSkill(result.data);
        } else {
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Best Remote work and freelance projects at RozgaarIndia.com via Times Ascent
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/par-stepfirst/" />
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
          content="https://www.rozgaarindia.com/par-stepfirst/"
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
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 sm:py-22 px-2 sm:px-5">
          {checkLoading || getPARLoading ? (
            <CustomLoader />
          ) : (
            <PostARequirementBackdropTheme
              headingsMain={"Post A Requirement"}
              subHeadingMain={
                "In 1/4 quick steps connect with top freelancers "
              }
              step={"25"}
            >
              <>
                <RiTextInputs
                  input={"SingleLineInput"}
                  type={"text"}
                  maxLength={100}
                  onInput={() => {
                    error.characterCount = " ";
                  }}
                  placeHolder={
                    "eg. I need an app developer for a ecommerce site"
                  }
                  label={"Give a Title to your Requirement"}
                  onChange={(e) => setCharacterCount(e.target.value)}
                  value={characterCount}
                />
                <div className="block text-sm font-medium text-red-700">
                  {error.characterCount}
                </div>
                <div className="text-sm text-neutral-700 text-right">
                  {characterCount.length}/100
                </div>
                <label className="block text-sm font-medium text-black cursor-pointer">
                  Select Skills
                </label>
                <AutoCompelete
                  skillList={skillList}
                  setSkillList={setSkillList}
                  placeholder={"Select upto 7 skills"}
                  onInput={() => {
                    error.skillList = " ";
                  }}
                />
                <div className="block text-sm font-medium text-red-700">
                  {error.skillList}
                </div>
                <div>
                  {relatedSkill && skillList.length > 0 ? (
                    <div className="flex flex-wrap max-h-52 overflow-auto gap-1.5">
                      {relatedSkill.map((item, i) => {
                        return (
                          <div
                            className="flex justify-between items-center border border-gray-300 rounded px-2 py-1.5 text-sm hover:bg-black hover:text-white hover:cursor-pointer"
                            key={i}
                            onClick={() => {
                              setSkillList([...skillList, item]);
                            }}
                          >
                            <span>{item}</span>
                            <div>
                              <HiOutlinePlusSm className="ml-1" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <label className="block text-sm font-medium text-black cursor-pointer mt-5">
                  Describe your requirement
                </label>
                <div
                  className={
                    focus
                      ? "border border-blue-500 border-solid p-0.5 my-2"
                      : "border border-gray-300 rounded-lg p-0.5 my-2"
                  }
                >
                  <TextEditor
                    onChangeContent={setDescription}
                    setFocus={setFocus}
                    value={description}
                  />
                </div>
                <div className="block text-sm font-medium text-red-700">
                  {error.description}
                </div>
                <p className="text-sm text-neutral-700 text-right mb-1">
                  {description.replace(/<[^>]*>/g, "").length}/1000
                </p>
                <label className="block text-sm font-medium text-black cursor-pointer">
                  Upload Sample for work(Optional)
                </label>
                <div className="p-2 border rounded flex justify-between my-2">
                  <label className="cursor-pointer" for="upload">
                    <input
                      type="file"
                      id="upload"
                      hidden
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        e.target.files[0]
                          ? setCompanyImage(e.target.files[0])
                          : setCompanyImage(companyImage);
                      }}
                    />
                    {companyImage ? (
                      companyImage.name.slice(-40)
                    ) : (
                      <>
                        {imageUrl ? (
                          imageUrl.substring(imageUrl.lastIndexOf("/") + 1)
                        ) : (
                          <>upload </>
                        )}
                      </>
                    )}
                  </label>

                  <label for="upload" className="cursor-pointer">
                    <BsUpload id="upload" className="cursor-pointer" />
                  </label>
                </div>

                <label className="block text-sm font-medium text-black mb-2 mt-4">
                  Are you hiring for a company?
                </label>
                <div className="space-y-1">
                  <div className="flex items-center pl-4 border border-gray-200 rounded cursor-pointer">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      required
                      value="yes"
                      onChange={() => setShowUsers(true)}
                      checked={showUsers ? true : false}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="male"
                      onChange={() => setShowUsers(true)}
                      value={showUsers}
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border border-gray-200 rounded cursor-pointer">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      required
                      value="no"
                      onChange={RemoveCompany}
                      checked={showUsers ? false : true}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <label
                      for="female"
                      onChange={RemoveCompany}
                      value={showUsers}
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
                <div className="block text-sm font-medium text-red-700">
                  {error.showUsers}
                </div>

                {showUsers ? (
                  <div className="space-y-2 my-2 mt-3">
                    <RiTextInputs
                      input={"SingleLineInput"}
                      type={"text"}
                      placeHolder={"eg. ABC limited"}
                      label={"Enter your company name"}
                      value={companyName}
                      onInput={() => {
                        error.companyName = " ";
                      }}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <div className="block text-sm font-medium text-red-700">
                      {error.companyName}
                    </div>
                    <RiTextInputs
                      input={"SingleLineInput"}
                      type={"text"}
                      placeHolder={"eg. https://www.rozgaarindia.com"}
                      label={"Company Website (optional)"}
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                    <label className="block text-sm font-medium text-black cursor-pointer mt-5">
                      Company Logo (Optional)
                    </label>
                    <div className="p-4 border border-gray-300 outline-none flex justify-between my-4 text-xl">
                      <label className="cursor-pointer" for="logo">
                        <input
                          type="file"
                          id="logo"
                          hidden
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => {
                            e.target.files[0]
                              ? setLogo(e.target.files[0])
                              : setLogo(logo);
                          }}
                        />
                        {logo ? (
                          logo.name.slice(-40)
                        ) : (
                          <>
                            {companyLogo ? (
                              companyLogo.substring(
                                companyLogo.lastIndexOf("/") + 1
                              )
                            ) : (
                              <>upload </>
                            )}
                          </>
                        )}
                      </label>

                      <label for="logo" className="cursor-pointer">
                        <BsUpload id="logo" className="cursor-pointer" />
                      </label>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {isLoading ? (
                  <div
                    role="status"
                    className="flex justify-center items-center my-6"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      formValidation()
                        ? PARapi()
                        : console.log("Something's wrong");
                    }}
                  >
                    <ActionButton buttonText={"Save & Continue"} />
                  </div>
                )}
              </>
            </PostARequirementBackdropTheme>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
/* export async function getServerSideProps(context) {
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
} */
export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";
  const Req_Id = context.req.cookies.ReqId || null;
  const User_Id = context.req.cookies.Client_userID || null;

  const draftAllowed = await checkIsDraftAllowed(
    context.req.cookies.Client_userID
  );
  let requirementID = "";
  let isFreeReqAllowed = "";
  let getParApi = "";

  if (
    draftAllowed.status_code === 200 &&
    draftAllowed.status === "SUCCESS" &&
    draftAllowed.IsDraft === "True"
  ) {
    requirementID = draftAllowed.data.RequirementID || null;
    getParApi = await getParDetailsApi(
      requirementID ? requirementID : Req_Id,
      User_Id
    );
  } else {
    isFreeReqAllowed = await isFreeRequirementAllowed(
      context.req.cookies.Client_userID
    );
  }

  if (
    isFreeReqAllowed.status === "SUCCESS" &&
    isFreeReqAllowed.status_code === 200 &&
    isFreeReqAllowed.Return === "False"
  ) {
    return {
      props: {},
      redirect: {
        destination:
          "/checkusereligibility/" + context.req.cookies.Client_userID,
      },
    };
  }

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
      User_Id,
      Req_Id,
      getParApi,
      requirementID,
    },
  };
}
export default stepfirst;
