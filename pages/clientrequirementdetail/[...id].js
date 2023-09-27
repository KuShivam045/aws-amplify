import { useEffect, useState } from "react";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import CustomModalTheme from "../../components/CustomModalTheme";
import Footer from "../../components/Footer";
import RiHeader from "../../components/MainComponents/RiHeader";
import classes from "./ClientRequirementDetail.module.css"
import { useRouter } from "next/router";
import SharePost from "../../components/ShareComponents/SharePost";
import RequirementPageHeader from "../../components/DashBoardComponents/RequirementPageHeader";
import RequirementDetailArea from "../../components/DashBoardComponents/RequirementDetailArea";
import ApplicationDetail from "../../components/DashBoardComponents/ApplicationDetail";
import TopFiveFreelancer from "../../components/DashBoardComponents/TopFiveFreelancers";
import Payments from "../../components/DashBoardComponents/Payments";
import ProposalsList from "../../components/DashBoardComponents/ProposalsList";
import WaitListUsers from "../../components/DashBoardComponents/WaitListUsers";
import AddOnRequirements from "../../components/DashBoardComponents/AddOnRequirements";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import RedirectFreelancer from "../../components/ModalComponents/RedirectFreelancer";
import Head from "next/head";

const clientRequirementdetail = (props) => {
  const router = useRouter();
  const RequirementID = router.query.id[0];
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [closeModalShow, setCloseModalShow] = useState(false);
  const [addonData, setAddonData] = useState([]);
  const [requirementApplication, setRequirementApplication] = useState([]);

  const [headerDetail, setHeaderDetail] = useState({
    FirstName: " ",
    LastName: " ",
    FreelancerPolicy: " ",
    Status: " ",
    Skills: [],
    RequirementType: " ",
    ClosePostButton: true,
  });

  const [requirementDetail, setRequirementDetailArea] = useState({
    Title: " ",
    Description: " ",
    CompanyName: " ",
    CompanyLogo: " ",
    CompanyWebsite: " ",
    RequirementType: " ",
    UpdatedDate: " ",
    IsCompany: " ",
    Skills: [],
    Location: "",
    FreelancerPolicy: " ",
    FirstName: "",
    LastName: "",
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

  const [paymentsData, setPaymentsData] = useState("");

  const [proposalsDetails, setProposalDetails] = useState({
    Skills: [],
    Title: "",
    Description: "",
    Unit: "",
    budget: "",
    RequirementType: "",
    Currency: "",
  });
  const [proposalGenericData, setProposalgenricData] = useState([]);
  const [shareModalShow, setShareModalShow] = useState(false);
  const [freelancerRequirementId, setFreelancerRequirementId] = useState("");

  const { asPath } = useRouter();
  let pathname = asPath;

  useEffect(() => {
    RequirmentDetailApi();
    addonDataApi();
    // pageViewTracker();
  }, [pathname]);

  const RequirmentDetailApi = () => {
    setIsLoading(true);
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
      process.env.BASE_URL + "/api/client/RequirementDetailClientView",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setFreelancerRequirementId(result.data.RequirementID);
        setRequirementDetailArea({
          ...requirementDetail,
          Title: result.data.Title,
          Description: result.data.Description,
          DescriptionHTML: result.data.DescriptionHTML,
          CompanyName: result.data.CompanyName,
          CompanyLogo: result.data.CompanyLogo,
          CompanyWebsite: result.data.CompanyWebsite,
          RequirementType: result.data.RequirementType,
          FreelancerPolicy: result.data.FreelancerPolicy,
          UpdatedDate: result.data.UpdatedDate,
          IsCompany: result.data.IsCompany,
          Skills: result.data.Skills,
          Location: result.data.City,
          FirstName: result.data.FirstName,
          LastName: result.data.LastName,
          CreatedDate: result.data.CreatedDate,
          Country: result.data.Country,
          State: result.data.State,
          City: result.data.City,
          Pincode: result.data.Pincode,
          OneSkill: result.data.Skills[0],
        });
        setHeaderDetail({
          ...headerDetail,
          FirstName: result.data.FirstName,
          LastName: result.data.LastName,
          FreelancerPolicy: result.data.FreelancerPolicy,
          Skills: result.data.Skills,
          Status: result.data.Status,
          RequirementType: result.data.RequirementType,
        });
        setPaymentsData(result.data.RequirementPayments);
        setApplicationDetails({
          ...applicationDetails,
          WaitList: result.data.WaitList,
          Applied: result.data.Applied,
          Addons: result.data.Addons,
          Unit: result.data.BudgetUnit,
          PraposalAmount: result.data.Budget,
          RequirementType: result.data.RequirementType,
          Currency: result.data.BudgetCurrency,
          CompanyName: result.data.CompanyName,
          IsCompany: result.data.IsCompany,
          IsHybrid: result.data.IsHybrid,
          IsOnsite: result.data.IsOnsite,
          IsRemote: result.data.IsRemote,
        });
        setProposalDetails({
          ...proposalsDetails,
          Skills: result.data.Skills,
          Title: result.data.Title,
          Description: result.data.Description,
          Unit: result.data.BudgetUnit,
          budget: result.data.Budget,
          RequirementType: result.data.RequirementType,
          Currency: result.data.BudgetCurrency,
        });
        setProposalgenricData(result.data.Proposal);
        setRequirementApplication(result.data.RequirementApplication);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const ClosePosting = () => {
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

    fetch(process.env.BASE_URL + "/api/client/CloseRequirement", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          window.location.reload();
        } else {
          alert("try again");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const ClosePost = () => {
    return (
      <CustomModalTheme onClose={() => setCloseModalShow(false)} open={closeModalShow}>
        <div className={classes.btnContainer}>
          <div className={classes.closePostHeading}>
            Are you sure want to close this requirement ?
          </div>
          <div className={classes.closePostButtonsConatiner}>
            <div className={classes.closePostButtons}>
              <ActionButton
                buttonText={"Yes"}
                buttonType={"small"}
                onClick={() => {
                  ClosePosting();
                  setCloseModalShow(false);
                }}
              />
              <ActionButton
                buttonText={"No"}
                buttonType={"small"}
                onClick={() => setCloseModalShow(false)}
              />
            </div>
          </div>
        </div>
      </CustomModalTheme>
    );
  };

  const addonDataApi = () => {
    setIsLoading(true);
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

    fetch(process.env.BASE_URL + "/api/client/AvailableAddons", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAddonData(result.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const workTypeColor = (workType) => {
    if (applicationDetails.RequirementType === "commission") {
      return "Other";
    }
    if (applicationDetails.RequirementType === "monthly-basis") {
      return "Temporary";
    }
    if (applicationDetails.RequirementType === "onetime") {
      return "Part-time";
    }

    if (applicationDetails.RequirementType === "contract") {
      return "Contractor";
    }
  };

  const LocationType = () => {
    if (applicationDetails.IsRemote === "1") {
      return "TELECOMMUTE";
    }
    if (applicationDetails.IsOnsite === "1") {
      return "Walk-In";
    }
    if (applicationDetails.IsHybrid === "1") {
      return "TELECOMMUTE";
    }
  };
  const shareOnMobile = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "rozgaarindia.com",
          text: " ",
          url:
            "https://rozgaarindia.com/freelancer-" +
            requirementDetail.RequirementType +
            "-job" +
            "/" +
            requirementDetail.Title.replace(/[^a-zA-Z ]/g, " ")
              .split("  ")
              .join("-")
              .split(" ")
              .join("-")
              .split("--")
              .join("-") +
            "/" +
            RequirementID,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    }
  };

  const pages = [
    {
      name: "Requirement Detail",
      href: "https://www.rozgaarindia.com/clientrequirementdetail/" + RequirementID,
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
        Freelancer Requirement Specifications | Rozgaar India
        </title>
        <link rel="canonical" href={"https://www.rozgaarindia.com/clientrequirementdetail/" + RequirementID}/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Promote your job requirement and receive top professional freelancer profiles. Rozgaar making short-term hire easier and faster"
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
          content="Freelancer Requirement Specifications | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Promote your job requirement and receive top professional freelancer profiles. Rozgaar making short-term hire easier and faster"
        />
        <meta
          property="og:url"
          content={"https://www.rozgaarindia.com/clientrequirementdetail/" + RequirementID}
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
          content="Freelancer Requirement Specifications | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Promote your job requirement and receive top professional freelancer profiles. Rozgaar making short-term hire easier and faster"
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
      {closeModalShow && <ClosePost />}
      <RedirectFreelancer setModalOpen={setModal} modalOpen={modal} href="https://freelancer.rozgaarindia.com/signup"/>
      {shareModalShow && (
        <SharePost
          closeModal={() => setShareModalShow(false)}
          device={"Mobile"}
          url={
            "https://rozgaarindia.com/freelancer-" +
            requirementDetail.RequirementType +
            "-job" +
            "/" +
            requirementDetail.Title.split(" ")
              .join("-")
              .replace(/[^a-zA-Z ]/g, "-") +
            "/" +
            RequirementID
          }
        />
      )}
      <div className="mb-2 sm:mb-10">
        <RequirementPageHeader
          headerDetail={headerDetail}
          OnSharePOst={() => shareOnMobile()}
          OnClosePOst={() => setCloseModalShow(true)}
          device={"Mobile"}
          isLoading={isLoading}
        />

        <div className="lg:flex justify-between  w-full my-2 sm:my-4 px-4 max-w-7xl sm:mx-auto gap-2">
          <div className="w-full space-y-3">
            <RequirementDetailArea
              isLoading={isLoading}
              requirementDetail={requirementDetail}
            />
            <TopFiveFreelancer
              requirementApplication={requirementApplication}
            />
            <Payments
              paymentsData={paymentsData}
              RequirementID={RequirementID}
              isLoading={isLoading}
            />
            <AddOnRequirements
              addonData={addonData}
              RequirementID={RequirementID}
              isLoading={isLoading}
            />
            {proposalsDetails.WaitList > 0 ? <WaitListUsers /> : <> </>}
          </div>
          <div className="w-full space-y-4 mt-4 lg:mt-0">
            <ApplicationDetail
              applicationDetails={applicationDetails}
              isLoading={isLoading}
              showModal={() => setModal(true)}
            />
            <ProposalsList
              proposalsDetails={proposalsDetails}
              proposalGenericData={proposalGenericData}
              isLoading={isLoading}
            />
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
export default clientRequirementdetail;
