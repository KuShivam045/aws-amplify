import React, { useEffect, useState } from "react";
import RedirectFreelancer from "../../components/ModalComponents/RedirectFreelancer";
import SharePost from "../../components/ShareComponents/SharePost";
import RequirementPageHeader from "../../components/DashBoardComponents/RequirementPageHeader";
import RequirementDetailArea from "../../components/DashBoardComponents/RequirementDetailArea";
import ApplicationDetail from "../../components/DashBoardComponents/ApplicationDetail";
import RequirementCard from "../../components/HomeAndLandingPages/RequirementCard";
import Footer from "../../components/Footer";
import RiHeader from "../../components/MainComponents/RiHeader";
import SimilarPost from "../../components/DashBoardComponents/SimilarPost";
import Head from "next/head";
import { useRouter } from "next/router";

const freelancerjobs = (props) => {
  const router = useRouter();
  const [requirementData, setRequirementData] = useState([]);
  const [shareModalShow, setShareModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [headerDetail, setHeaderDetail] = useState({
    FreelancerPolicy: "",
    Status: "",
    Skills: [],
    RequirementType: "",
    FirstName: "",
    LastName: "",
  });
  const [requirementDetail, setRequirementDetailArea] = useState({
    Title: "",
    Description: "",
    CompanyName: "",
    CompanyLogo: "",
    CompanyWebsite: "",
    RequirementType: "",
    UpdatedDate: "",
    IsCompany: "",
    Skills: [],
    Location: "",
    FreelancerPolicy: "",
    FirstName: "",
    LastName: "",
    Addons: [],
    Country: "",
    State: "",
    City: "",
    OneSkill: "",
  });
  const [applicationDetails, setApplicationDetails] = useState({
    PraposalAmount: " ",
    Currency: " ",
    Unit: " ",
    Addons: [],
    Applied: "",
    WaitList: "",
    RequirementType: "",
    IsCompany: "",
    CompanyName: "",
    IsHybrid: "",
    IsOnsite: "",
    IsRemote: "",
  });

  const RequirementID = props.freelance_reqId;
  const pathname = props.resolvedUrl;

  useEffect(() => {
    requirmentDetailApi();
  }, [pathname]);

  const requirmentDetailApi = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      RequirementId: RequirementID,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/client/RequirementDetailPublicView",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setRequirementData(result.data.SimilarRequirements);
        setRequirementDetailArea({
          ...requirementDetail,
          Title: result.data.Title,
          Description: result.data.Description,
          CompanyName: result.data.CompanyName,
          CompanyLogo: result.data.CompanyLogo,
          DescriptionHTML: result.data.DescriptionHTML,
          CompanyWebsite: result.data.CompanyWebsite,
          RequirementType: result.data.RequirementType,
          FreelancerPolicy: result.data.FreelancerPolicy,
          UpdatedDate: result.data.UpdatedDate,
          IsCompany: result.data.IsCompany,
          Skills: result.data.Skills,
          Location: result.data.Location,
          FirstName: result.data.FirstName,
          LastName: result.data.LastName,
          Addons: result.data.Addons,
          CreatedDate: result.data.CreatedDate,
          Country: result.data.Country,
          State: result.data.State,
          City: result.data.City,
          Pincode: result.data.Pincode,
          OneSkill: result.data.Skills[0],
        });
        setHeaderDetail({
          ...headerDetail,
          FreelancerPolicy: result.data.FreelancerPolicy,
          Skills: result.data.Skills,
          Status: result.data.Status,
          RequirementType: result.data.RequirementType,
          FirstName: result.data.FirstName,
          LastName: result.data.LastName,
        });
        setApplicationDetails({
          ...applicationDetails,
          WaitList: result.data.WaitList,
          Applied: result.data.Applied,
          Addons: result.data.Addons,
          Unit: result.data.BudgetUnit,
          IsCompany: result.data.IsCompany,
          PraposalAmount: result.data.Budget,
          RequirementType: result.data.RequirementType,
          Currency: result.data.BudgetCurrency,
          CompanyName: result.data.CompanyName,
          IsHybrid: result.data.IsHybrid,
          IsOnsite: result.data.IsOnsite,
          IsRemote: result.data.IsRemote,
        });
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const UrlType = (workType) => {
    if (requirementDetail.RequirementType === "commission") {
      return "commission";
    }
    if (requirementDetail.RequirementType === "monthly-basis") {
      return "monthly";
    }
    if (requirementDetail.RequirementType === "onetime") {
      return "one-time";
    }

    if (requirementDetail.RequirementType === "contract") {
      return "contract";
    }
  };

  return (
    <div>
      <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        {"freelancer job for -" +
            " " +
            requirementDetail.Skills.map((item) => {
              return item.Skill.split(",");
            })}
        </title>
        <link rel="canonical" href={"https://www.rozgaarindia.com/" + router.asPath}/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            requirementDetail.Title +
            "." +
            `Skills Required for freelancer job.` +
            `Skills - ` +
            requirementDetail.Skills.map((item) => {
              return item.Skill.split(",");
            })
          }
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
          content={"freelancer job for -" +
            " " +
            requirementDetail.Skills.map((item) => {
              return item.Skill.split(",");
            })}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            requirementDetail.Title +
            "." +
            `Skills Required for freelancer job.` +
            `Skills - ` +
            requirementDetail.Skills.map((item) => {
              return item.Skill.split(",");
            })
          }
        />
        <meta
          property="og:url"
          content={"https://www.rozgaarindia.com/" + router.asPath}
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
          content={"freelancer job for -" +
            " " +
            requirementDetail.Skills.map((item) => {
              return item.Skill.split(",");
            })}
        />
        <meta
          property="twitter:description"
          content={
            requirementDetail.Title +
            "." +
            `Skills Required for freelancer job.` +
            `Skills - ` +
            requirementDetail.Skills.map((item) => {
              return item.Skill.split(",");
            })
          }
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
      {modal && (
        <RedirectFreelancer
          href={
            "https://freelancer.rozgaarindia.com/requirementDetail/" +
            RequirementID
          }
          modalOpen={modal}
          setModalOpen={setModal}
        />
      )}
      {shareModalShow && (
        <SharePost
          closeModal={() => setShareModalShow(false)}
          url={window.location.href}
        />
      )}
      <div className="mb-2 sm:mb-10">
        <RequirementPageHeader
          headerDetail={headerDetail}
          isLoading={isLoading}
          OnSharePOst={() => setShareModalShow(true)}
        />
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full my-2 sm:my-4 px-4 max-w-7xl sm:mx-auto gap-2">
          <div className="w-full">
            <RequirementDetailArea
              isLoading={isLoading}
              requirementDetail={requirementDetail}
            />
          </div>
          <div className="">
            <ApplicationDetail
              applicationDetails={applicationDetails}
              isLoading={isLoading}
              showModal={() => setModal(true)}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full my-2 sm:my-4 px-4">
          {/* {requirementData.length > 0 ? (
            <RequirementCard
              RequirementData={requirementData}
              isLoading={isLoading}
              heading={"Similar Requirements"}
            />
          ) : (
            <></>
          )} */}
          {requirementData.length > 0 ? (
            <h2 className="text-xl lg:text-2xl font-bold mt-7 mb-3">
              Similar Requirements
            </h2>
          ) : (
            ""
          )}
          <SimilarPost postArequirementDetails={requirementData} />
          {requirementData.length > 0 ? (
            <a
              href="/freelance-job-posting"
              className="flex justify-end items-end"
            >
              <span className="inline-flex text-right py-2 text-base font-semibold hover:text-blue-600">
                View More
              </span>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  try {
    // Extract parameters from the URL query
    const [freelance_reqType, freelance_jobTitle, freelance_reqId] =
      context.query.id;

    // Ensure that freelance_jobTitle is defined and not empty
    const validFreelanceJobTitle =
      typeof freelance_jobTitle === "string" && freelance_jobTitle.trim()
        ? freelance_jobTitle
        : null;

    const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
    const FirstName = context.req.cookies.Client_FirstName || null;
    const LastName = context.req.cookies.Client_LastName || null;
    const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

    // Extract cookies from the request
    /*  const {
       Client_userLoggedIn: UserLoggedIn,
       Client_FirstName: FirstName,
       Client_LastName: LastName,
       Client_ProfilePicture: ProfilePicture = "",
     } = context.req.cookies || {}; */

    // Determine if the user is accessing from a mobile device
    const userAgent = context?.req?.headers["user-agent"];
    const isMobile = Boolean(
      userAgent?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    // Create the props object
    const props = {
      isMobile,
      freelance_reqType,
      freelance_jobTitle: validFreelanceJobTitle,
      freelance_reqId,
      resolvedUrl: context.resolvedUrl,
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    };

    return { props };
  } catch (error) {
    // Handle errors
    console.error("Error in getServerSideProps:", error);

    // Return an empty object or an error state if necessary
    return { props: {} };
  }
}
export default freelancerjobs;
