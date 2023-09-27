import Head from "next/head";
import React from "react";
import BreadCrumb from "../components/MainComponents/BreadCrumb";
import Footer from "../components/Footer";
import RiHeader from "../components/MainComponents/RiHeader";

const futurework = (props) => {

  const pages = [
    {
      name: "Future Work",
      href: "https://www.rozgaarindia.com/future-of-work",
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
        Freelance is The Future of Work | Rozgaar india
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/future-of-work" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Connecting the world with talented verified freelancers faster than ever before to collaborate, and get work done in a safe and secure online environment."
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
          content="Freelance is The Future of Work | Rozgaar india"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Connecting the world with talented verified freelancers faster than ever before to collaborate, and get work done in a safe and secure online environment."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/future-of-work"
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
          content="Freelance is The Future of Work | Rozgaar india"
        />
        <meta
          property="twitter:description"
          content="Connecting the world with talented verified freelancers faster than ever before to collaborate, and get work done in a safe and secure online environment."
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
      {/* <LogoSchema data={logoSchema} /> */}
      <BreadCrumb pages={pages} />
      <div>
        <img
          src="/assets/Futureworkassets/bannerimageweb.jpg"
          alt="futurework"
          className="block lg:hidden relative"
        />
        <img
          src="/assets/Futureworkassets/bannerimageweb.jpg"
          alt="futurework"
          className="lg:block hidden relative"
        />
        <div className="absolute bottom-[16%] lg:top-[45%] lg:right-[4%] w-full lg:w-[35%] text-white lg:text-2xl font-semibold text-center px-6 lg:px-2">
          To connect the world with talented verified freelancers faster than
          ever before to collaborate, and get work done in a safe and secure
          online environment.
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="w-full mt-4">
          <h1 className="text-center text-2xl font-semibold  py-5  ">
            We are revolutionising the way people work and
            <br />
            debunk the archaic 9-to-5 work model
          </h1>
          <div className="border-b-4 border-[#fb6e00] w-[10%] my-[30px] mx-auto rounded-lg"></div>
          <div className="lg:flex gap-3">
            <div className="lg:w-[50%] text-xl font-semibold">
              Our mission is to simplify remote hiring providing most aligned
              freelancers for a day, month or a year fulfilling your
              professional needs.
              <div className="border-b-4 border-[#fb6e00] w-[18%] lg:w-[10%] my-[30px] rounded-lg"></div>
            </div>
            <div>
              <img
                src="/assets/Futureworkassets/firstimageweb.jpg"
                alt="futurework"
                className="w-full hidden lg:block"
              />
              <img
                src="/assets/Futureworkassets/firstimageweb.jpg"
                alt="futurework"
                className="block lg:hidden"
              />
            </div>
          </div>
          <div className="lg:flex gap-3 my-6">
            <div className="w-[50%] mr-10">
              <img
                src="/assets/Futureworkassets/secondimageweb.jpg"
                alt="futurework"
                className="w-full hidden lg:block"
              />
            </div>
            <div className="lg:w-[50%] text-xl font-semibold">
              Our easy-to-use platform enables you to manage off-balance sheet
              talented workers in a single click with confidence and trust so
              you can save time and focus on your success.
              <div className="border-b-4 border-[#1c2f43] w-[18%] lg:w-[10%] my-[30px]  rounded-lg"></div>
            </div>
            <div>
              <img
                src="/Futureworkassets/secondimagemob.jpg"
                alt="futurework"
                className="block lg:hidden"
              />
            </div>
          </div>
          <div className="lg:flex mt-12 mb-8">
            <div className="bg-[#f2f2f2] w-full lg:w-[50%] py-8 px-8 rounded-l-md ">
              <h2 className="text-xl lg:text-2xl font-normal text-center lg:text-left">
                Hire the most
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">
                Talented Freelancers
              </h3>
            </div>
            <div className="bg-[#1c2f43] w-full lg:w-[50%] py-4 lg:py-8 px-6 rounded-r-md  ">
              <a href={props.UserLoggedIn ? "/freelancerworkplace" : "/signup"}>
                <h2 className="text-2xl lg:text-4xl font-normal text-white text-center">
                  Join as a Freelancer
                </h2>
                <div className="border-b-4 border-[#fb6e00] w-[18%] lg:w-[10%] my-[30px] mx-auto  rounded-lg"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer UserLoggedIn={props.UserLoggedIn} />
    </>
  );
};

export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  /* if (!context.req.cookies.Client_userLoggedIn) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  } */

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default futurework;
