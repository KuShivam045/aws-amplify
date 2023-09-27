import React, { useState, useEffect } from "react";
import NewFreelancerDashBoard from "../../components/DashBoardComponents/NewFreelancerDashboard";
import Head from "next/head";
import LogoSchema from "../../components/Schema/LogoSchema";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import MyApplicationSnippet from "../../components/DashBoardComponents/MyApplicationSnippet";
import { myRequirementApplicationsAPI } from "../api/MyRequirementApplicationsAPI";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { dashBoardData } from "../api/dashBoardData";
import JobCard from "../../components/CardComponents/JobCard";
import MyProposal from "../../components/DashBoardComponents/MyProposal";
import ProfileHealth from "../../components/DashBoardComponents/ProfileHealth";
import RiFooter from "../../components/MainComponents/RiFooter";
import RozgaarIsProtected from "../../components/DashBoardComponents/RozgaarIsProtected";
import Footer from "../../components/Footer";
import RiHeader from "../../components/MainComponents/RiHeader";

const freelancerworkplace = (props) => {
  const [postArequirementDetails, setPostArequirementDetails] = useState([]);
  const [dashboardDataList, setDashboardDataList] = useState(
    props.DashBoarddata
  );
  const [profileHealthData, setProfileHealthData] = useState({
    userName: "",
    EmptyProfileFields: [],
    AccountBalance: "",
    ProfileCompleted: "",
  });
  const [freelancerProposal, setFreelancerProposal] = useState([]);
  const [addonData, setAddonData] = useState();

  const [dayTime, setDayTime] = useState();
  const router = useRouter();
  var today = new Date();
  var curHr = today.getHours();
  useEffect(() => {
    setPostArequirementDetails(props.RecommendedListData.data);
    setDashboardDataList(props.DashBoarddata.data);
    setProfileHealthData({
      ...profileHealthData,
      userName: props.DashBoarddata.data.UserName,
      EmptyProfileFields: props.DashBoarddata.data.EmptyProfileFields,
      AccountBalance: props.DashBoarddata.data.AccountBalance,
      ProfileCompleted: props.DashBoarddata.data.ProfileCompleted,
    });
    setFreelancerProposal(props.DashBoarddata.FreelancerProposal);
    if (curHr < 12) {
      setDayTime("Good Morning");
    } else if (curHr < 18) {
      setDayTime("Good Afternoon");
    } else {
      setDayTime("Good Evening");
    }
  }, []);

  const closePosting = (RequirementID) => {
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

  const logoSchema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://www.rozgaarindia.com/freelancerworlplace",
    logo: "https://www.sasone.in/IPassets/rozgaarIcon.png",
  };

  const pages = [
    {
      name: "Client Work Place",
      href: "https://www.rozgaarindia.com/freelancerworlplace",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
          Employer Dashboard | Rozgaar India
        </title>
        <link
          rel="canonical"
          href="https://www.rozgaarindia.com/employer-workplace"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Manage freelancers in your workplace dashboard. Receive freelancers profiles and proposals, connect via chat or call, and manage payments—all from a single dashboard."
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
          content="Manage freelancers in your workplace dashboard. Receive freelancers profiles and proposals, connect via chat or call, and manage payments—all from a single dashboard."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/employer-workplace"
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
          content="Manage freelancers in your workplace dashboard. Receive freelancers profiles and proposals, connect via chat or call, and manage payments—all from a single dashboard."
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
      <LogoSchema data={logoSchema} />
      <div className=" bg-zinc-200">
        <RiHeader
          userLoggedIn={props.UserLoggedIn}
          profile={props.ProfilePicture}
          firstName={props.FirstName}
          lastName={props.LastName}
        />
        <BreadCrumb pages={pages} />
        <div className="mx-auto max-w-7xl px-4">
          <NewFreelancerDashBoard>
            <div className="">
              <div>
                <div className="bg-white shadow-md border border-gray-300 rounded-lg flex justify-between px-4 py-4 mb-6 mt-6 lg:mt-0">
                  <div>
                    <div className="flex gap-1 text-xl font-normal">
                      {dayTime},
                      <div className="font-bold">
                        {props.FirstName &&
                          props.FirstName.charAt(0).toUpperCase() +
                            props.FirstName.slice(1)}
                      </div>
                    </div>
                    <p className="text-base">
                      Hope you are having a lovely day!
                    </p>
                  </div>
                  <a href={"/par-stepfirst"} className="hidden lg:block">
                    <div className="mt-4 mb-2">
                      <button
                        className="w-full px-2 flex justify-center bg-blue-500 text-white py-2 rounded-md tracking-wide
                          font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                      >
                        Post A Requirement
                      </button>
                    </div>
                  </a>
                </div>

                <img
                  src="/assets/banners/NewDashboardBanner.png"
                  className="hidden lg:block rounded-lg border border-gray-300"
                  alt="Interact_And_Work_With_Our_Global_Clientele"
                  title="Interact_And_Work_With_Our_Global_Clientele"
                  loading="lazy"
                  width={"100%"}
                  height={170}
                />
              </div>
              <div className="lg:flex my-4 gap-4 w-full">
                <div className="w-full lg:w-[70%] bg-white shadow-md p-4 border border-gray-300 rounded-lg">
                  <MyApplicationSnippet
                    postArequirementDetails={postArequirementDetails}
                    addonData={addonData}
                    closePost={closePosting}
                    Text={"My Requirements"}
                  />
                  {dashboardDataList?.RecommendedRequirments?.length > 0 && (
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-2">
                      Recommended Requirement
                    </h2>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-x-4 gap-y-2">
                    {dashboardDataList?.RecommendedRequirments?.length > 0
                      ? dashboardDataList?.RecommendedRequirments.slice(
                          0,
                          4
                        ).map((item, index) => {
                          return (
                            <div key={index} className="">
                              <JobCard data={item} />
                            </div>
                          );
                        })
                      : ""}
                  </div>
                  {dashboardDataList?.RecommendedRequirments?.length > 0 ? (
                    <a href="/requirementlist">
                      <div className="text-right py-2 text-base font-semibold hover:text-blue-600">
                        View More
                      </div>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-full lg:w-[30%] mt-6 lg:mt-0 space-y-2">
                  <MyProposal freelancerProposal={freelancerProposal} />
                  <ProfileHealth profileHealthData={profileHealthData} />
                  <RozgaarIsProtected />
                </div>
              </div>
            </div>
          </NewFreelancerDashBoard>
        </div>
        <Footer UserLoggedIn={props.UserLoggedIn} />
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const RecommendedListData = await myRequirementApplicationsAPI(
    context.req.cookies.Client_userID
  );
  const DashBoarddata = await dashBoardData(context.req.cookies.Client_userID);
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
      RecommendedListData,
      DashBoarddata,
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default freelancerworkplace;
