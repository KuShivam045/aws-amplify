import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import Profile from "../../components/FreelancerProfile/Profile";
import RiHeader from "../../components/MainComponents/RiHeader";
import { useRouter } from "next/router";
import Head from "next/head";

const freelancerprofile = (props) => {
  const router = useRouter();
  const userID = props.profile_Id;
  const [loading, setLoading] = useState(false);
  const [freelancerProfileImage, setFreelancerProfileImage] = useState({
    firstName: "",
    lastName: "",
  });
  const [profileImageData, setProfileImageData] = useState({
    profilePicture: "",
    CoverImage: "",
    firstName: "",
    lastName: "",
    CompanyName: "",
    primarySkill: "",
    isAvailable: "",
    availableCountry: "",
    availableCity: "",
    SocialMedia: [],
  });
  const [aboutFreelancerData, setAboutFreelancerData] = useState({
    skills: [],
    professionalTitle: "",
    description: "",
  });
  const [menuAreaData, setMenuAreaData] = useState({
    portfolio: [],
    certification: [],
    experience: [],
    education: [],
  });
  const [workDetailData, setWorkDetailData] = useState({
    isAvailable: "",
    isMonthly: "",
    isOnCommision: "",
    isContractual: "",
    isOneTime: "",
    languages: [],
  });

  useEffect(() => {
    GetFreelancerProfileAPI();
    //   pageViewTracker();
  }, []);

  const GetFreelancerProfileAPI = async () => {
    setLoading("GetFreelancerProfile");
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );

    var formdata = new FormData();
    formdata.append("FreelancerId", userID);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      process.env.BASE_URL +
        "/api/freelancerapp/rozgaarapi/ApprovedFreelancerProfile",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setProfileImageData({
            profilePicture: result.data.ProfilePicture,
            firstName: result.data.FirstName,
            lastName: result.data.LastName,
            primarySkill: result.data.Skills[0].Skills,
            isAvailable: result.data.IsAvailable,
            Country: result.data.Country,
            City: result.data.City,
            SocialMedia: result.data.SocialMedia,
            CoverImage: result.data.CoverImage,
            CompanyName: result.data.CompanyName,
          });
          setAboutFreelancerData({
            skills: result.data.Skills,
            professionalTitle: result.data.ProfessionalTitle,
            description: result.data.Description,
          });
          setMenuAreaData({
            portfolio: result.data.Portfolio,
            certification: result.data.Certification,
            experience: result.data.WorkExperience,
            education: result.data.Education,
          });
          setWorkDetailData({
            isAvailable: result.data.IsAvailable,
            isMonthly: result.data.IsMonthly,
            isOnCommision: result.data.IsOnCommision,
            isContractual: result.data.IsContractual,
            isOneTime: result.data.IsOneTime,
            languages: result.data.Languages,
          });
          setFreelancerProfileImage({
            firstName: result.data.FirstName,
            lastName: result.data.LastName,
          });
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(""));
  };
  const pages = [
    {
      name: "Freelancer Profile",
      href: "https://www.rozgaarindia.com/employer-workplace/freelancer-profile/"+ router.query.id,
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
        {profileImageData.CompanyName ? profileImageData.CompanyName + " " + `Profile | job | Rozgaar India` : profileImageData.firstName + " " + profileImageData.lastName + " " + `Profile | job | Rozgaar India`}
        </title>
        <link rel="canonical" href={"https://www.rozgaarindia.com/freelancer-profile/"+ router.query.id }/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={profileImageData.CompanyName ? profileImageData.CompanyName+ " " + profileImageData.availableCity + "," + profileImageData.availableCountry + " " + profileImageData.isAvailable + " " + `Skills - ` +
        aboutFreelancerData.skills.map((item) => {
          return (item.Skills)
        }): profileImageData.firstName + " " + profileImageData.lastName + " " + profileImageData.availableCity + "," + profileImageData.availableCountry + " " + profileImageData.isAvailable + " " + `Skills - ` +
          aboutFreelancerData.skills.map((item) => {
            return (item.Skills)
          })}
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
          content={profileImageData.CompanyName ? profileImageData.CompanyName + " " + `Profile | job | Rozgaar India` : profileImageData.firstName + " " + profileImageData.lastName + " " + `Profile | job | Rozgaar India`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={profileImageData.CompanyName ? profileImageData.CompanyName+ " " + profileImageData.availableCity + "," + profileImageData.availableCountry + " " + profileImageData.isAvailable + " " + `Skills - ` +
        aboutFreelancerData.skills.map((item) => {
          return (item.Skills)
        }): profileImageData.firstName + " " + profileImageData.lastName + " " + profileImageData.availableCity + "," + profileImageData.availableCountry + " " + profileImageData.isAvailable + " " + `Skills - ` +
          aboutFreelancerData.skills.map((item) => {
            return (item.Skills)
          })}
        />
        <meta
          property="og:url"
          content={"https://www.rozgaarindia.com/freelancer-profile/"+ router.query.id }
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
          content={profileImageData.CompanyName ? profileImageData.CompanyName + " " + `Profile | job | Rozgaar India` : profileImageData.firstName + " " + profileImageData.lastName + " " + `Profile | job | Rozgaar India`}
        />
        <meta
          property="twitter:description"
          content={profileImageData.CompanyName ? profileImageData.CompanyName+ " " + profileImageData.availableCity + "," + profileImageData.availableCountry + " " + profileImageData.isAvailable + " " + `Skills - ` +
        aboutFreelancerData.skills.map((item) => {
          return (item.Skills)
        }): profileImageData.firstName + " " + profileImageData.lastName + " " + profileImageData.availableCity + "," + profileImageData.availableCountry + " " + profileImageData.isAvailable + " " + `Skills - ` +
          aboutFreelancerData.skills.map((item) => {
            return (item.Skills)
          })}
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
      <Profile
        profile={profileImageData}
        aboutFreelancerData={aboutFreelancerData}
        menuAreaData={menuAreaData}
        workDetailData={workDetailData}
      />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const profile_Id = context.query.id || null;
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
      profile_Id,
    },
  };
}

export default freelancerprofile;
