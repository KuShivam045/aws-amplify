import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ArticleAreaWeb from "../components/HomeAndLandingPages/ArticleAreaWeb";
import JoinAsFreelancer from "../components/HomeAndLandingPages/JoinAsFreelancer";
import RequestACallback from "../components/HomeAndLandingPages/RequestACallback";
import HomePageHero from "../components/HomePageHero";

import TrustedBy from "../components/TrustedBy";
import { articleListApi } from "./api/articleListApi";
import SkillsBasedWork from "../components/HomeAndLandingPages/SkillsBasedWork";
import { skillListApi } from "./api/skillListApi";
import NewRequirementCard from "../components/HomeAndLandingPages/NewRequirementCard";
import { requirementListApi } from "./api/requirementListApi";
import HireForOptions from "../components/HomeAndLandingPages/HireForOptions";
import FutureOfWork from "../components/HomeAndLandingPages/FutureOfWork";
import MatchedFreelancers from "../components/HomeAndLandingPages/MatchedFreelancers";
import HowRiCanHelp from "../components/HomeAndLandingPages/HowRiCanHelp";
import NewRequirementCardMobile from "../components/HomeAndLandingPages/NewRequirementCardMobile";
import RiHeader from "../components/MainComponents/RiHeader";
import RISkeletonLoading from "../components/RISkeletonLoading";
import FreelancerJobCard from "../components/CardComponents/FreelancerJobCard";
import Head from "next/head";
import LogoSchema from "../components/Schema/LogoSchema";

const HomePage = (props) => {
  const [articleData, setArticleData] = useState([]);
  const [skills, setSkills] = useState([]);
  const [requirementData, setRequirementData] = useState([]);
  const [bannerWeb, setBannerWeb] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataHireFor = [
    {
      key: 1,
      image: "/assets/HireFor/HireFor1.jpg",
      heading: "One Time Task",
      subheading: "Hire Freelancers for one-time gig work",
      bulletA: "Looking for a graphic designer to create a logo for my startup",
      bulletB: "I want a product demo video of beauty products for youtube",
      textColor: "text-indigo-700 hover:text-indigo-500",
      bgColor:
        "text-indigo-400 bg-indigo-400/10 ring-1 ring-inset ring-indigo-400/20 hover:bg-indigo-400/10 hover:text-indigo-300 hover:ring-indigo-300",
    },
    {
      key: 2,
      image: "/assets/HireFor/HireFor2.jpg",
      heading: "Monthly Basis",
      subheading: "Hire freelancers continuous monthly term",
      bulletA:
        "I want a graphic designer to design social media posts everyday for 2 months",
      bulletB: "I want a data entry expert to work for a insurance company",
      textColor: "text-emerald-700 hover:text-emerald-600",
      bgColor:
        "text-emerald-400 bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20 hover:bg-emerald-400/10 hover:text-emerald-300 hover:ring-emerald-300",
    },
    {
      key: 3,
      image: "/assets/HireFor/HireFor3.jpg",
      heading: "Contract Work",
      subheading: "Hire for a short-term or a long-term project",
      bulletA:
        "Need a react website developer to work on an e-commerce project ",
      bulletB:
        "Looking for customer service agents to provide call support to clients",
      textColor: "text-lime-700 hover:text-lime-600",
      bgColor:
        "text-lime-400 bg-lime-400/10 ring-1 ring-inset ring-lime-400/20 hover:bg-lime-400/10 hover:text-lime-300 hover:ring-lime-300",
    },
    {
      key: 4,
      image: "/assets/HireFor/HireFor4.jpg",
      heading: "On Commission",
      subheading: "Hire freelancer for commission basis",
      bulletA: "We are looking for a POS agents for providing verified leads",
      bulletB: "Hiring sales agents to promote app downloads with KYC",
      textColor: "text-amber-700 hover:text-amber-600",
      bgColor:
        "text-yellow-400 bg-yellow-400/10 ring-1 ring-inset ring-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-300 hover:ring-yellow-300",
    },
  ];

  const Bannerlist = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      BannerType: "home",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/freelancerapp/rozgaarapi/BannerImageList",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setBannerWeb(result.data[1].ImageURL);
      })

      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    Bannerlist();
    setArticleData(props.articleCardList?.data);
    setSkills(props.allSkills?.data);
    setRequirementData(props.requirementList?.data);
  }, []);
  const logoSchema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://www.rozgaarindia.com/",
    logo: "https://www.sasone.in/IPassets/rozgaarIcon.png",
  };

  return (
    <main>
        <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Freelance Jobs & Projects | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Post a job requirement,hire professional freelancers from India to work remotely,onsite or hybrid.Get quotes from independent short term contractors"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/IPassets/rozgaarIcon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/IPassets/rozgaarIcon.png"
        />
        <meta
          property="og:title"
          content="Freelance Jobs & Projects | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Post a job requirement,hire professional freelancers from India to work remotely,onsite or hybrid.Get quotes from independent short term contractors"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/"
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
          content="Freelance Jobs & Projects | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Post a job requirement,hire professional freelancers from India to work remotely,onsite or hybrid.Get quotes from independent short term contractors"
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
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      {loading ? (
        <RISkeletonLoading loadingType={"Main_Banner"} />
      ) : (
        <HomePageHero imgUrl={bannerWeb} />
      )}

      <TrustedBy />
      <div className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8 py-12 md:py-16 lg:hidden">
        <div className="w-full">
          <h2 className="text-2xl lg:text-4xl font-bold text-start lg:text-center ">
            Recent Freelance Job post on Rozgaar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 mt-8 lg:mt-14">
            {requirementData.length > 0
              ? requirementData.slice(0, 4).map((item, index) => {
                  return (
                    <div key={index} className="">
                      <FreelancerJobCard data={item} />
                    </div>
                  );
                })
              : ""}
          </div>

          <a
            href="/freelance-job-posting"
            className="flex justify-end items-end"
          >
            <span className="inline-flex py-3 text-base font-semibold hover:text-blue-600">
              View More
            </span>
          </a>
        </div>
      </div>

      <MatchedFreelancers />
      <FutureOfWork />
      <HireForOptions data={dataHireFor} />
      <HowRiCanHelp />
      <div className="hidden lg:block max-w-7xl mx-auto py-12 md:py-16 md:pb-24 px-6 sm:px-8">
        <h2 className="text-4xl font-bold text-start sm:text-center">
          Get inspired from the recent posts
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 max-w-full mx-auto mt-16">
          {requirementData &&
            requirementData
              ?.slice(0, 4)
              .map((item, index) => (
                <NewRequirementCard key={index} data={item} />
              ))}
        </div>
      </div>

      <SkillsBasedWork data={skills?.length > 0 ? skills : []} />
      <ArticleAreaWeb
        data={articleData?.length > 0 ? articleData?.slice(0, 6) : []}
      />
      <JoinAsFreelancer />
      <RequestACallback />
      <Footer />
    </main>
  );
};

export default HomePage;

export async function getServerSideProps(context) {
  try {
    const articleCardList = await articleListApi();
    const allSkills = await skillListApi();
    const requirementList = await requirementListApi();

    const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
    const FirstName = context.req.cookies.Client_FirstName || null;
    const LastName = context.req.cookies.Client_LastName || null;
    const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

    const userAgent = context?.req?.headers["user-agent"];
    const isMobile = Boolean(
      userAgent?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    const props = {
      articleCardList,
      allSkills,
      requirementList,
      isMobile,
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
