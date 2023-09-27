import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import BreadCrumb from '../../components/MainComponents/BreadCrumb'
import NewFreelancerDashBoard from '../../components/DashBoardComponents/NewFreelancerDashboard'
import HireType from '../../components/HowtoHire/HireType'
import Banner from '../../components/HowtoHire/Banner'
import Faq from '../../components/HowtoHire/Faq'
import HowToHireSec from '../../components/HowtoHire/HowToHireSec'
import { useRouter } from 'next/router'
import RiHeader from '../../components/MainComponents/RiHeader'
import Head from 'next/head'

const howtohirefreelancer = (props) => {
  const [show, setShow] = useState(false);
  const [Data, setData] = useState([]);
  const [question] = useState([]);
  const [answer] = useState([]);
  const router = useRouter();

  useEffect(() => {
    FrequentlyAskedQuestions()
  }, []);

  const pages = [
    { name: 'How to hire', href: 'https://www.rozgaarindia.com/employer-workplace/how-to-hire-freelancer', current: true },
  ]

  const FrequentlyAskedQuestions = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Question: question,
      Answer: answer,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BASE_URL + "/api/rozgaarapi/GetFaq", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        How to Hire best Freelancers on Rozgaar- Step-by-Step Guide
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/employer-workplace/how-to-hire-freelancer/"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Post a freelance job requirement with great job description and define your budget; Find the best skilled freelancer, sign NDA, pay safe and get your job done"
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
          content="How to Hire best Freelancers on Rozgaar- Step-by-Step Guide"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Post a freelance job requirement with great job description and define your budget; Find the best skilled freelancer, sign NDA, pay safe and get your job done"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/employer-workplace/how-to-hire-freelancer/"
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
          content="How to Hire best Freelancers on Rozgaar- Step-by-Step Guide"
        />
        <meta
          property="twitter:description"
          content="Post a freelance job requirement with great job description and define your budget; Find the best skilled freelancer, sign NDA, pay safe and get your job done"
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
          <Banner UserLoggedIn={props.UserLoggedIn} />
          <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="w-full">
              <div className='mt-4 lg:mt-0'>
                <HireType />
              </div>
              <div className='mt-4 lg:mt-0'>
                <HowToHireSec />
              </div>
              <div className='mt-10 lg:mt-12'>
                <Faq faqs={Data} onClick={() => setShow(!show)} show = {show} setShow = {setShow}/>
              </div>
            </div>
          </div>
        </NewFreelancerDashBoard>
      </div>
      <Footer />
    </div>
  )
}

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

export default howtohirefreelancer