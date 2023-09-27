import React from "react";
import Footer from "../components/Footer";
import BreadCrumb from "../components/MainComponents/BreadCrumb";
import ExploreSkillsNavbar from "../components/ExploreSkillComponents/ExploreSkillsNavbar";
import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";

const skills = (props) => {
  const pages = [
    {
      name: "Explore Skills",
      href: "https://www.rozgaarindia.com/skills",
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
        <title>Freelance Skills Examples | Rozgaar India</title>
        <link rel="canonical" href="https://www.rozgaarindia.com/skills" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Top In-demand Freelance skills. Data Entry, Programmer, Website developer, App developer, Social media Expert. Customer Suport agents, Content Writers, Graphic Designers."
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
          content="Freelance Skills Examples | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Freelance Job Posting Website, hire professional freelancers to work remotely,onsite or hybrid"
        />
        <meta property="og:url" content="https://www.rozgaarindia.com/skills" />
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
          content="Freelance Skills Examples | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Freelance Job Posting Website, hire professional freelancers to work remotely,onsite or hybrid"
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
      <div className="">
        <img
          src="/assets/ExploreSkill/exploreskillsbanner.jpg"
          alt="Explore_The_Most_In_Demand_Freelancer_Skills"
          title="Explore_The_Most_In_Demand_Freelancer_Skills"
          loading="lazy"
          className="block lg:hidden h-[140px]"
          width={"100%"}
          height={146}
        />
        <img
          src="/assets/ExploreSkill/Skill_Web_banner.webp"
          alt="Explore_The_Most_In_Demand_Freelancer_Skills"
          title="Explore_The_Most_In_Demand_Freelancer_Skills"
          loading="lazy"
          className="hidden lg:block relative"
          width={"100%"}
          height={280}
        />
        <div className="absolute top-[25%] lg:top-[20%] left-[6%] lg:left-[35%]">
          <h1 className="text-xl lg:text-4xl font-bold lg:text-center lg:leading-[50px] pb-4 lg:pb-12">
            Explore the most
            <br />
            In-demand Freelancer Skills
          </h1>
          <h2 className="lg:text-xl font-medium lg:text-center">
            Each skill includes a pool of talented
            <br />
            freelancers to hire on our
            <br />
            work marketplace
          </h2>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="w-full ">
          <div className="border-b-4 border-[#3d2086] w-[15%] my-[30px] mx-auto rounded-lg"></div>
          <div className="">
            <ExploreSkillsNavbar />
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

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default skills;
